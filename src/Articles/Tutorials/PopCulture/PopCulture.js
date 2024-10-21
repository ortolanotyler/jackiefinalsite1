import React from 'react';
import { Grid, Box } from '@mui/material';
import TextReveal from '../../../Components/TextReveal';
import HeroSection2a from '../../../Home/HeroSection2a';

const image6 = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/VSThumbnail.jpeg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const image9 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/MARGOTBARBIETHUMBNAIL.png`;
const nomakeup = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/nomakeupspringthumbnail.jpeg`;
const summerinspo = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/mermaidthumbnail.jpg`;
const perioddrama = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/ArticleThumb.jpg`;
const emily = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/emilyinparis.jpg`;
const fran = `${process.env.PUBLIC_URL}/Images/Articles/Francesca/FrancescaThumb.jpg`;

const cardsData = [
  {
    link: "/emily-in-paris",
    image: emily,
    alt: "Emily In Paris Style Evolution",
    title: "Emily in Paris Style Evolution : Iconic Outfits, Makeup, and Hair",
  },
  {
    link: "/perioddrama",
    image: perioddrama,
    alt: "Summer Beauty",
    title: "No-Makeup Period Dramas and Wearable Historical Hairstyles",
  },
  {
    link: "/SummerInspo",
    image: summerinspo,
    alt: "Summer Inspo",
    title: "Summer Inspiration 🧜",
  },
  {
    link: "/nomakeupspring",
    image: nomakeup,
    alt: "Warm and cozy latte-inspired fall makeup look",
    title: "Spring Makeup Inspiration 🎬",
  },
  {
    link: "/francesca-bridgerton",
    image: fran,
    alt: "Francesca Bridgerton Recreation by Jackie Wyers",
    title: "Francesca Bridgerton Makeup, Hair, and Dress",
  },
  {
    link: "/margotbarbie",
    image: image9,
    alt: "Margot Robbie Barbie Movie",
    title: "Barbie Makeup Transformation 👱🏼‍♀️",
  },
  {
    link: "/lanablog",
    image: image7,
    alt: "Lana",
    title: "SKIMS X Lana Makeup 🎀",
  },
  {
    link: "/victoriasecret",
    image: image6,
    alt: "Victoria's Secret",
    title: "VS Bombshell Look 🛍️",
  },
];

const PopCulture = () => {
  return (
    <Box sx={{ width: '100%', padding: '10px', backgroundColor: 'white' }}>
      <div style={{ paddingTop: '50px' }}>
        <TextReveal text='POP CULTURE OBSESSED' />
      </div>
      
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
                featureText="POP CULTURE"
                headlineText={card.title}
                subtext={card.alt} // You can adjust the text displayed here
                author="BY JACKIE WYERS"
                imagePath={card.image.replace(`${process.env.PUBLIC_URL}/Images/Articles/`, "")} // Adjust image path for HeroSection2a
                linkUrl={card.link}
                isFlipped={index % 2 === 0} // Flip layout for alternate cards
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopCulture;