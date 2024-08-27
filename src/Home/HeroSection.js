import React, { useState, useEffect } from 'react';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/fairytalethumbnail.webp`;

const HeroSection = () => {
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
    padding: '1rem 2rem',
    minHeight: '80vh',
    flexDirection: isSmallScreen ? 'column' : 'row',
    flexWrap: 'wrap',
  };
  
  const textContentStyle = {
    flex: 1,
    maxWidth: '500px',

    paddingRight: isSmallScreen ? '0' : '40px',
    maxWidth: isSmallScreen ? '100%' : '600px', // Adjusted max-width to ensure proper centering
    margin: '0 auto',  // Ensures content is centered
    textAlign: 'center',  // Center text on all screens
    fontFamily: 'GFS Didot, serif',
  };
  
  const featureStyle = {
    fontSize: '14px',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginBottom: '10px',
    fontFamily: 'GFS Didot, serif',
  };
  
  const headlineStyle = {
    fontSize: '32px',
    lineHeight: 1.2,
    marginBottom: '20px',
    fontFamily: 'GFS Didot, serif',
    textAlign: 'center',  // Ensures headline is centered
  };
  
  const subtextStyle = {
    fontSize: '16px',
    lineHeight: 1.5,
    marginBottom: '20px',
    fontFamily: 'GFS Didot, serif',
    color: '#333',
    textAlign: 'center',  // Ensures subtext is centered
  };
  
  const authorStyle = {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#555',
    fontFamily: 'GFS Didot, serif',
    textAlign: 'center',  // Ensures author is centered
  };
  
  const imageContentStyle = {
    flex: 1,
    textAlign: isSmallScreen ? 'center' : 'right',
    maxWidth: '500px',
  };
  
  const imageStyle = {
    margin: '0 auto',
    width: '100%',  // Ensures the image takes up the proper space
    height: 'auto',
    borderRadius: '5px',
    display: 'block',
  };
  

  return (
    <a href="/fairytalewedding" style={heroLinkStyle}>
      <div style={heroSectionStyle}>
        <div style={textContentStyle}>
          <h2 style={featureStyle}>FEATURE</h2>
          <h1 style={headlineStyle}>
            Our Fairytale Wedding Overlooking Sorrento, Italy
          </h1>
          <p style={subtextStyle}>
            Step into the magic of our fairytale wedding in Sorrento, Italy. Discover the iconic pop culture brides who inspired my bridal look, and get an inside look at the intimate ceremony that brought our love story—from middle school sweethearts to lifelong partners—to life.
          </p>
          <p style={authorStyle}>BY JACKIE WYERS</p>
        </div>
        <div style={imageContentStyle}>
          <img src={image1} alt="Fairytale Wedding" style={imageStyle} loading="lazy" />
        </div>
      </div>
    </a>
  );
};

export default HeroSection;
