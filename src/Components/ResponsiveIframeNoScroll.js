import React from 'react';
import styles from './ResponsiveIframeNoScroll.module.css';

const ResponsiveIframeNoScroll = ({ src, title }) => {
  return (
    <div className={styles.responsiveIframeContainer}>
      <iframe
        title={title}
        src={src}
        scrolling="no"
        className={styles.responsiveIframe}
        style={{ height: '100%' }}
        tabIndex="-1" // Prevents focus, disabling the scroll
      ></iframe>
    </div>
  );
};

export default ResponsiveIframeNoScroll;
