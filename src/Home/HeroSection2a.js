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
    maxHeight: '500px',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex',
    height: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    color: '#000000',
    backgroundColor: '#fdedef',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '2.5px solid #fdedef',
    boxSizing: 'border-box',
  };

  const imageContainerStyle = {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const contentStyle = {
    height: '19vh',
    padding: '1rem',
    textAlign: 'left',
    fontFamily: 'GFS Didot, sans-serif',
  };

  const featureStyle = {
    fontSize: '14px',
    fontWeight: '100',
    letterSpacing: '1px',
    color: '#000000',
    fontFamily: 'Arapey, sans-serif',
    textDecoration: 'none',
    marginBottom: '1rem',
  };

  const headlineStyle = {
    fontSize: '21px',
    lineHeight: 1.2,
    margin: '10px auto',
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
    fontStyle: 'italic',
    color: '#000000',
    fontFamily: 'Arapey, sans-serif',
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
            <p style={subtextStyle}>{subtext}</p>
            <p style={authorStyle}>{author}</p>
       

          </div>
        </div>
      </a>
    </Grid>
  );
};

export default HeroSection2a;