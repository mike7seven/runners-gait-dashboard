import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import VideoPlayer from './VideoPlayer';

const SimilarityResults = ({ queryVideo, similarVideos }) => {
  return (
    <Box sx={{ my: 4 }}>
      {similarVideos.length > 0 ? (
        <Grid container spacing={3}>
          {similarVideos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <Card>
                <VideoPlayer videoId={video.id} height={200} />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Similarity: {(video.score * 100).toFixed(1)}%
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Video ID: {video.id}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" color="textSecondary" align="center">
          No similar videos found
        </Typography>
      )}
    </Box>
  );
};

export default SimilarityResults; 