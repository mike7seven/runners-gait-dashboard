import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { BarChart2, LineChart, PieChart, Clock } from 'lucide-react';

const StatsPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <BarChart2 size={32} color="#1976d2" />
          Running Statistics
        </Typography>
        
        <Typography variant="body1" paragraph align="center">
          This page will display statistics and insights about your running gait patterns.
        </Typography>
        
        <Box sx={{ 
          p: 4, 
          border: '1px dashed #ccc', 
          borderRadius: 2, 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        }}>
          <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', mb: 2 }}>
            <LineChart size={48} color="#9e9e9e" />
            <PieChart size={48} color="#9e9e9e" />
            <BarChart2 size={48} color="#9e9e9e" />
          </Box>
          <Typography variant="h6" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Clock size={20} />
            Statistics Dashboard Coming Soon
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default StatsPage; 