import React, { useState } from 'react';
import { Box, Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './NewsletterSlider.module.css'; // Ensure this file exists
import EmailSubscribe from '../Components/EmailSubscribe';
import DividerWithText from './DividerWithText';
import SmallAdSenseAd from './AdsenseSmall';

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
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1); // Different start index for the right slider
  const isMobile = useMediaQuery('(max-width:600px)'); // Detect mobile screens

  const handlePrevClick = (setIndex, currentIndex) => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = (setIndex, currentIndex) => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <React.Fragment>
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '2.5rem',
          fontWeight: '400',
          margin: '1rem auto',
          color: '#000000',
        }}
      >
        Sign up for the weekly newsletter!
      </Typography>

      <Grid container spacing={0} sx={{ maxWidth: '1200px', margin: '1rem auto' }}>
        <Grid item xs={12}>
          <EmailSubscribe />
        </Grid>

        <DividerWithText text="Weekly Newsletter" />


        <Grid item xs={12} sm={isMobile ? 12 : 6}>
          <Box
            className="sliderContainer"
            sx={{
              position: 'relative',
              width: '80%',
              
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '1rem auto',
            }}
          >
            <img
              src={images[leftIndex]}
              alt={`Slide ${leftIndex + 1}`}
              className="sliderImage"
              style={{
                width: '100%',
                borderRadius: '0px',
                objectFit: 'cover',
                margin: '0 auto',
              }}
            />

            <IconButton
              className="prevButton"
              sx={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)', color: 'black' }}
              onClick={() => handlePrevClick(setLeftIndex, leftIndex)}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              className="nextButton"
              sx={{ position: 'absolute', top: '50%', right: '15px', transform: 'translateY(-50%)', color: 'black' }}
              onClick={() => handleNextClick(setLeftIndex, leftIndex)}
            >
              <ArrowForward />
            </IconButton>
          </Box>
        </Grid>

        {!isMobile && (
          <Grid item xs={12} sm={6}>
            <Box
              className="sliderContainer"
              sx={{
                position: 'relative',
                width: '80%',
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '1rem auto',
              }}
            >
              <img
                src={images[rightIndex]}
                alt={`Slide ${rightIndex + 2}`}
                className="sliderImage"
                style={{
                  width: '100%',
                  borderRadius: '0px',
                  objectFit: 'cover',
                  margin: '0 auto',
                }}
              />

              <IconButton
                className="prevButton"
                sx={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)', color: 'black' }}
                onClick={() => handlePrevClick(setRightIndex, rightIndex)}
              >
                <ArrowBack />
              </IconButton>
              <IconButton
                className="nextButton"
                sx={{ position: 'absolute', top: '50%', right: '15px', transform: 'translateY(-50%)', color: 'black' }}
                onClick={() => handleNextClick(setRightIndex, rightIndex)}
              >
                <ArrowForward />
              </IconButton>
            </Box>
          </Grid>
        )}
      </Grid>
      <SmallAdSenseAd />


      <DividerWithText text="Weekly Newsletter" />
    </React.Fragment>
  );
};

export default NewsletterSlider;