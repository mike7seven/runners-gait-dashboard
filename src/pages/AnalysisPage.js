import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, CircularProgress, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import GaitAnalysisResults from '../components/GaitAnalysisResults';
import { getVideoMetadata } from '../services/api';
import { Activity, AlertCircle, Loader } from 'lucide-react';

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
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
        >
          <Activity size={32} color="#1976d2" />
          Gait Analysis
        </Typography>
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4, flexDirection: 'column', gap: 2 }}>
            <CircularProgress />
            <Typography variant="body1" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Loader size={16} />
              Loading analysis data...
            </Typography>
          </Box>
        ) : error ? (
          <Alert 
            severity="error" 
            icon={<AlertCircle size={24} />}
            sx={{ my: 2 }}
          >
            {error}
          </Alert>
        ) : (
          <GaitAnalysisResults videoId={videoId} metadata={metadata} />
        )}
      </Box>
    </Container>
  );
};

export default AnalysisPage; 