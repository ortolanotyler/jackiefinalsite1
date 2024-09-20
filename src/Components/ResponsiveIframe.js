import React, { useEffect, useState } from 'react';

const ResponsiveIframe = ({ src, title }) => {
  const [allowScrolling, setAllowScrolling] = useState(false);

  useEffect(() => {
    const checkResize = () => {
      const screenWidth = window.innerWidth;
      // Logic for resizing can be added if needed in future
    };

    window.addEventListener('resize', checkResize);
    checkResize(); // Initial check on mount

    return () => {
      window.removeEventListener('resize', checkResize);
    };
  }, []);

  // Inline styles for container and iframe
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '600px',
    overflow: 'hidden', // Prevent scrolling
    paddingTop: allowScrolling ? '0' : '56.25%', // Aspect ratio 16:9
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '600px',
    border: 'none', // Remove border
    overflow: 'hidden', // Ensure no scrolling
  };

  return (
    <div style={containerStyle}>
      <iframe
        title={title}
        src={src}
        scrolling="no"
        style={iframeStyle}
        tabIndex="-1" // Prevent iframe focus issues
        seamless // Allows the iframe to be more integrated visually
      ></iframe>
    </div>
  );
};

export default ResponsiveIframe;