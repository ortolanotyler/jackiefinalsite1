import React from 'react';
import sharedStyles from './MediaSplitShared2.module.css'; // Import the new shared CSS module
import ResponsiveIframe from '../Components/ResponsiveIframe'; // Adjust the path as needed

const logo = `${process.env.PUBLIC_URL}/Images/About/paramountlogo.png`;
const video = `${process.env.PUBLIC_URL}/Videos/meangirls.MOV`; // Update this path to your .MOV file

const MediaSplitOneSize = () => {
  return (
    <div className={sharedStyles.mediaContainer}>
      {/* Left section with ResponsiveIframe */}
      <div className={sharedStyles.leftContainer}>
        <ResponsiveIframe src="https://shopmy.us/collections/public/556006?noHeader=true" title="Bronzing and Blushing Products" />
      </div>

      {/* Right section with logo and video */}
      <div className={sharedStyles.rightContainer}>
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
    </div>
  );
};

export default MediaSplitOneSize;
