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
    justifyContent: 'flex-start',
    minHeight: '500px',
    maxHeight: '650px',
   maxWidth: '100%',
    color: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: '0px',
    overflow: 'hidden',
    border: 'none',
    boxSizing: 'border-box',
  };

  const imageContainerStyle = {
    width: 'auto',
    height: '100%',
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '50vh',
    
    objectFit: 'cover',
  };

  const contentStyle = {
    minHeight: '150px',

  
    paddingTop: '1rem',
    padding: '1rem 2rem',

    textAlign: 'center',
    fontFamily: 'Playfair Display, serif',
  };

  const featureStyle = {
    fontSize: '0.75rem',
    fontWeight: '100',
    letterSpacing: '1px',
    textAlign: 'center',

    color: '#000000',
    fontFamily: 'Playfair Display, serif',
    fontWeight: '400',
    textDecoration: 'none',
    margin: '0 auto',
  };

  const headlineStyle = {
    fontSize: '1.25rem',
    textAlign: 'center',
    margin: '0 auto',

    lineHeight: 1.25,
    fontFamily: 'Playfair Display, serif',
    fontWeight: '400',

  };



  return (
    <Grid item xs={12} style={{ height: '100%' }}> {/* Grid item with full height */}
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