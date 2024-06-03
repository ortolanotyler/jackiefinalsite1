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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
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
