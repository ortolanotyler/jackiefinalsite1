import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from './HeroSection2a'; // Importing HeroSection2a format

const FeaturedGrid6 = () => {
  return (
    <Box sx={{ width: '100%', padding: '30px', backgroundColor: 'white' }}>
      <Grid container spacing={2} justifyContent="center">
        {/* First Row */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="POP CULTURE"
              headlineText='Elphaba “The Wicked Witch of The West” Makeup Tutorial💚'
              author="10.11.2024"
              imagePath="Wicked/wicked2.webp"
              linkUrl="/articles/wicked-witch-of-the-west"
              isFlipped={false}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="FEATURED"
              headlineText="Ariana Grande as Glinda Makeup – Wicked the Movie "
              author="10.11.2024"
              imagePath="Wicked/GlindaThumb.webp"
              linkUrl="/articles/wicked"
              isFlipped={true}
            />
          </Box>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="HALLOWEEN"
              headlineText="Girly Pop Culture Halloween Costume Ideas 2024"
              author="09.23.2024"
              imagePath="Halloween/HalloweenThumb.jpg"
              linkUrl="/girly-pop-halloween"
              isFlipped={false}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="LATEST"
              headlineText="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll "
              author="09.23.2024"
              imagePath="BarbieDoll/JackieWyersBarbieThumb1.JPG"
              linkUrl="/barbie-doll"
              isFlipped={true}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="LATEST"
              headlineText="Top 5 Must-Have Barbie Collaborations for Adult Fans in 2024 "
              author="09.23.2024"
              imagePath="/halloweenthumb12.jpg"
              linkUrl="/barbie-roundup"
              isFlipped={false}
            />
          </Box>
        </Grid>

     
      </Grid>
    </Box>
  );
};

export default FeaturedGrid6;