import React, { useState } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './NewsletterSlider.module.css'; // Ensure this file exists
import EmailSubscribe from '../Components/EmailSubscribe';
import DividerWithText from './DividerWithText';

const images = [
  `${process.env.PUBLIC_URL}/Images/Newsletter23A.webp`,
  `${process.env.PUBLIC_URL}/Images/Newsletter23B.webp`,
  `${process.env.PUBLIC_URL}/Images/Newsletter21A.webp`,
  `${process.env.PUBLIC_URL}/Images/Newsletter21B.webp`,
  `${process.env.PUBLIC_URL}/Images/Newsletter21C.webp`,
  `${process.env.PUBLIC_URL}/Images/Newsletter20A.png`,
  `${process.env.PUBLIC_URL}/Images/Newsletter20B.png`,
  `${process.env.PUBLIC_URL}/Images/Newsletter20C.png`,
  `${process.env.PUBLIC_URL}/Images/Newsletter20D.png`,
  `${process.env.PUBLIC_URL}/Images/Newsletter17A.png`,
  `${process.env.PUBLIC_URL}/Images/Newsletter17B.png`,
  `${process.env.PUBLIC_URL}/Images/Newsletter17C.png`,
  `${process.env.PUBLIC_URL}/Images/Newsletter17D.png`,
  `${process.env.PUBLIC_URL}/Images/1.png`,
  `${process.env.PUBLIC_URL}/Images/2.png`,
  `${process.env.PUBLIC_URL}/Images/3.png`,
  `${process.env.PUBLIC_URL}/Images/4.png`,
  `${process.env.PUBLIC_URL}/Images/5.png`,
  `${process.env.PUBLIC_URL}/Images/6.png`,
  `${process.env.PUBLIC_URL}/Images/7.png`,
  `${process.env.PUBLIC_URL}/Images/8.png`,
  `${process.env.PUBLIC_URL}/Images/9.png`,
];

const NewsletterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <React.Fragment>
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '22px',
          fontWeight: '400', 
          margin: '1rem auto',
          color: '#fdedef',
        }}
      >
        Sign up for the weekly newsletter!
      </Typography>

      <Grid container spacing={1} sx={{  maxWidth: '1400px' }}>
      <Grid item xs={12} sm={6}>
          <EmailSubscribe />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            className="sliderContainer"
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '300px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '1rem auto',
            }}
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="sliderImage"
              style={{
                width: '100%',
                borderRadius: '10px',
                objectFit: 'cover',
                margin: '1rem auto',

              }}
            />

            <IconButton
              className="prevButton"
              sx={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: 'black' }}
              onClick={handlePrevClick}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              className="nextButton"
              sx={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', color: 'black' }}
              onClick={handleNextClick}
            >
              <ArrowForward />
            </IconButton>
          </Box>
        </Grid>

     
      </Grid>

      <DividerWithText text="Weekly Newsletter" />
    </React.Fragment>
  );
};

export default NewsletterSlider;