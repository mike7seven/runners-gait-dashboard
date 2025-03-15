import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VideoUploader from '../components/VideoUploader';

const UploadPage = () => {
  const navigate = useNavigate();
  
  const handleUploadSuccess = (result) => {
    navigate(`/analysis/${result.video_id}`);
  };
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Upload Running Video
        </Typography>
        
        <Typography variant="body1" paragraph align="center">
          Upload a video of your running to analyze your gait pattern
        </Typography>
        
        <VideoUploader onUploadSuccess={handleUploadSuccess} />
      </Box>
    </Container>
  );
};

export default UploadPage; 