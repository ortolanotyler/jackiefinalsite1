import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from './HeroSection2a'; // Assuming you have this component already

const HeroSectionGrid = () => {
  return (
    <Grid container spacing={1} justifyContent="center">
      {/* First Row */}
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ padding: '50px',height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HeroSection2a
            featureText="FASHION"
            headlineText="Victoria's Secret"
            subtext="Victoria's Secret fashion show 2014 vibes"
            author="BY JACKIE WYERS"
            imagePath="VictoriaSecret2014/VSThumbnail.jpeg"
            linkUrl="/victoriasecret"
            isFlipped={true}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
            featureText="SPRING"
            headlineText="No-Makeup Spring 🌸"
            subtext="No Makeup-Makeup Look for Spring"
            author="BY JACKIE WYERS"
            imagePath="NoMakeUpSpring/nomakeupspringthumbnail.jpeg"
            linkUrl="/nomakeupspring"
            isFlipped={false}
          />
        </Box>
      </Grid>

     

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HeroSection2a
            featureText="HOLLYWOOD"
            headlineText="Grace's Hollywood Glam"
            subtext="Grace Kelly inspired makeup tutorial"
            author="BY JACKIE WYERS"
            imagePath="GraceKelly/GraceKellyJackieWyers.jpg"
            linkUrl="/gracekelly"
            isFlipped={false}
          />
        </Box>
      </Grid>

      {/* Second Row */}
      

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HeroSection2a
            featureText="COLLAB"
            headlineText="SKIMS X Lana"
            subtext="SKIMS collaboration with Lana for Valentine's Day makeup"
            author="BY JACKIE WYERS"
            imagePath="LanaXskims/JackieWyersLanaDelReyRecreation.JPG"
            linkUrl="/lanablog"
            isFlipped={false}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HeroSection2a
            featureText="SPRING"
            headlineText="No-Makeup Spring 🌸"
            subtext="No Makeup-Makeup Look for Spring"
            author="BY JACKIE WYERS"
            imagePath="NoMakeUpSpring/nomakeupspringthumbnail.jpeg"
            linkUrl="/nomakeupspring"
            isFlipped={false}
          />
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HeroSection2a
            featureText="FALL"
            headlineText="Jean Shrimpton"
            subtext="Yardley 1965 Recreation"
            author="BY JACKIE WYERS"
            imagePath="JeanShrimpton/JeanShrimptonThumbnail.jpg"
            linkUrl="/yardley1965"
            isFlipped={true}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroSectionGrid;