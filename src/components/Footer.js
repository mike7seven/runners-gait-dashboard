import React from 'react';
import { Box, Typography, Container, Link, Stack } from '@mui/material';
import { Github, Heart } from 'lucide-react';
import runnerIcon from '../assets/1c88446a-0293-4620-8c8d-64474e1b6a90.webp';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
          <img 
            src={runnerIcon} 
            alt="Runner" 
            style={{ 
              height: '20px', 
              width: 'auto'
            }} 
          />
          <Typography variant="body1" color="text.primary" align="center">
            Runners Gait Analysis
          </Typography>
        </Stack>
        
        <Typography variant="body2" color="text.secondary" align="center" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
          {'© '}
          {new Date().getFullYear()}
          {' Made with '}
          <Heart size={16} color="#dc004e" fill="#dc004e" />
          {' | '}
          <Link 
            color="inherit" 
            href="https://github.com/mike7seven/Runners-gait-analysis" 
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <Github size={16} />
            GitHub
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 