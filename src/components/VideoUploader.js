import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, CircularProgress, Typography, Box, Alert } from '@mui/material';
import { uploadVideo } from '../services/api';

const VideoUploader = ({ onUploadSuccess }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length === 0) return;
    
    const file = acceptedFiles[0];
    setUploading(true);
    setError(null);
    
    try {
      const result = await uploadVideo(file);
      onUploadSuccess(result);
    } catch (err) {
      setError(err.response?.data?.detail || 'Error uploading video');
    } finally {
      setUploading(false);
    }
  }, [onUploadSuccess]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/mp4': ['.mp4'],
      'video/quicktime': ['.mov'],
      'video/x-msvideo': ['.avi']
    },
    maxFiles: 1
  });
  
  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', my: 4 }}>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      
      <Box 
        {...getRootProps()} 
        sx={{
          border: '2px dashed #ccc',
          borderRadius: 2,
          p: 4,
          textAlign: 'center',
          cursor: 'pointer',
          bgcolor: isDragActive ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.05)'
          }
        }}
      >
        <input {...getInputProps()} />
        
        {uploading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant="h6" gutterBottom>
              {isDragActive ? 'Drop the video here' : 'Drag & drop a video file here'}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Or click to select a file
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Supported formats: MP4, MOV, AVI
            </Typography>
          </>
        )}
      </Box>
      
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }}
        disabled={uploading}
        onClick={() => document.getElementById('fileInput').click()}
      >
        Select Video
      </Button>
    </Box>
  );
};

export default VideoUploader; 