import React from 'react';
import sharedStyles from './MediaSplitShared.module.css'; // Import the shared CSS module
import ResponsiveIframeAbout from './ResponsiveIframeAbout';

const logo = `${process.env.PUBLIC_URL}/Images/About/BrandSuperGoop.png`;
const video = `${process.env.PUBLIC_URL}/Videos/supergoop.MOV`;

const MediaSplitComponentTwo = () => {
  return (
    <div className={sharedStyles.mediaContainer}>
      {/* Left section with logo and product stacked */}
      <div className={sharedStyles.leftContainer}>
        {/* Logo */}
        <div className={sharedStyles.stackItem}>
          <img src={logo} alt="Logo" style={{ maxBlockSize: '10rem' }} />
        </div>

        {/* Product iframe */}
        <div className={sharedStyles.stackItem}>
          <ResponsiveIframeAbout src="https://shopmy.us/collections/public/523045?noHeader=true" title="Shop My Victoria's Secret Favorites" />
        </div>
      </div>

      {/* Video on the right */}
      <div className={sharedStyles.videoContainer}>
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MediaSplitComponentTwo;
