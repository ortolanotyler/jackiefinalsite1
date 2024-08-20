import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import styles from './NewsletterSlider.module.css'; // Import the CSS module

const images = [
  `${process.env.PUBLIC_URL}/Images/Home/1.png`,
  `${process.env.PUBLIC_URL}/Images/Home/2.png`,
  `${process.env.PUBLIC_URL}/Images/Home/3.png`,
  `${process.env.PUBLIC_URL}/Images/Home/4.png`,
];

const NewsletterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 2 : (prevIndex - 2 + images.length) % images.length));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
  };

  return (
    <Box 
      className={styles.sliderContainer} 
    >
      <Box
        className={styles.sliderImages}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.sliderImage}
        />
        <img
          src={images[(currentIndex + 1) % images.length]}
          alt={`Slide ${currentIndex + 2}`}
          className={styles.sliderImage}
        />
      </Box>

      <IconButton
        className={styles.prevButton}
        onClick={handlePrevClick}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        className={styles.nextButton}
        onClick={handleNextClick}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default NewsletterSlider;
