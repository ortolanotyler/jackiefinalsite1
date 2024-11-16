// src/PopCulture/GridSectionPopCulture.js

import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from './HeroSection2a';

const GridSectionPopCulture = () => {
  return (
    <Box sx={{ width: '80%', padding: '1rem', backgroundColor: 'white', margin: '0 auto' }}>
      <Grid container spacing={1} justifyContent="center">
        
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="POP CULTURE"
              headlineText="Margot Robbie's BARBIE Makeup & DIY '90s Roller Skate Costume"
              imagePath="dcc2.jpg"
              linkUrl="/articles/EmilyInParis/emilyinparis.jpg"
              isFlipped={false}
            />
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="POP CULTURE"
              headlineText="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll 🎀"
              imagePath="BarbieDoll/JackieWyersBarbieThumb.jpeg"
              linkUrl="/articles/wicked-collaborations-2024"
              isFlipped={true}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="POP CULTURE"
              headlineText="Top 5 Must-Have Barbie Collaborations for Adult Fans in 2024"
              imagePath="Hair1/hair1.webp"
              linkUrl="/articles/hair-growth-secrets"
              isFlipped={false}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ width: 'auto', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="HAIR"
              headlineText="Dragon Braid: Easy Pull-Through Braid Tutorial for Beginners"
              imagePath="DragonBraid/dragonbraidthumbnail.jpg"
              linkUrl="/articles/dragon-braid"
              isFlipped={true}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="POP CULTURE"
              headlineText="Ariana Grande as Glinda Makeup – Wicked the Movie"
              imagePath="Wicked/GlindaThumb.webp"
              linkUrl="/articles/wicked"
              isFlipped={false}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="POPULAR"
              headlineText="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll"
              imagePath="BarbieDoll/JackieWyersBarbieThumb1.JPG"
              linkUrl="/barbie-doll"
              isFlipped={true}
            />
          </Box>
        </Grid>

        {/* Additional Entries for Other Articles */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="POP CULTURE"
              headlineText="Halloween Makeup Roundup: Spooky Glam Looks for 2024"
              imagePath="Halloween/HalloweenThumb.jpg"
              linkUrl="/articles/halloween"
              isFlipped={true}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="POP CULTURE"
              headlineText="Period Drama Makeup: Get the Classic Look"
              imagePath="PeriodDrama/perioddrama_thumb.jpg"
              linkUrl="/articles/period-drama"
              isFlipped={true}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="VINTAGE VIBES"
              headlineText="Retro Summer Beauty Trends: A Guide to Timeless Looks"
              imagePath="SummerBeauty/summer_beauty_thumb.jpg"
              linkUrl="/articles/summer-beauty"
              isFlipped={false}
            />
          </Box>
        </Grid>

        {/* Repeat similar blocks for each remaining article in the PopCulture folder */}

      </Grid>
    </Box>
  );
};

export default GridSectionPopCulture;