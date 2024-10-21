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
    height: '100%',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '90%',
    margin: '0 auto',
    color: '#000000',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  };

  const imageContainerStyle = {
    width: '100%',
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
    padding: '10px',
    textAlign: 'left',
    fontFamily: 'GFS Didot, serif',
  };

  const featureStyle = {
    fontSize: '12px',
    fontWeight: 'normal',
    letterSpacing: '1px',
    color: '#000000',
    fontFamily: 'Arapey, sans-serif',
    textDecoration: 'underline',
    marginBottom: '5px',
  };

  const headlineStyle = {
    fontSize: '18px',
    lineHeight: 1.2,
    margin: '10px 0',
    fontFamily: 'Playfair Display, sans-serif',
  };

  const subtextStyle = {
    fontSize: '12px',
    lineHeight: 1.4,
    margin: '5px 0',
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
            <h1 style={headlineStyle}>{headlineText}</h1>
            <p style={subtextStyle}>{subtext}</p>
            <p style={authorStyle}>{author}</p>
          </div>
        </div>
      </a>
      <HorizontalLine />
    </Grid>
  );
};

export default HeroSection2a;