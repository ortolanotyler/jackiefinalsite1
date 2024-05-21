import React from 'react';
import styles from './MediaSplitComponent.module.css'; // Import the CSS module
import ResponsiveIframeAbout from './ResponsiveIframeAbout';

const logo = `${process.env.PUBLIC_URL}/Images/About/paramountlogo.png`;
const video = `${process.env.PUBLIC_URL}/Videos/meangirls.MOV`;

const MediaSplitComponentThree = () => {
  return (
    <div className={styles.mediaContainer}>
      {/* Video on the left */}
      <div className={styles.videoContainer}>
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right section with logo and product stacked */}
      <div className={styles.rightContainer}>
        {/* Logo */}
        <div className={styles.stackItem}>
          <img src={logo} alt="Logo" style={{ maxBlockSize: '9rem' }} />
        </div>

        {/* Product */}
        <div className={styles.stackItem}>
          <ResponsiveIframeAbout src="https://shopmy.us/collections/public/555100?noHeader=true" title="Shop My Victoria's Secret Favorites" />
        </div>
      </div>
    </div>
  );
};

export default MediaSplitComponentThree;
