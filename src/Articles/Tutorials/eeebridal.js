import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from '../../Home/HeroSection2a';

const fairytale = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/fairytalethumbnail.jpg`;
const sharontatebridal = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEBRIDAL.jpeg`;
const bridesmaids = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/BridesmaidBoxThumb!.jpg`;
const bridalmakeup = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/BridalTrialMakeupThumb.jpg`;
const guide = `${process.env.PUBLIC_URL}/guide.png`;
const diymamma = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/mammamiathumb.png`;

const cardsData = [
  {
    link: "/diy-flowers",
    image: diymamma,
    alt: "Mamma Mia Inspired DIY Bridal Flower Pins 🕊",
    title: "Mamma Mia Inspired DIY Bridal Flower Pins 🕊",
  },
  {
    link: "/weddingdressguide",
    image: guide,
    alt: "The Ultimate 2025 Wedding Dress Guide",
    title: "The Ultimate 2025 Wedding Dress Guide 👗",
  },
  {
    link: "/fairytalewedding",
    image: fairytale,
    alt: "FairyTale Wedding",
    title: "Our Fairytale Wedding Overlooking Sorrento, Italy 🍋",
  },
  {
    link: "/bridesmaidboxes",
    image: bridesmaids,
    alt: "Sharon Tate Bridal",
    title: "Whimsical DIY Bridesmaid Proposal Boxes 👰🏻‍♀️",
  },
  {
    link: "/bridalmakeup",
    image: bridalmakeup,
    alt: "Sharon Tate Bridal",
    title: "Bridal Makeup Trial: What I Loved and What I'll Change! ♥️",
  },
  {
    link: "/sharontatebridal",
    image: sharontatebridal,
    alt: "Sharon Tate Bridal",
    title: "Sharon Tate’s Coquette 1960’s Bridal Makeup 🌼",
  },
];

const Eeebridal = () => {
  return (
    <Box sx={{ width: '100%', padding: '10px', backgroundColor: 'white' }}>
      <Grid container spacing={2} justifyContent="center">
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeroSection2a
                featureText="BRIDAL"
                headlineText={card.title}
                subtext={card.alt} // You can adjust the subtext if needed
                author="BY JACKIE WYERS"
                imagePath={card.image.replace(`${process.env.PUBLIC_URL}/Images/Articles/`, "")} // Adjust the image path for HeroSection2a
                linkUrl={card.link}
                isFlipped={index % 2 === 0} // Flip layout for alternating cards
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Eeebridal;