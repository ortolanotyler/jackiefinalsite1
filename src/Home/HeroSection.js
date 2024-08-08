import React from 'react';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/fairytalethumbnail.webp`;

const HeroSection = () => {
  const heroLinkStyle = {
    textDecoration: 'none',  // Remove underline from link
    color: 'inherit',  // Ensure text color stays consistent
  };

  const heroSectionStyle = {
    display: 'flex',
    justifyContent: 'center',  // Centers content horizontally
    alignItems: 'center',  // Centers content vertically
    padding: '60px 20px',  // Adds padding to create more space around the content
    minHeight: '80vh',  // Ensures the section takes up at least 80% of the viewport height
    flexWrap: 'wrap',  // Allow wrapping for better responsiveness
  };

  const textContentStyle = {
    flex: 1,
    paddingRight: '40px',
    maxWidth: '600px',  // Limits the width of the text content
    textAlign: 'center',
    fontFamily: 'GFS Didot, serif',  // Use GFS Didot font
  };

  const featureStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginBottom: '10px',
    fontFamily: 'GFS Didot, serif',  // Ensure consistency
  };

  const headlineStyle = {
    fontSize: '32px',
    lineHeight: 1.2,
    marginBottom: '20px',
    fontFamily: 'GFS Didot, serif',  // Ensure consistency
  };

  const subtextStyle = {
    fontSize: '16px',
    lineHeight: 1.5,
    marginBottom: '20px',
    fontFamily: 'GFS Didot, serif',  // Ensure consistency
    color: '#333',  // Simplified color for faster rendering
  };

  const authorStyle = {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#555',
    fontFamily: 'GFS Didot, serif',  // Ensure consistency
  };

  const imageContentStyle = {
    flex: 1,
    textAlign: 'right',
    maxWidth: '600px',  // Limits the width of the image content
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    display: 'block',  // Prevents image from being inline and causing layout shifts
  };

  const heroSectionSmallScreenStyle = {
    flexDirection: 'column',  // Stack the image and text vertically
  };

  const textContentSmallScreenStyle = {
    paddingRight: '0',  // Remove right padding
    paddingTop: '20px',  // Add some space between image and text
    textAlign: 'center',  // Center the text
  };

  const imageContentSmallScreenStyle = {
    textAlign: 'center',  // Center the image
    maxWidth: '100%',  // Allow image to take full width
  };

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <a href="/fairytalewedding" style={heroLinkStyle}>
      <div style={isSmallScreen ? { ...heroSectionStyle, ...heroSectionSmallScreenStyle } : heroSectionStyle}>
        <div style={isSmallScreen ? { ...textContentStyle, ...textContentSmallScreenStyle } : textContentStyle}>
          <h2 style={featureStyle}>FEATURE</h2>
          <h1 style={headlineStyle}>
            Our Fairytale Wedding Overlooking Sorrento, Italy
          </h1>
          <p style={subtextStyle}>
            Step into the magic of our fairytale wedding in Sorrento, Italy. Discover the iconic pop culture brides who inspired my bridal look, and get an inside look at the intimate ceremony that brought our love story—from middle school sweethearts to lifelong partners—to life.
          </p>
          <p style={authorStyle}>BY JACKIE WYERS</p>
        </div>
        <div style={isSmallScreen ? { ...imageContentStyle, ...imageContentSmallScreenStyle } : imageContentStyle}>
          <img src={image1} alt="Fairytale Wedding" style={imageStyle} loading="lazy" />
        </div>
      </div>
    </a>
  );
};

export default HeroSection;



