import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './NewsletterSlider.module.css'; // Ensure this file exists
import EmailSubscribe from './EmailSubscribe';

const images = [
  `${process.env.PUBLIC_URL}/Images/1.png`,
  `${process.env.PUBLIC_URL}/Images/2.png`,
  `${process.env.PUBLIC_URL}/Images/3.png`,
  `${process.env.PUBLIC_URL}/Images/4.png`,
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
          
     
          fontFamily: 'GFS Didot, serif', 
          color: '#000000', 
        }}
      >
        Sign up for the weekly newsletter!
      </Typography>

      <EmailSubscribe />
     

      <Box 
        className="sliderContainer" 
        sx={{ 
          position: 'relative', 
        
          width: '100%', 
          maxWidth: '800px', 
          maxHeight: '100%', 
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
            maxWidth: '650px',
            height: 'auto',
            borderRadius: '0px',
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
 
 
    </React.Fragment>
  );
};

export default NewsletterSlider;