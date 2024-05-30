import React, { useEffect, useState } from 'react';
import styles from './ResponsiveIframe.module.css';

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

  useEffect(() => {
    console.log('ResponsiveIframe rendered with src:', src);
  }, [src]);

  return (
    <div className={styles.responsiveIframeContainer}>
      <iframe
        title={title}
        src={src}
        scrolling={allowScrolling ? 'yes' : 'no'}
        className={styles.responsiveIframe}
        style={{
          pointerEvents: iframeInteraction ? 'auto' : 'none',
          overflow: allowScrolling ? 'auto' : 'hidden',
        }}
        onPointerEnter={handleIframePointerEnter}
        onPointerLeave={handleIframePointerLeave}
      ></iframe>
    </div>
  );
};

export default ResponsiveIframe;
