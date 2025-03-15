import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Chip } from '@mui/material';
import VideoPlayer from './VideoPlayer';
import { Percent, FileVideo, GitCompare } from 'lucide-react';

const SimilarityResults = ({ queryVideo, similarVideos }) => {
  return (
    <Box sx={{ my: 4 }}>
      {similarVideos.length > 0 ? (
        <Grid container spacing={3}>
          {similarVideos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <VideoPlayer videoId={video.id} height={200} />
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <GitCompare size={20} color="#1976d2" style={{ marginRight: 8 }} />
                    <Chip 
                      icon={<Percent size={16} />}
                      label={`${(video.score * 100).toFixed(1)}% Similar`}
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <FileVideo size={16} />
                    Video ID: {video.id}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: 'center', p: 4, border: '1px dashed #ccc', borderRadius: 2 }}>
          <GitCompare size={48} color="#9e9e9e" style={{ marginBottom: 16 }} />
          <Typography variant="body1" color="textSecondary">
            No similar videos found
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SimilarityResults; 