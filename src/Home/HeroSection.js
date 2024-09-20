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
    color: '#000000',
  };

  const heroSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 1.5rem',
    color: '#000000',

    flexDirection: isSmallScreen ? 'column' : isFlipped ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
  };

  const textContentStyle = {
    flex: 1,
    paddingRight: isSmallScreen ? '0' : isFlipped ? '0' : '40px',
    paddingLeft: isFlipped && !isSmallScreen ? '40px' : '0',
    maxWidth: '50%',
    margin: '1rem',

    textAlign: 'center',
    fontFamily: 'GFS Didot, serif',
  };

  const featureStyle = {
    fontSize: '1rem',
    fontWeight: '100',
    letterSpacing: '0.05rem',
   color: '#000000',
    margin: '1rem auto',
    fontFamily: 'Playfair Display, serif',
    textDecoration: 'underline',
  };

  const headlineStyle = {
    fontSize: '32px',
    lineHeight: 1,
    margin: '1rem auto',

    fontFamily: 'Playfair Display, serif',
  };

  const subtextStyle = {
    fontSize: '16px',
    lineHeight: 1.5,
    margin: '1rem auto',

    fontFamily: 'Playfair Display, serif',
    color: '#000000',
   
  };

  const authorStyle = {
    fontSize: '.75rem',
    fontStyle: 'italic',
    color: '#000000',
    fontFamily: 'Playfair Display, serif',
  
  };

  const imageContentStyle = {
    flex: 1,
    textAlign: isSmallScreen ? 'center' : isFlipped ? 'left' : 'right',
    maxWidth: '500px',
  };

  const imageStyle = {
    width: '100%',
    padding: '1rem 2rem',
    margin: '1rem 0',
    height: 'auto',
    borderRadius: '0px',
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