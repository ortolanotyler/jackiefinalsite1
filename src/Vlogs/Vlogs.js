import React from 'react';
import VlogVideo from './VideoComponent1';
import './vlogs.css'; // Assuming you are using a CSS file to style components
import TextReveal from '../Components/TextReveal';

const Vlogs = () => {
  return (
    <div className="vlog-container">
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
