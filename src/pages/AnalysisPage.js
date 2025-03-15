import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import GaitAnalysisResults from '../components/GaitAnalysisResults';
import { getVideoMetadata } from '../services/api';

const AnalysisPage = () => {
  const { videoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [metadata, setMetadata] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getVideoMetadata(videoId);
        setMetadata(data);
      } catch (err) {
        setError(err.response?.data?.detail || 'Error loading video data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [videoId]);
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Gait Analysis
        </Typography>
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center">
            {error}
          </Typography>
        ) : (
          <GaitAnalysisResults videoId={videoId} metadata={metadata} />
        )}
      </Box>
    </Container>
  );
};

export default AnalysisPage; 