import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Home, Upload, GitCompare, BarChart2, Running } from 'lucide-react';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component={RouterLink} 
          to="/" 
          sx={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Running size={24} />
          Runners Gait Analysis
        </Typography>
        <Box>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/"
            startIcon={<Home size={18} />}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/upload"
            startIcon={<Upload size={18} />}
          >
            Upload
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/compare"
            startIcon={<GitCompare size={18} />}
          >
            Compare
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/stats"
            startIcon={<BarChart2 size={18} />}
          >
            Stats
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 