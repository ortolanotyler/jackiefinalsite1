import React from 'react';
import sharedStyles from './MediaSplitShared.module.css'; // Import the shared CSS module
import ResponsiveIframe from '../Components/ResponsiveIframe'; // Adjust the path as needed

const logo = `${process.env.PUBLIC_URL}/Images/About/BrandSuperGoop.png`;
const video = `${process.env.PUBLIC_URL}/Videos/supergoop.MOV`; // Update this path to your .MOV file

const MediaSplitSupergoop = () => {
  return (
    <div className={sharedStyles.mediaContainer}>
      {/* Left section with logo and video */}
      <div className={sharedStyles.leftContainer}>
        <div className={sharedStyles.stackItem}>
          <img src={logo} alt="Logo" className={sharedStyles.logo} />
        </div>
        <div className={sharedStyles.embedContainer}>
          <video controls style={{ width: '100%' }}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Right section with ResponsiveIframe */}
      <div className={sharedStyles.rightContainer}>
        <ResponsiveIframe src="https://shopmy.us/collections/public/523045?noHeader=true" title="Bronzing and Blushing Products" />
      </div>
    </div>
  );
};

export default MediaSplitSupergoop;
