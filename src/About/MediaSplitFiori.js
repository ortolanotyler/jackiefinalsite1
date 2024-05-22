import React from 'react';
import sharedStyles from './MediaSplitShared.module.css'; // Import the shared CSS module
import ResponsiveInstagramIframe from '../Components/ResponsiveInstagramIframe';
import ResponsiveIframe from '../Components/ResponsiveIframe';

const logo = `${process.env.PUBLIC_URL}/Images/About/fioriaboutlogo.jpg`;

const MediaSplitFiori = () => {
  return (
    <div className={sharedStyles.mediaContainer}>
      {/* ShopMy embed on the left */}
      <div className={sharedStyles.embedContainer}>
        <ResponsiveIframe src="https://shopmy.us/collections/public/557649?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      </div>

      {/* Right section with logo and Instagram iframe stacked */}
      <div className={sharedStyles.rightContainer}>
        {/* Logo */}
        <div className={sharedStyles.stackItem}>
          <img src={logo} alt="Logo" style={{ maxBlockSize: '5rem' }} />
        </div>

        {/* Instagram */}
        <div className={sharedStyles.stackItem}>
          <ResponsiveInstagramIframe src="https://www.instagram.com/reel/C30e_YAuMnL/?utm_source=ig_embed&amp;utm_campaign=loading" title="Instagram Post" />
        </div>
      </div>
    </div>
  );
};

export default MediaSplitFiori;
