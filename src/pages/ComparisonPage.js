import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import VideoUploader from '../components/VideoUploader';
import { findSimilarGaits } from '../services/api';
import VideoPlayer from '../components/VideoPlayer';

const ComparisonPage = () => {
  const [comparing, setComparing] = useState(false);
  const [queryVideo, setQueryVideo] = useState(null);
  const [similarVideos, setSimilarVideos] = useState([]);
  const [error, setError] = useState(null);
  
  const handleVideoUpload = async (file) => {
    setComparing(true);
    setError(null);
    
    try {
      const result = await findSimilarGaits(file);
      setQueryVideo({
        id: result.query_id,
        file
      });
      setSimilarVideos(result.matches);
    } catch (err) {
      setError(err.response?.data?.detail || 'Error finding similar gaits');
    } finally {
      setComparing(false);
    }
  };
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Compare Running Gaits
        </Typography>
        
        <Typography variant="body1" paragraph align="center">
          Upload a video to find runners with similar gait patterns
        </Typography>
        
        {!queryVideo ? (
          <VideoUploader onUploadSuccess={handleVideoUpload} />
        ) : (
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Your Video
              </Typography>
              <VideoPlayer videoId={queryVideo.id} />
              
              <Button 
                variant="outlined" 
                sx={{ mt: 2 }}
                onClick={() => {
                  setQueryVideo(null);
                  setSimilarVideos([]);
                }}
              >
                Upload Different Video
              </Button>
            </Box>
            
            <Typography variant="h5" gutterBottom>
              Similar Gait Patterns
            </Typography>
            
            {similarVideos.length > 0 ? (
              <Grid container spacing={3}>
                {similarVideos.map((video) => (
                  <Grid item xs={12} sm={6} md={4} key={video.id}>
                    <Card>
                      <VideoPlayer videoId={video.id} height={200} />
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Similarity: {(video.score * 100).toFixed(1)}%
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Video ID: {video.id}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="body1" color="textSecondary" align="center">
                No similar videos found
              </Typography>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default ComparisonPage; 