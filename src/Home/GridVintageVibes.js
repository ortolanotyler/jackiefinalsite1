import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from './HeroSection2a'; // Importing HeroSection2a format

const VintageVibesCards = () => {
  return (
    <Box sx={{ width: '100%', padding: '30px', backgroundColor: 'white' }}>
      <Grid container spacing={2} justifyContent="center">
        {/* First Row */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="VINTAGE VIBES"
              headlineText="Mastering the Bardot Bun 🌸"
              author="10.21.2024"
              imagePath="BardotHairstyles/BardotThumbnail.jpg"
              linkUrl="/bardothairstyles"
              isFlipped={true}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="VINTAGE VIBES"
              headlineText="Jean Shrimpton 🧼 Yardley 1965"
              author="10.21.2024"
              imagePath="JeanShrimpton/JeanShrimptonThumbnail.jpg"
              linkUrl="/yardley1965"
              isFlipped={false}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="VINTAGE VIBES"
              headlineText="Timeless Grace Kelly 💄"
              author="10.21.2024"
              imagePath="GraceKelly/GraceKellyJackieWyers.jpg"
              linkUrl="/gracekelly"
              isFlipped={true}
            />
          </Box>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="VINTAGE VIBES"
              headlineText="Coquette Sharon Tate 👰🏼"
              author="10.21.2024"
              imagePath="SharonTateBridal/SHARONTATEBRIDAL.jpeg"
              linkUrl="/sharontatebridal"
              isFlipped={false}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="VINTAGE VIBES"
              headlineText="Sexy Sophia Loren 🚿"
              author="10.21.2024"
              imagePath="SophiaLoren/SophiaLorenThumbnail.jpeg"
              linkUrl="/sophialoren"
              isFlipped={true}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="VINTAGE VIBES"
              headlineText="Bohemian Sharon Tate 🌼"
              author="10.21.2024"
              imagePath="SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg"
              linkUrl="/iconicsharon"
              isFlipped={false}
            />
          </Box>
        </Grid>

        {/* Third Row */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="VINTAGE VIBES"
              headlineText="Iconic 60's Glam 🖤"
              author="10.21.2024"
              imagePath="Balke/BALKETHUMBNAIL.jpeg"
              linkUrl="/balkeblog"
              isFlipped={true}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="VINTAGE VIBES"
              headlineText="MOD Twiggy 🩵"
              author="10.21.2024"
              imagePath="Twiggy/TwiggyMODThumbnail.jpeg"
              linkUrl="/twiggy"
              isFlipped={false}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VintageVibesCards;