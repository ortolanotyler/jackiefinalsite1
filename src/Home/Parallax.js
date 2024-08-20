import React, { useState, useEffect } from 'react';

const ParallaxSection = ({ image, children, showOnMobile = true }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${image})`,
    minHeight: '300px',
    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: isMobile && !showOnMobile ? 'none' : 'flex', // Hide section if not to be shown on mobile
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={parallaxStyle}>
      {children}
    </div>
  );
};

export default ParallaxSection;
