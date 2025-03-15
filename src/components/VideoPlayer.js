import React, { useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Play, FileVideo } from 'lucide-react';

const VideoPlayer = ({ videoId, height = 400 }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const videoUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8000/api'}/videos/${videoId}/stream`;
  
  const handleVideoLoad = () => {
    setLoading(false);
  };
  
  const handleVideoError = () => {
    setLoading(false);
    setError(true);
  };
  
  return (
    <Box sx={{ width: '100%', height, position: 'relative', bgcolor: 'rgba(0, 0, 0, 0.03)', borderRadius: 1 }}>
      {loading && (
        <Box sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          gap: 2
        }}>
          <CircularProgress />
          <Typography variant="body2" color="text.secondary">
            Loading video...
          </Typography>
        </Box>
      )}
      
      {error ? (
        <Box sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          gap: 2
        }}>
          <FileVideo size={48} color="#9e9e9e" />
          <Typography variant="body2" color="text.secondary">
            Error loading video
          </Typography>
        </Box>
      ) : (
        <video
          src={videoUrl}
          controls
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          poster={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%231976d2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`}
        />
      )}
    </Box>
  );
};

export default VideoPlayer; 