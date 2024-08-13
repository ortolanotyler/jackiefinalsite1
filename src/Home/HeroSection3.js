import React, { useState, useEffect } from 'react';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/emilyinparis.jpg`;

const HeroSection3 = () => {
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
    padding: '30px 30px',
    minHeight: '80vh',
    flexDirection: isSmallScreen ? 'column' : 'row',
    flexWrap: 'wrap',
  };

  const textContentStyle = {
    flex: 1,
    paddingRight: isSmallScreen ? '0' : '40px',
    maxWidth: '500px',
    textAlign: 'center',  // Center text on all screens
    fontFamily: 'GFS Didot, serif',
  };

  const featureStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginBottom: '10px',
    fontFamily: 'GFS Didot, serif',
    minHeight: '20px',
  };

  const headlineStyle = {
    fontSize: '32px',
    lineHeight: 1.2,
    marginBottom: '20px',
    fontFamily: 'GFS Didot, serif',
    minHeight: '50px',
  };

  const subtextStyle = {
    fontSize: '16px',
    lineHeight: 1.5,
    marginBottom: '20px',
    fontFamily: 'GFS Didot, serif',
    color: '#333',
    minHeight: '70px',
  };

  const authorStyle = {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#555',
    fontFamily: 'GFS Didot, serif',
    minHeight: '20px',
  };

  const imageContentStyle = {
    flex: 1,
    textAlign: isSmallScreen ? 'center' : 'right',
    maxWidth: '600px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    display: 'block',
  };

  return (
    <a href="/emily-in-paris" style={heroLinkStyle}>
      <div style={heroSectionStyle}>
        <div style={textContentStyle}>
          <h2 style={featureStyle}>POP CULTURE</h2>
          <h1 style={headlineStyle}>
          Emily in Paris Style Evolution: Iconic Outfits, Makeup, and Hair
                    </h1>
          <p style={subtextStyle}>
          Season four of Emily in Paris has finally arrived, and I couldn’t be more thrilled.
          Emily Cooper's colourful and bold outfit choices, paired with her upbeat and optimistic personality, create a character & show worth binging on Netflix.          </p>
          <p style={authorStyle}>BY JACKIE WYERS</p>
        </div>
        <div style={imageContentStyle}>
          <img src={image1} alt="Fairytale Wedding" style={imageStyle} loading="lazy" />
        </div>
      </div>
    </a>
  );
};

export default HeroSection3;
