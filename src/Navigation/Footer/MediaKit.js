import React from 'react';
import MediaKitSlider from './MediaKitSlider';
import TextReveal from '../../Components/TextReveal';
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel';
import { Grid, Paper } from '@mui/material';
import FeaturesAndShoutouts from './FeaturesAndShoutouts';
import { Helmet } from 'react-helmet-async';

import RotatingText from '../AppBar/RotatingText';
import DividerWithText from '../../Home/DividerWithText';
import SmallAdSenseAd from '../../Home/AdsenseSmall';

const MediaKit = () => {
  const images = [
    '/Images/MediaKit/MediaKit1.png',
    '/Images/MediaKit/MediaKit2.jpeg',
  ];

  return (
    <div>
      <Helmet>
                <title>Press & Media - Jackie Wyers</title>
                <meta name="description" content="Check out the latest articles and features showcasing Jackie's best work" />
           
            </Helmet>
      <TextReveal text="MEDIA KIT & PRESS" />
   
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <MediaKitSlider images={images} />
        </Grid>
        <DividerWithText text="Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text="Ad"/>
        <Grid item xs={12} md={6}>
          <FeaturesAndShoutouts />
        </Grid>
      
        <Grid item xs={12}>
          <BrandCarousel />
        </Grid>


      </Grid>
      <DividerWithText text="Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text="Ad"/>
<DividerWithText text="Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text="Ad"/>

    </div>
  );
};

export default MediaKit;
