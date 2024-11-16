import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from './HeroSection2a';




const FeaturedGrid6 = () => {
  return (
    <Box sx={{ width: '85%', padding: '1rem', backgroundColor: 'white' , margin: '0 auto'}}>
      <Grid container spacing={1} justifyContent="center">
        {/* Row 1 */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ width: 'auto', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="FEATURED"
              headlineText="Our Fairytale Wedding Overlooking Sorrento, Italy"
              author="July 11, 2024"
              imagePath="FairytaleWedding/fairytalethumbnail.webp"
              linkUrl="/fairytalewedding"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="QUIZ"
              headlineText="Animal Pretty - Which one are you?"
              imagePath="Homepage/animals.webp"
              linkUrl="/quiz-2-home"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ width: 'auto', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="HOW-TO : IPHONE"
              headlineText="A Guide to Scroll-Stopping iPhone Photos"
              author="August 30"
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
              author="August 30"
              imagePath="Homepage/SorrentoThumbnail.webp"
              linkUrl="/sorrento"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ width: 'auto', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="TRAVEL"
              headlineText="Our Three Day Romantic Getaway in Rome, Italy"
              author="BY JACKIE WYERS"
              imagePath="Homepage/47.webp"
              linkUrl="/rome"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="NEW"
              headlineText="Hair Growth Secrets: Best Products and Tips for Your Longest Hair"
              imagePath="Hair1/hair1.webp"
              linkUrl="/articles/hair-growth-secrets"
              isFlipped={true}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>

     

     
    
  );
};

export default FeaturedGrid6;