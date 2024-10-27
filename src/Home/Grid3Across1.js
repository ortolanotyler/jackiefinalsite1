import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from './HeroSection2a'; // Importing HeroSection2a format

const Grid3Across1 = () => {
  return (
    <Box sx={{ width: '80%', padding: '1rem', backgroundColor: 'white' , margin: '0 auto'}}>
      <Grid container spacing={1} justifyContent="center">
      
        {/* Second Row */}
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
      featureText="HAIR"
      headlineText="Dragon Braid: Easy Pull-Through Braid Tutorial for Beginners"
      imagePath="DragonBraid/dragonbraidthumbnail.jpg"
      linkUrl="/articles/dragon-braid"
    />
          </Box>
        </Grid>

     
      </Grid>
    </Box>
  );
};

export default Grid3Across1;