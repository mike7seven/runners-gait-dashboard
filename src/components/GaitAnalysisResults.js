import React from 'react';
import { Box, Card, CardContent, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import VideoPlayer from './VideoPlayer';
import { FileVideo, Clock, Hash, Calendar, Info } from 'lucide-react';

const GaitAnalysisResults = ({ videoId, metadata }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Info size={24} color="#1976d2" />
        Gait Analysis Results
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <VideoPlayer videoId={videoId} />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FileVideo size={20} color="#1976d2" />
                Video Information
              </Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Hash size={18} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Video ID" 
                    secondary={videoId} 
                  />
                </ListItem>
                
                {metadata && (
                  <>
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <FileVideo size={18} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Original Filename" 
                        secondary={metadata.source_video} 
                      />
                    </ListItem>
                    
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Clock size={18} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="FPS" 
                        secondary={metadata.fps} 
                      />
                    </ListItem>
                    
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Hash size={18} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Frame Count" 
                        secondary={metadata.frame_count} 
                      />
                    </ListItem>
                    
                    {metadata.upload_date && (
                      <ListItem>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <Calendar size={18} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Upload Date" 
                          secondary={new Date(metadata.upload_date).toLocaleString()} 
                        />
                      </ListItem>
                    )}
                  </>
                )}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GaitAnalysisResults; 