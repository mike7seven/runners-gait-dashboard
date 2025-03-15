import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Upload, BarChart2, GitCompare } from 'lucide-react';
import runnerIcon from '../assets/1c88446a-0293-4620-8c8d-64474e1b6a90.webp';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <img 
            src={runnerIcon} 
            alt="Runner" 
            style={{ 
              height: '80px', 
              width: 'auto'
            }} 
          />
        </Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Runners Gait Analysis
        </Typography>
        
        <Typography variant="h5" color="text.secondary" paragraph>
          Analyze and improve your running technique with AI-powered gait analysis
        </Typography>
        
        <Box sx={{ mt: 4, mb: 6 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            component={RouterLink} 
            to="/upload"
            sx={{ mx: 1 }}
            startIcon={<Upload size={20} />}
          >
            Upload Video
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large" 
            component={RouterLink} 
            to="/compare"
            sx={{ mx: 1 }}
            startIcon={<GitCompare size={20} />}
          >
            Compare Gaits
          </Button>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <Upload size={48} color="#1976d2" />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  Upload
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Upload your running videos for instant analysis of your gait mechanics.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <BarChart2 size={48} color="#1976d2" />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  Analyze
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get detailed insights into your running form with AI-powered analysis.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <GitCompare size={48} color="#1976d2" />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  Compare
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Compare your running style with others to identify areas for improvement.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage; 