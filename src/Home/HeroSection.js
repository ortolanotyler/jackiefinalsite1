import React, { useState, useEffect } from 'react';

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
    color: 'inherit',
  };

  const heroSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    margin: '0 auto',
   
    flexDirection: isSmallScreen ? 'column' : isFlipped ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
  };

  const textContentStyle = {
    flex: 1,
    paddingRight: isSmallScreen ? '0' : isFlipped ? '0' : '40px',
    paddingLeft: isFlipped && !isSmallScreen ? '40px' : '0',
    maxWidth: '500px',
    textAlign: 'center',
    fontFamily: 'GFS Didot, serif',
  };

  const featureStyle = {
    fontSize: '18px',
    fontWeight: '100',
    letterSpacing: '1px',
    marginBottom: '1rem',
    fontFamily: 'GFS Didot, serif',
    
  };

  const headlineStyle = {
    fontSize: '32px',
    lineHeight: 1,
    marginBottom: '20px',
    fontFamily: 'GFS Didot, serif',
    minHeight: '10px',
  };

  const subtextStyle = {
    fontSize: '16px',
    lineHeight: 1.5,
    marginBottom: '20px',
    fontFamily: 'GFS Didot, serif',
    color: '#000000',
    minHeight: '10vh',
  };

  const authorStyle = {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#000000',
    fontFamily: 'GFS Didot, serif',
    minHeight: '20px',
  };

  const imageContentStyle = {
    flex: 1,
    textAlign: isSmallScreen ? 'center' : isFlipped ? 'left' : 'right',
    maxWidth: '400px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    display: 'block',
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
        <div style={imageContentStyle}>
          <img src={`${process.env.PUBLIC_URL}/Images/Articles/${imagePath}`} alt={headlineText} style={imageStyle} loading="lazy" />
        </div>
      </div>
    </a>
  );
};

export default HeroSection;