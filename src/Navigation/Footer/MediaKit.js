import React from 'react';
import MediaKitSlider from './MediaKitSlider';
import TextReveal from '../../Components/TextReveal';
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel';
import {  Grid } from '@mui/material';
import FeaturesAndShoutouts from './FeaturesAndShoutouts';
import MediaSplitWarnerBros from '../../About/MediasplitWarnerBros';
import MediaSplitMeanGirls from '../../About/MediaSplitMeanGirls';
import MediaSplitJuicyCouture from '../../About/MediaSplitJuicyCouture';
import MediaSplitFiori from '../../About/MediaSplitFiori';
import MediaSplitOneSize from '../../About/MediaSplitOneSize';
import MediaSplitIsopiaLashes from '../../About/MediaSplitIsopiaLashes';
import MediaSplitWondery from '../../About/MediaSplitWondery';
import MediaSplitSupergoop from '../../About/MediaSplitSupergoop';

const MediaKit = () => {
  const images = [
    '/Images/MediaKit/MediaKit1.png',
    '/Images/MediaKit/MediaKit2.png',
  ];

  return (
    <div>
   
      <TextReveal text="PRESS" />
  
   
   
        <Grid container spacing={1}>
          <Grid item xs={6}>
        <MediaKitSlider images={images} />
   
</Grid>
<Grid item xs={6}>
<FeaturesAndShoutouts />
</Grid>
<TextReveal text="PREVIOUS COLLABORATIONS" style={{ backgroundColor: 'white' }} />

<BrandCarousel />
<Grid item xs={12}>
            <MediaSplitWondery />
          </Grid>
          <Grid item xs={6}>
            <MediaSplitWarnerBros />
          </Grid>
          <Grid item xs={6}>
            <MediaSplitMeanGirls />
          </Grid>
          <Grid item xs={12}>
            <MediaSplitSupergoop />
          </Grid>
        
          <Grid item xs={12}>
            <MediaSplitJuicyCouture />
          </Grid>
          <Grid item xs={12}>
            <MediaSplitFiori />
          </Grid>
          <Grid item xs={12}>
            <MediaSplitOneSize />
          </Grid>
          <Grid item xs={12}>
            <MediaSplitIsopiaLashes />
          </Grid>
         
       
        
        </Grid>
     
    </div>
  );
};

export default MediaKit;
