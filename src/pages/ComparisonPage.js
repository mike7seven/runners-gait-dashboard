import React, { useState } from 'react';
import { Container, Typography, Box, Button, Alert } from '@mui/material';
import VideoUploader from '../components/VideoUploader';
import { findSimilarGaits } from '../services/api';
import VideoPlayer from '../components/VideoPlayer';
import SimilarityResults from '../components/SimilarityResults';
import { GitCompare, Upload, AlertCircle, Loader } from 'lucide-react';

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
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
        >
          <GitCompare size={32} color="#1976d2" />
          Compare Running Gaits
        </Typography>
        
        <Typography 
          variant="body1" 
          paragraph 
          align="center"
        >
          Upload a video to find runners with similar gait patterns
        </Typography>
        
        {error && (
          <Alert 
            severity="error" 
            icon={<AlertCircle size={24} />}
            sx={{ mb: 3 }}
          >
            {error}
          </Alert>
        )}
        
        {comparing && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, gap: 1 }}>
            <Loader size={20} className="animate-spin" />
            <Typography>Finding similar gaits...</Typography>
          </Box>
        )}
        
        {!queryVideo ? (
          <VideoUploader onUploadSuccess={handleVideoUpload} />
        ) : (
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GitCompare size={24} color="#1976d2" />
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
                startIcon={<Upload size={18} />}
              >
                Upload Different Video
              </Button>
            </Box>
            
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <GitCompare size={24} color="#1976d2" />
              Similar Gait Patterns
            </Typography>
            
            <SimilarityResults 
              queryVideo={queryVideo} 
              similarVideos={similarVideos} 
            />
          </>
        )}
      </Box>
    </Container>
  );
};

export default ComparisonPage; 