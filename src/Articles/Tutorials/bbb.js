import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from '../../Home/HeroSection2a';

const Slider1 = () => {
  const cardsData = [
    {
      link: "/bridalmakeup",
      image: "BridalMakeup/BridalTrialMakeupThumb.jpg",
      alt: "Warm and cozy latte-inspired fall makeup look",
      title: "Bridal Trial Makeup 💄",
    },
    {
      link: "/animalpretty",
      image: "AnimalPretty/animals.jpg",
      alt: "Find Your Animal Pretty 🐰",
      title: "Find Your Animal Pretty 🐰",
    },
    {
      link: "/patmcgrath",
      image: "PatMcGrath/JackieWyersPatMcGrath.jpeg",
      alt: "Pat McGrath",
      title: "Pat McGrath's Porcelain Doll 🪆",
    },
    {
      link: "/latteMakeup",
      image: "LatteMakeup/LatteThumbnail.jpg",
      alt: "Warm and cozy latte-inspired fall makeup look",
      title: "Viral Latte Makeup ☕️",
    },
    {
      link: "/sugarplumfairy",
      image: "SugarPlumFairy/SUGARPLUMTHUMBNAIL.jpeg",
      alt: "Sugar Plum Fairy makeup trend report",
      title: "Sugar Plum Fairy Glam 🧚",
    },
    {
      link: "/2016Makeup",
      image: "2016/2016MakeupThumbnail.jpg",
      alt: "Victoria's Secret fashion show 2014 vibes",
      title: "Nostalgic 2016 Makeup 🖤",
    },
  ];

  return (
    <Box sx={{ width: '100%', padding: '1rem', backgroundColor: 'white', margin: '0 auto' }}>
      <Grid container spacing={2} justifyContent="center">
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
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
                featureText="TRENDING"
                headlineText={card.title}
                imagePath={card.image}
                linkUrl={card.link}
                isFlipped={index % 2 === 0}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Slider1;