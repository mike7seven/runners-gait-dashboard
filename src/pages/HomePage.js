import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
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
          >
            Compare Gaits
          </Button>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300x140?text=Upload"
                alt="Upload"
              />
              <CardContent>
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
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300x140?text=Analyze"
                alt="Analyze"
              />
              <CardContent>
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
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300x140?text=Compare"
                alt="Compare"
              />
              <CardContent>
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