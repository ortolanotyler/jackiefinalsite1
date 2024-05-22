import React from 'react';
import MediaKitSlider from './MediaKitSlider';
import TextReveal from '../../Components/TextReveal';
import FeaturedImages from './FeaturedImages';
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel';
import { Paper } from '@mui/material';

const MediaKit = () => {
  const images = [
    '/Images/MediaKit/MediaKit1.png',
    '/Images/MediaKit/MediaKit2.png',

  ];

  return (
    <div>
      <TextReveal text= "MEDIA KIT"/>
      <MediaKitSlider images={images} />
      <TextReveal text= "PREVIOUS COLLABORATIONS"/>
        <FeaturedImages />
        <Paper elevation={3} style={{ padding: '5rem' }}>
        <BrandCarousel />
        </Paper>
    </div>
  );
};

export default MediaKit;
