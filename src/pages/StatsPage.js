import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const StatsPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Running Statistics
        </Typography>
        
        <Typography variant="body1" paragraph align="center">
          This page will display statistics and insights about your running gait patterns.
        </Typography>
        
        <Box sx={{ p: 4, border: '1px dashed #ccc', borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            Statistics Dashboard Coming Soon
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default StatsPage; 