import React from 'react';
import sharedStyles from './MediaSplitShared.module.css'; // Import the shared CSS module
import ResponsiveInstagramIframe from '../Components/ResponsiveInstagramIframe';
import ResponsiveIframe from '../Components/ResponsiveIframe';

const logo = `${process.env.PUBLIC_URL}/Images/About/WarnerBros.png`;

const MediaSplitWarnerBros = () => {
  return (
    <div className={sharedStyles.mediaContainer}>
      {/* Embed on the left */}
      <div className={sharedStyles.embedContainer}>
        <ResponsiveIframe src="https://shopmy.us/collections/public/555965?noHeader=true" title="Bronzing and Blushing Products" />
      </div>

      {/* Right section with logo and Instagram iframe stacked */}
      <div className={sharedStyles.rightContainer}>
        {/* Logo */}
        <div className={sharedStyles.stackItem}>
          <img src={logo} alt="Logo" style={{ maxBlockSize: '5rem' }} />
        </div>

        {/* Instagram */}
        <div className={sharedStyles.stackItem}>
          <ResponsiveInstagramIframe src="https://www.instagram.com/reel/CxOI-3ZOf5f/?utm_source=ig_embed&amp;utm_campaign=loading" title="Instagram Post" />
        </div>
      </div>
    </div>
  );
};

export default MediaSplitWarnerBros;
