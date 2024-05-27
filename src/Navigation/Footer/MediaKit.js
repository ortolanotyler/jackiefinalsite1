import React from 'react';
import MediaKitSlider from './MediaKitSlider';
import TextReveal from '../../Components/TextReveal';
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel';
import { Grid, Paper } from '@mui/material';
import FeaturesAndShoutouts from './FeaturesAndShoutouts';

import RotatingText from '../AppBar/RotatingText';

const MediaKit = () => {
  const images = [
    '/Images/MediaKit/MediaKit1.png',
    '/Images/MediaKit/MediaKit2.jpeg',
  ];

  return (
    <div>
      <TextReveal text="MEDIA KIT & PRESS" />
      <Paper elevation={3} style={{ padding: '1rem' }}>
        <RotatingText/>
      </Paper>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <MediaKitSlider images={images} />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeaturesAndShoutouts />
        </Grid>
      
        <Grid item xs={12}>
          <BrandCarousel />
        </Grid>

      </Grid>
    </div>
  );
};

export default MediaKit;
