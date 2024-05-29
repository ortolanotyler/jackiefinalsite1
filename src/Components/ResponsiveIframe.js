import React, { useEffect, useState } from 'react';

const ResponsiveIframe = ({ src, title }) => {
  const [allowScrolling, setAllowScrolling] = useState(false);
  const [iframeInteraction, setIframeInteraction] = useState(false);

  useEffect(() => {
    const checkResize = () => {
      const screenWidth = window.innerWidth;
      // Allow scrolling if screen width is below 900px
      setAllowScrolling(screenWidth <= 900);
    };

    window.addEventListener('resize', checkResize);
    checkResize(); // Initial check on mount

    return () => {
      window.removeEventListener('resize', checkResize);
    };
  }, []);

  const handleIframePointerEnter = () => {
    setIframeInteraction(true);
  };

  const handleIframePointerLeave = () => {
    setIframeInteraction(false);
  };

  return (
    <iframe
      width="100%"
      height="400px"
      title={title}
      src={src}
      scrolling={allowScrolling ? 'yes' : 'no'}
      style={{
        border: 'none',
        pointerEvents: iframeInteraction ? 'auto' : 'none',
        overflow: allowScrolling ? 'auto' : 'hidden', // Ensure overflow is managed correctly
      }}
      onPointerEnter={handleIframePointerEnter}
      onPointerLeave={handleIframePointerLeave}
    ></iframe>
  );
};

export default ResponsiveIframe;
