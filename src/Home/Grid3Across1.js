import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from './HeroSection2a'; // Importing HeroSection2a format

const Grid3Across1 = () => {
  return (
    <Box sx={{ width: '80%', padding: '1rem', backgroundColor: 'white' , margin: '0 auto'}}>
      <Grid container spacing={1} justifyContent="center">
      
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ width: 'auto', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

     
             <HeroSection2a
      featureText="HAIR"
      headlineText="Dragon Braid: Easy Pull-Through Braid Tutorial for Beginners"
      imagePath="DragonBraid/dragonbraidthumbnail.jpg"
      linkUrl="/articles/dragon-braid"
    />
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ width: '100%', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="HALLOWEEN"
              headlineText="Girly Pop Culture Halloween Costume Ideas 2024"
              imagePath="Halloween/HalloweenThumb.jpg"
              linkUrl="/girly-pop-halloween"
              isFlipped={false}
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
      

    

     
      </Grid>
    </Box>
  );
};

export default Grid3Across1;