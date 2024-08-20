import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './NewsletterSlider.module.css'; // Ensure this file exists

const images = [
  `${process.env.PUBLIC_URL}/Images/Home/1.png`,
  `${process.env.PUBLIC_URL}/Images/Home/2.png`,
  `${process.env.PUBLIC_URL}/Images/Home/3.png`,
  `${process.env.PUBLIC_URL}/Images/Home/4.png`,

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
    <Box 
      className="sliderContainer" 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '370px', 
        maxHeight: '600px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: '0 auto', // Centering the Box within its container
      }}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="sliderImage"
        style={{
          width: '100%',
          maxWidth: '500px',
          maxHeight: '560px',
          height: 'auto',
          borderRadius: '5px',
          objectFit: 'cover',
        }}
      />

      <IconButton
        className="prevButton"
        sx={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: 'black',  }}
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
  );
};

export default NewsletterSlider;
