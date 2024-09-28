import React, { useState, useEffect } from 'react';
import VerticalLine from './VerticalLine'; // Import your VerticalLine component

const HeroSection = ({ featureText, headlineText, subtext, author, imagePath, linkUrl, isFlipped }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Styles
  const heroLinkStyle = {
    textDecoration: 'none',
    color: '#000000',
  };

  const heroSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '1000px',
    color: '#000000',
    flexDirection: isSmallScreen ? 'column' : isFlipped ? 'row-reverse' : 'row',
  };

  const textContentStyle = {
    flex: 1,
    padding: isSmallScreen ? '0' : isFlipped ? '0 0 0 20px' : '0 20px 0 0',
    maxWidth: '100%',
    margin: '0 10px',
    textAlign: 'left',
    fontFamily: 'GFS Didot, serif',
  };

  const featureStyle = {
    fontSize: '12px',
    fontWeight: 'normal',
    letterSpacing: '1px',
    color: '#000000',
    margin: '5px',
    fontFamily: 'Lora, serif',
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
    fontFamily: 'Lora, serif',
  };

  const imageContentStyle = {
    flex: 1,
    textAlign: isSmallScreen ? 'center' : isFlipped ? 'left' : 'right',
    maxWidth: '500px',
    position: 'relative',
  };

  // Define explicit width and height based on the aspect ratio to reduce layout shift
  const imageStyle = {
  
    borderRadius: '0px',
    display: 'block',
    objectFit: 'cover',
    aspectRatio: '5 / 3', // Adjust aspect ratio as needed
  };


  // Set the explicit width and height of the image to reduce LCP and layout shift
  const imageWidth = 500; // Define an explicit width
  const imageHeight = 500; // Define an explicit height based on your aspect ratio

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
            width={imageWidth} // Explicit width to reserve space
            height={imageHeight} // Explicit height to reserve space
            loading="eager" // Load images eagerly to reduce LCP impact
            decoding="async" // Decodes images asynchronously for better performance
          />
        </div>
      </div>
    </a>
  );
};

export default HeroSection;