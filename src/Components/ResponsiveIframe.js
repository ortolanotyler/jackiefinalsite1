import React, { useEffect, useState } from 'react';
import styles from './ResponsiveIframe.module.css';

const ResponsiveIframe = ({ src, title }) => {
  const [allowScrolling, setAllowScrolling] = useState(false);

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

  return (
    <div className={styles.responsiveIframeContainer} style={{ height: allowScrolling ? 'auto' : '0', paddingBottom: allowScrolling ? '0' : '56.25%' }}>
      <iframe
        title={title}
        src={src}ß
        scrolling={allowScrolling ? 'no' : 'no'}
        className={styles.responsiveIframe}
        style={{ height: allowScrolling ? '400px' : '100%' }}
        tabIndex="-1" // This allows users to scroll away if not focusing on it
      ></iframe>
    </div>
  );
};

export default ResponsiveIframe;