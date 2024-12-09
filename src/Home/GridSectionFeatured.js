import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from './HeroSection2a'; // Importing HeroSection2a format
import DividerWithText from './DividerWithText';
import AdSenseAd from './Adsense';
import SmallAdSenseAd from './AdsenseSmall';

const FeaturedGrid6 = () => {
  return (
    <Box sx={{ width: '80%', padding: '1rem', backgroundColor: 'white' , margin: '0 auto'}}>
     
     
      <Grid container spacing={1} justifyContent="center">
      <Grid item xs={12} sm={6} md={6} lg={4}>
  <Box
    sx={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <HeroSection2a
      featureText="FEATURED"
      headlineText="Taylor Swift Eras Tour Makeup: Recreate Iconic Looks from Lover to Midnights"
      imagePath="TaylorSwift3/TaylorEvermoreDressonJackie.JPG"
      linkUrl="/articles/taylor-swift-eras-tour"
      isFlipped={false}
    />
  </Box>
</Grid>
        
      <Grid item xs={12} sm={6} md={6} lg={4}>
  <Box sx={{ height: '100%', width: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  
        <HeroSection2a
  featureText="FEATURED"
  headlineText="Harley Quinn Beauty Evolution: Iconic Makeup Looks and Tutorials"
  imagePath="Harley/HARLEYQUINNTHUMBNAIL.webp"
  linkUrl="/articles/harley-quinn-evolution"
  isFlipped={true}
/>
  </Box>
</Grid>

        
<Grid item xs={12} sm={6} md={6} lg={4}>
  <Box sx={{ height: '100%', width: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  
<HeroSection2a
  featureText="FEATURED"
  headlineText="r.e.m. Beauty x WICKED Collection Review: Glinda Makeup Magic"
  imagePath="Wicked3/GlindaJackieWyers.jpg"
  linkUrl="/articles/rembeauty/wicked-review"
  isFlipped={true}
/>

</Box>
</Grid>

<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

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

    

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HeroSection2a
      featureText="FEATURED"
      headlineText="Male Gaze vs. Female Gaze Makeup – Which Style Suits You Best?"
      imagePath="MaleFemale/MaleFemaleGazeThumb.webp"
      linkUrl="/articles/male-female-gaze"
      isFlipped={true}
    />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeroSection2a
                featureText="ANIMAL PRETTY"
                headlineText="Find Your Animal Pretty 🐰"
                imagePath="AnimalPretty/animals.jpg"
                linkUrl="/quiz-2-home"
                isFlipped={false}
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