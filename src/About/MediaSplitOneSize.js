import React from 'react';
import sharedStyles from './MediaSplitShared.module.css'; // Import the shared CSS module
import ResponsiveIframe from '../Components/ResponsiveIframe'; // Adjust the path as needed

const logo = `${process.env.PUBLIC_URL}/Images/About/onesize.png`;
const video = `${process.env.PUBLIC_URL}/Videos/onesize.MOV`; // Update this path to your .MOV file

const MediaSplitOneSize = () => {
  return (
    <div className={sharedStyles.mediaContainer}>
      {/* Video on the left */}
      <div className={sharedStyles.embedContainer}>
        <video controls style={{ width: '100%' }}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <ResponsiveIframe src="https://shopmy.us/collections/public/556006?noHeader=true" title="Bronzing and Blushing Products" />
      </div>

      {/* Right section with logo */}
      <div className={sharedStyles.rightContainer}>
        {/* Logo */}
        <div className={sharedStyles.stackItem}>
          <img src={logo} alt="Logo" style={{ maxBlockSize: '5rem' }} />
        </div>
      </div>
    </div>
  );
};

export default MediaSplitOneSize;
