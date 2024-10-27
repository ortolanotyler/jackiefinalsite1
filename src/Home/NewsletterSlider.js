import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './NewsletterSlider.module.css'; // Ensure this file exists
import HorizontalLine from '../Components/HorizontalLine';
import EmailSubscribe from '../Components/EmailSubscribe';

// Array of images, properly formatted for Cloudinary URLs with f_auto
const images = [
  'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1730043768/Screenshot_2024-10-27_at_11.41.44_AM_ccjxjz.png',
  'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1730043772/Screenshot_2024-10-27_at_11.41.55_AM_jh2pbw.png',
  'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1730043774/Screenshot_2024-10-27_at_11.42.09_AM_kfrvei.png',
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
      {/* Typography below the slider */}
      <Typography 
        variant="h2" 
        align="center" 
        sx={{ 
          fontFamily: 'Playfair Display, sans-serif', 
          margin: '0 auto',
          padding: '20px',
          maxWidth: '90%',
          color: '#000000', 
        }}
      >
        Sign up for the weekly newsletter!
      </Typography>


      <HorizontalLine />

      <Box 
        className="sliderContainer" 
        sx={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '500px', 
          height: 'auto', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          margin: '1rem auto', // Centering the Box within its container
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="sliderImage"
          style={{
            width: '100%',
            maxWidth: '550px',
            height: 'auto',
            borderRadius: '5px',
            objectFit: 'cover',
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

      <HorizontalLine />
      <EmailSubscribe />

    </React.Fragment>
  );
};

export default NewsletterSlider;