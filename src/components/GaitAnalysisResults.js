import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import VideoPlayer from './VideoPlayer';

const GaitAnalysisResults = ({ videoId, metadata }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>
        Gait Analysis Results
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <VideoPlayer videoId={videoId} />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Video Information
              </Typography>
              
              <Typography variant="body1">
                <strong>Video ID:</strong> {videoId}
              </Typography>
              
              {metadata && (
                <>
                  <Typography variant="body1">
                    <strong>Original Filename:</strong> {metadata.source_video}
                  </Typography>
                  <Typography variant="body1">
                    <strong>FPS:</strong> {metadata.fps}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Frame Count:</strong> {metadata.frame_count}
                  </Typography>
                  {metadata.upload_date && (
                    <Typography variant="body1">
                      <strong>Upload Date:</strong> {new Date(metadata.upload_date).toLocaleString()}
                    </Typography>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GaitAnalysisResults; 