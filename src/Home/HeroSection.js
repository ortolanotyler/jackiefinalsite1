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
    margin: '1rem auto',
    maxWidth: '1000px',
    color: '#000000',
    flexDirection: isSmallScreen ? 'column' : isFlipped ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
  };

  const textContentStyle = {
    flex: 1,
    paddingRight: isSmallScreen ? '0' : isFlipped ? '0' : '40px',
    paddingLeft: isFlipped && !isSmallScreen ? '40px' : '0',
    maxWidth: '100%',
    margin: '1rem 2rem',
    textAlign: 'left',
    fontFamily: 'GFS Didot, serif',
  };

  const featureStyle = {
    fontSize: '1rem',
    fontWeight: '100',
    letterSpacing: '0.05rem',
    color: '#000000',
    margin: '1rem 0',
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
    fontStyle: 'italic',
    fontFamily: 'Playfair Display, serif',
    color: '#000000',
  };

  const authorStyle = {
    textAlign: 'right',
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
    height: 'auto',
    borderRadius: '0px',
    display: 'block',
  };

  const dividerStyle = {
    width: '1px',
    backgroundColor: '#2b2d2b',
    height: '50%',
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
        {!isSmallScreen && <div style={dividerStyle}></div>} {/* Divider line */}
        <div style={imageContentStyle}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Articles/${imagePath}`}
            alt={headlineText}
            style={imageStyle}
            loading="lazy"
          />
        </div>
      </div>
    </a>
  );
};

export default HeroSection;