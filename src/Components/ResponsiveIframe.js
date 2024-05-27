import React, { useEffect, useState } from 'react';

const ResponsiveIframe = ({ src, title }) => {
  const [allowScrolling, setAllowScrolling] = useState(false);
  const [iframeInteraction, setIframeInteraction] = useState(false);

  useEffect(() => {
    const checkResize = () => {
      const matched = window.matchMedia("(max-width: 1200px)").matches;
      setAllowScrolling(matched);
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
      height='400px'
      title={title}
      src={src}
      className="embed-container"
      scrolling={allowScrolling ? 'yes' : 'no'}
      style={{
        border: 'none',
        pointerEvents: iframeInteraction ? 'auto' : 'none',
      }}
      onPointerEnter={handleIframePointerEnter}
      onPointerLeave={handleIframePointerLeave}
    ></iframe>
  );
};

export default ResponsiveIframe;
