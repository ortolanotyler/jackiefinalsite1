import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from '../../Home/HeroSection2a';

const Eeebridal = () => {
  return (
    <Box sx={{ width: '80%', margin: '1rem auto ', padding: '1rem', backgroundColor: 'white' }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Row 1 */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ width: 'auto', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="FEATURED"
              headlineText="Our Fairytale Wedding Overlooking Sorrento, Italy"
              imagePath="FairytaleWedding/fairytalethumbnail.webp"
              linkUrl="/fairytalewedding"
              isFlipped={true}
            />
          </Box>
        </Grid>
   
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ width: 'auto', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="HOW-TO : IPHONE"
              headlineText="A Guide to Scroll-Stopping iPhone Photos"
              imagePath="Homepage/coverphoot.webp"
              linkUrl="/camera-settings"
              isFlipped={true}
            />
          </Box>
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ width: 'auto', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="TRAVEL"
              headlineText="The Best Souvenirs to Bring Home from Sorrento"
              imagePath="Homepage/SorrentoThumbnail.webp"
              linkUrl="/sorrento"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box
            sx={{
              width: 'auto',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HeroSection2a
              featureText="DIY"
              headlineText="How to Make Gorgeous DIY Flower Pins for Your Wedding"
              imagePath="MammaMia/mammamiathumb.png"
              linkUrl="/diy-flowers"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box
            sx={{
              width: 'auto',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HeroSection2a
              featureText="BEAUTY"
              headlineText="Bridal Makeup: How I Created My Dream Wedding Look"
              imagePath="BridalMakeup/BridalTrialMakeupThumb.jpg"
              linkUrl="/bridalmakeup"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box
            sx={{
              width: 'auto',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HeroSection2a
              featureText="DIY"
              headlineText="Bridesmaid Boxes: Whimsical and Elegant Ideas"
              imagePath="Bridesmaids/BridesmaidBoxThumb!.jpg"
              linkUrl="/bridesmaidboxes"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ width: 'auto', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="TRAVEL"
              headlineText="Our Three Day Romantic Getaway in Rome, Italy"
              imagePath="Homepage/47.webp"
              linkUrl="/rome"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ width: 'auto', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="NEW ZEALAND"
              headlineText="New Zealand | Auckland Vlog and Experience"
              imagePath="Homepage/NZThumbnail.webp"
              linkUrl="/newzealand"
              isFlipped={true}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Eeebridal;