import React, { useState, useEffect } from 'react';
import VerticalLine from './VerticalLine'; // Import your VerticalLine component

const HeroSection = ({ featureText, headlineText, subtext, author, imagePath, linkUrl, isFlipped }) => {
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
  };

  const heroSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px auto',
    maxWidth: '1000px',
    color: '#000000',
    flexDirection: isSmallScreen ? 'column' : isFlipped ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
  };

  const textContentStyle = {
    flex: 1,
    paddingRight: isSmallScreen ? '0' : isFlipped ? '0' : '20px',
    paddingLeft: isFlipped && !isSmallScreen ? '20px' : '0',
    maxWidth: '100%',
    margin: '1rem auto',
    textAlign: 'left',
    fontFamily: 'GFS Didot, sans-serif',
  };

  const featureStyle = {
    fontSize: '12px',
    fontWeight: 'normal',
    letterSpacing: '1px',
    color: '#000000',
    margin: '5px',
    fontFamily: 'Lora, sans-serif',
    textDecoration: 'underline',
  };

  const headlineStyle = {
    fontSize: '34px',
    lineHeight: 1,
    margin: '1rem auto',
    fontFamily: 'Playfair Display, serif',
  };

  const subtextStyle = {
    fontSize: '14px',
    lineHeight: 1.5,
    margin: '10px auto',
    fontStyle: 'italic',
    fontFamily: 'Playfair Display, serif',
    color: '#3a3a3a',
  };

  const authorStyle = {
    textAlign: 'right',
    fontSize: '.75rem',
    fontStyle: 'italic',
    color: '#000000',
    fontFamily: 'Lora, sans-serif',
  };

  const imageContentStyle = {
    flex: 1,
    textAlign: isSmallScreen ? 'center' : isFlipped ? 'left' : 'right',
    maxWidth: '500px',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '0px',
    display: 'block',
    objectFit: 'cover', // Ensures images cover their container without distorting
  };

  const dividerStyle = {
    width: '1px',
    backgroundColor: '#2b2d2b',
    height: '100%',
    margin: isSmallScreen ? '20px 0' : '0 20px',
    alignSelf: 'center',
  };

  return (
    <a href={linkUrl} style={heroLinkStyle}>
      <div style={heroSectionStyle}>
        <div style={textContentStyle}>
          <h2 style={featureStyle}>{featureText}</h2>
          <h1 style={headlineStyle}>{headlineText}</h1>
          <p style={subtextStyle}>{subtext}</p>
          <p style={authorStyle}>{author}</p>
        </div>
        {!isSmallScreen && <VerticalLine />} {/* Using the VerticalLine component */}
        <div style={imageContentStyle}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Articles/${imagePath}`}
            alt={headlineText}
            style={imageStyle}
            width="500" // Explicit width to reserve space
            height="auto" // Explicit height to reserve space, adjust based on aspect ratio
            loading={isFlipped ? 'lazy' : 'eager'} // Use eager loading for first images to prevent CLS
          />
        </div>
      </div>
    </a>
  );
};

export default HeroSection;