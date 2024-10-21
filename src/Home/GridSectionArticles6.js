import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from './HeroSection2a';

const SixGridComponent = () => {
  return (
    <Box sx={{ width: '100%', padding: '50px', backgroundColor: 'white' }}>
      <Grid container spacing={1} justifyContent="center">
        {/* Row 1 */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="FEATURED"
              headlineText="Our Fairytale Wedding Overlooking Sorrento, Italy"
              subtext="All the enchanting details, prep & planning"
              author="July 11, 2024"
              imagePath="FairytaleWedding/fairytalethumbnail.webp"
              linkUrl="/fairytalewedding"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="TRAVEL"
              headlineText="Best of Brussels: Top Things to See, Eat, and Experience + Train To Paris!"
              subtext="Belgian Chocolate, Waffles, and A Walk Down Memory Lane"
              author="September 20"
              imagePath="Homepage/paristhumbnail-1.webp"
              linkUrl="/paris-brussels-travel-guide"
              isFlipped={false}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="HOW-TO : IPHONE"
              headlineText="A Guide to Scroll-Stopping iPhone Photos"
              subtext="Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks."
              author="August 30"
              imagePath="Homepage/coverphoot.webp"
              linkUrl="/camera-settings"
              isFlipped={true}
            />
          </Box>
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="TRAVEL"
              headlineText="The Best Souvenirs to Bring Home from Sorrento"
              subtext="Leather, Music Boxes, Flats, Oh Me! Discover the top Sorrento souvenirs with Jackie Wyers."
              author="August 30"
              imagePath="Homepage/SorrentoThumbnail.webp"
              linkUrl="/sorrento"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="TRAVEL"
              headlineText="Our Three Day Romantic Getaway in Rome, Italy"
              subtext="From early morning strolls to late-night gelato runs, we made the most of every moment in this enchanting city."
              author="BY JACKIE WYERS"
              imagePath="Homepage/47.webp"
              linkUrl="/rome"
              isFlipped={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection2a
              featureText="NEW ZEALAND"
              headlineText="New Zealand | Auckland Vlog and Experience"
              subtext="Explore Jackie Wyers' travel journey in Auckland, New Zealand. From visiting Waiheke Island and the Auckland Zoo to trying local cafes."
              author="BY JACKIE WYERS"
              imagePath="Homepage/NZThumbnail.webp"
              linkUrl="/newzealand"
              isFlipped={true}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SixGridComponent;