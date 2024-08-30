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
    padding: '1rem 1rem',
    minHeight: '80vh',
    flexDirection: isSmallScreen ? 'column-reverse' : 'row', // Change to column-reverse for small screens
    flexWrap: 'wrap',
  };

  const textContentStyle = {
    flex: 1,
    paddingLeft: isSmallScreen ? '0' : '40px', // Add padding on the left for larger screens
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
    textAlign: isSmallScreen ? 'center' : 'left', // Center the image on mobile, align left on larger screens
    maxWidth: '500px',
  };

  const imageStyle = {
    width: '100%',
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
