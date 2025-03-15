import React from 'react';
import { Box } from '@mui/material';

const VideoPlayer = ({ videoId, height = 400 }) => {
  const videoUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8000/api'}/videos/${videoId}/stream`;
  
  return (
    <Box sx={{ width: '100%', height }}>
      <video
        src={videoUrl}
        controls
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </Box>
  );
};

export default VideoPlayer; 