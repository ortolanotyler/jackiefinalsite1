import React, { useState, useEffect } from 'react';
import VerticalLine from './VerticalLine'; // Import your VerticalLine component
import HorizontalLine from '../Components/HorizontalLine';

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
    margin: '0 auto',
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
    margin: '1.25rem',
    padding: '0px',
    textAlign: 'left',
    fontFamily: 'GFS Didot, serif',
  };

  const featureStyle = {
    fontSize: '12px',
    fontWeight: 'normal',
    letterSpacing: '1px',
    color: '#000000',
    margin: '5px',
    fontFamily: 'Arapey, serif',
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
    fontSize: '.88rem',

    fontStyle: 'italic',
    color: '#000000',
    fontFamily: '"Arapey", serif',
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


  // Set the explicit width and height of the image to reduce LCP
  const imageWidth = 500; // Example width
  const imageHeight = 500; // Example height (adjust based on the actual aspect ratio of your images)

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
          />
        </div>
      </div>
      <HorizontalLine/>

    </a>
  );
};

export default HeroSection;