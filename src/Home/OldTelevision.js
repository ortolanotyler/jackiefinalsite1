import React from 'react';
import styles from './OldTelevision.module.css'; // Import CSS Module

const OldTelevision = ({ videoId }) => {
  return (
    <div className={styles.tvContainer}>
      <div className={styles.tvFrame}>
        <iframe
          className={styles.tvScreen}
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Old TV YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};

export default OldTelevision;