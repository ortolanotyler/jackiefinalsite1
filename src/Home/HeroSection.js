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
    aspectRatio: '4/3', // Maintain aspect ratio to prevent layout shifts
  };

  return (
    <a href="/fairytalewedding" style={heroLinkStyle}>
      <div style={heroSectionStyle}>
        <div style={textContentStyle}>
          <h2 style={{ ...textContentStyle, fontWeight: 'bold' }}>FEATURE</h2>
          <h1 style={{ ...textContentStyle, fontSize: '32px' }}>Our Fairytale Wedding Overlooking Sorrento, Italy</h1>
          <p style={{ ...textContentStyle, fontSize: '16px', color: '#333' }}>
            Step into the magic of our fairytale wedding in Sorrento, Italy. Discover the iconic pop culture brides who inspired my bridal look, and get an inside look at the intimate ceremony that brought our love story—from middle school sweethearts to lifelong partners—to life.
          </p>
          <p style={{ ...textContentStyle, fontSize: '14px', fontStyle: 'italic', color: '#555' }}>BY JACKIE WYERS</p>
        </div>
        <div style={imageContentStyle}>
          <img
            src={image1}
            alt="Fairytale Wedding"
            style={imageStyle}
            loading="lazy"
            width="1200"  // Set explicit width and height to reserve space
            height="900"
          />
        </div>
      </div>
    </a>
  );
};

export default HeroSection;
