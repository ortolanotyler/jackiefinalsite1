import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import HorizontalLine from '../Components/HorizontalLine';

const HeroSection2a = ({ featureText, headlineText, subtext, author, imagePath, linkUrl }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroLinkStyle = {
    textDecoration: 'none',
    color: '#000000',
    width: '100%',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex',
    height: '100%',
    maxWidth: 'auto',
    color: '#000000',
    backgroundColor: '#fdedef',
    border: '0px solid #fdedef',

    borderRadius: '10px',
    overflow: 'hidden',
    border: '2.5px solid #fdedef',
    boxSizing: 'border-box',
  };

  const imageContainerStyle = {
    width: '100%',
    height: 'auto',
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '500px',
    
    objectFit: 'cover',
  };

  const contentStyle = {
    height: '150px',
    padding: '0px',
    textAlign: 'center',
    fontFamily: 'GFS Didot, sans-serif',
  };

  const featureStyle = {
    fontSize: '16px',
    fontWeight: '100',
    letterSpacing: '1px',
    textAlign: 'center',

    color: '#000000',
    fontFamily: 'Arapey, sans-serif',
    textDecoration: 'none',
    margin: '1rem auto',
  };

  const headlineStyle = {
    fontSize: '20px',
    textAlign: 'center',

    lineHeight: 1.5,
    padding: '10px auto',
    fontFamily: 'Playfair Display, sans-serif',
  };

  const subtextStyle = {
    fontSize: '12px',
    lineHeight: 1.25,
    margin: '10px auto',
    fontStyle: 'italic',
    fontFamily: 'Playfair Display, sans-serif',
    color: '#3a3a3a',
  };

  const authorStyle = {
    textAlign: 'right',
    fontSize: '.88rem',
    margin: '10px auto',
    fontStyle: 'italic',
    color: '#000000',
    fontFamily: 'Arapey, sans-serif',
  };

  return (
    <Grid item xs={12} style={{ height: '90%' }}> {/* Grid item with full height */}
      <a href={linkUrl} style={heroLinkStyle}>
        <div style={cardStyle}>
          {/* Image Section */}
          <div style={imageContainerStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/Images/Articles/${imagePath}`}
              alt={headlineText}
              style={imageStyle}
            />
          </div>

          {/* Text Content */}
          <div style={contentStyle}>
            
            <h2 style={featureStyle}>{featureText}</h2>
            <HorizontalLine />

            <h1 style={headlineStyle}>{headlineText}</h1>
       

          </div>
        </div>
      </a>
    </Grid>
  );
};

export default HeroSection2a;