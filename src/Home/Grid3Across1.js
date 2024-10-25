import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from './HeroSection2a'; // Importing HeroSection2a format

const Grid3Across1 = () => {
  return (
    <Box sx={{ width: '100%', padding: '1rem', backgroundColor: 'white' }}>
      <Grid container spacing={5} justifyContent="center">
      
        {/* Second Row */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ width: 'auto', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    <Box sx={{ width: 'auto', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <HeroSection2a
              featureText="LATEST"
              headlineText="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll "
              imagePath="BarbieDoll/JackieWyersBarbieThumb1.JPG"
              linkUrl="/barbie-doll"
              isFlipped={true}
            />
          </Box>
        </Grid>

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

     
      </Grid>
    </Box>
  );
};

export default Grid3Across1;