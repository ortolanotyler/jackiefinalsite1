import React from 'react';
import sharedStyles from './MediaSplitShared.module.css'; // Import the shared CSS module
import ResponsiveIframeAbout from './ResponsiveIframeAbout';

const logo = `${process.env.PUBLIC_URL}/Images/About/fioriaboutlogo.jpg`;
const video = `${process.env.PUBLIC_URL}/Videos/bridal.MOV`;

const MediaSplitComponent = () => {
  return (
    <div className={sharedStyles.mediaContainer}>
      {/* Video on the left */}
      <div className={sharedStyles.videoContainer}>
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right section with logo and product stacked */}
      <div className={sharedStyles.rightContainer}>
        {/* Logo */}
        <div className={sharedStyles.stackItem}>
          <img src={logo} alt="Logo" style={{ maxBlockSize: '5rem' }} />
        </div>

        {/* Product */}
        <div className={sharedStyles.stackItem}>
          <ResponsiveIframeAbout src="https://shopmy.us/collections/public/524998?noHeader=true" title="Shop My Victoria's Secret Favorites" />
        </div>
      </div>
    </div>
  );
};

export default MediaSplitComponent;
