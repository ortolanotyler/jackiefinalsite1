import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/fairytalethumbnail.webp`;

const HeroSection = () => {
  const heroLinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  const heroSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 20px',
    minHeight: '80vh',
    flexDirection: 'row',
    flexWrap: 'wrap',
  };

  const textContentStyle = {
    flex: 1,
    paddingRight: '40px',
    maxWidth: '600px',
    textAlign: 'center',
    fontFamily: 'GFS Didot, serif',
  };

  const imageContentStyle = {
    flex: 1,
    textAlign: 'right',
    maxWidth: '600px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    display: 'block',
    aspectRatio: '4/3',
  };

  const heroSectionSmallScreenStyle = {
    flexDirection: 'column', // Stack text and image vertically on small screens
  };

  const textContentSmallScreenStyle = {
    paddingRight: '0', // Remove right padding on small screens
    paddingBottom: '20px', // Add some space between the text and image
    textAlign: 'center', // Center the text
  };

  const imageContentSmallScreenStyle = {
    textAlign: 'center', // Center the image on small screens
  };

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <a href="/fairytalewedding" style={heroLinkStyle}>
      <div style={isSmallScreen ? { ...heroSectionStyle, ...heroSectionSmallScreenStyle } : heroSectionStyle}>
        <div style={isSmallScreen ? { ...textContentStyle, ...textContentSmallScreenStyle } : textContentStyle}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>FEATURE</h2>
          <h1 style={{ fontSize: '32px', lineHeight: 1.2, marginBottom: '20px' }}>Our Fairytale Wedding Overlooking Sorrento, Italy</h1>
          <p style={{ fontSize: '16px', lineHeight: 1.5, marginBottom: '20px', color: '#333' }}>
            Step into the magic of our fairytale wedding in Sorrento, Italy. Discover the iconic pop culture brides who inspired my bridal look, and get an inside look at the intimate ceremony that brought our love story—from middle school sweethearts to lifelong partners—to life.
          </p>
          <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#555' }}>BY JACKIE WYERS</p>
        </div>
        <div style={isSmallScreen ? { ...imageContentStyle, ...imageContentSmallScreenStyle } : imageContentStyle}>
          <img
            src={image1}
            alt="Fairytale Wedding"
            style={imageStyle}
            loading="lazy"
            width="1200" // Set explicit width and height to reserve space
            height="900"
          />
        </div>
      </div>
    </a>
  );
};

export default HeroSection;
