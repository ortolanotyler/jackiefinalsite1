import React from 'react';
import styles from './ResponsiveYoutubeHome.module.css';

const ResponsiveYoutubeHome = ({ src, title }) => (
  <div className={styles.videoContainer}>
    <iframe
      src={src}
      title={title}
      className={styles.iframe}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
);

export default ResponsiveYoutubeHome;
