import React, { useEffect, useState } from 'react';
import styles from './ResponsiveIframe.module.css';

const ResponsiveIframe = ({ src, title }) => {
  const [allowScrolling, setAllowScrolling] = useState(false);

  useEffect(() => {
    const checkResize = () => {
      const screenWidth = window.innerWidth;
      // Allow scrolling if screen width is below 1000px
      setAllowScrolling(screenWidth <= 1000);
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
        src={src}
        scrolling={allowScrolling ? 'yes' : 'no'}
        className={styles.responsiveIframe}
        style={{ height: allowScrolling ? '500px' : '100%' }}
      ></iframe>
    </div>
  );
};

export default ResponsiveIframe;
