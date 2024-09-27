import React from 'react';
import { Helmet } from 'react-helmet';
import VlogVideo from './VideoComponent1';
import './vlogs.css'; // Assuming you are using a CSS file to style components
import TextReveal from '../Components/TextReveal';

const Vlogs = () => {
  return (
    <div className="vlog-container">
     <Helmet>
        <title>The Vlog - Jackie Wyers</title>
        <meta name="description" content="Explore the latest vlogs by Jackie Wyers. Find inspiration, tips, and behind-the-scenes content." />
        <meta name="keywords" content="Jackie Wyers, vlogs, travel vlogs, beauty vlogs, lifestyle vlogs, behind-the-scenes" />
        <meta property="og:title" content="The Vlog - Jackie Wyers" />
        <meta property="og:description" content="Explore the latest vlogs by Jackie Wyers. Find inspiration, tips, and behind-the-scenes content." />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Vlogs/og-image.jpg`} />
        <meta property="og:url" content="https://jackiewyers.beauty/vlogs" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Vlog - Jackie Wyers" />
        <meta name="twitter:description" content="Explore the latest vlogs by Jackie Wyers. Find inspiration, tips, and behind-the-scenes content." />
        <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Vlogs/twitter-image.jpg`} />
      
      </Helmet>
      <div><TextReveal text="THE VLOG" /></div>
      <div className="video-overlay-container">
        <a href="https://www.youtube.com/channel/UCF8jAZoTZBReXwoj8vu9HWA" target="_blank" rel="noreferrer">
          <VlogVideo />
        </a>
      </div>
    </div>
  );
};

export default Vlogs;
