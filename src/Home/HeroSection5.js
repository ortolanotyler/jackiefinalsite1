import React, { useState, useEffect } from 'react';


const image1 = `${process.env.PUBLIC_URL}/Images/Articles/Francesca/1.jpg`;

const HeroSection5 = () => {
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
    padding: '1.25rem 30px',
    minHeight: '20vh',
    flexDirection: isSmallScreen ? 'column' : 'row',
    flexWrap: 'wrap',
  };

  const textContentStyle = {
    flex: 1,
    paddingRight: isSmallScreen ? '0' : '40px',
    maxWidth: '450px',
    textAlign: 'left',  // Center text on all screens
    fontFamily: 'GFS-Didot, serif',
  };

  const featureStyle = {
    fontSize: '14px',
    fontWeight: 'normal',
    letterSpacing: '1px',
    marginBottom: '1rem',
    fontFamily: 'GFS Didot, serif',
    minHeight: '20px',
  };

  const headlineStyle = {
    fontSize: '28px',
    textAlign: 'center',  // Center text on all screens

    lineHeight: 1,
    marginBottom: '1rem',
    fontFamily: 'GFS Didot, serif',
    minHeight: '50px',
  };

  const subtextStyle = {
    fontSize: '14px',
    lineHeight: '1.25rem',
    marginBottom: '20px',
    fontFamily: 'GFS Didot, serif',
    color: '#000000',
    minHeight: '1rem',
  };

  const authorStyle = {
    fontSize: '14px',
    fontStyle: 'underline',
    color: '#000000',
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
    <a href="/francesca-bridgerton" style={heroLinkStyle}>
      <div style={heroSectionStyle}>
        <div style={textContentStyle}>
          <h2 style={featureStyle}>POP CULTURE</h2>
          <h1 style={headlineStyle}>
          Francesca Bridgerton Makeup, Hair, and Dress
                    </h1>
          <p style={subtextStyle}>
          From bold blush to a signature half-up half-down style similar to princess Belle, I’m breaking down all the steps. Plus, I’ll be sharing some of my favorite products at the moment and what is really used on set, as seen on @faithmakeupartist Instagram, showcasing behind the scenes!          
          
                </p>
          <p style={authorStyle}>Jackie Wyers</p>
        </div>
        <div style={imageContentStyle}>
          <img src={image1} alt="Francesca From Bridgerton" style={imageStyle} loading="lazy" />
        </div>
      </div>
    </a>
  );
};

export default HeroSection5;
