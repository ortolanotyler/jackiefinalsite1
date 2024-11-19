import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from './HeroSection2a'; // Importing HeroSection2a format

const FeaturedGrid6 = () => {
  return (
    <Box sx={{ width: '80%', padding: '1rem', backgroundColor: 'white' , margin: '0 auto'}}>
      <Grid container spacing={1} justifyContent="center">
      <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="TAYLOR : ERAS TOUR 2024"
              headlineText="Taylor Swift Holiday Merch 2024 - Ranked!"
              imagePath="TaylorSwift/JackieWyersTaylorSwiftBetty.webp"
              linkUrl="/articles/taylor-swift-holidays-2024"
              isFlipped={true}
            />
          </Box>
        </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="LATEST"
              headlineText="Dallas Cowboys Cheerleader Makeup Tutorial"
              imagePath="dcc2.jpg"
              linkUrl="/articles/dcc-cheerleader"
              isFlipped={false}
            />
          </Box>
        </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="POP CULTURE"
              headlineText="Top 5 Must-Have Wicked Collaborations for Adult Fans in 2024"
              imagePath="Wicked2/Wicked2.webp"
              linkUrl="/articles/wicked-collaborations-2024"
              isFlipped={true}
            />
          </Box>
        </Grid>

   
        {/* First Row */}
     
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="POP CULTURE"
              headlineText='Elphaba “The Wicked Witch of The West” Makeup Tutorial💚'
              imagePath="Wicked/wicked2.webp"
              linkUrl="/articles/wicked-witch-of-the-west"
              isFlipped={false}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="FEATURED"
              headlineText="Ariana Grande as Glinda Makeup – Wicked the Movie "
              imagePath="Wicked/GlindaThumb.webp"
              linkUrl="/articles/wicked"
              isFlipped={true}
            />
          </Box>
        </Grid>

  
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="POPULAR"
              headlineText="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll "
              imagePath="BarbieDoll/JackieWyersBarbieThumb1.JPG"
              linkUrl="/barbie-doll"
              isFlipped={true}
            />
          </Box>
        </Grid>

     

     
      </Grid>
    </Box>
  );
};

export default FeaturedGrid6;