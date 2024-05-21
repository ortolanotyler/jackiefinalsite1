import React from 'react';
import MediaKitSlider from './MediaKitSlider';
import TextReveal from '../../Components/TextReveal';

const MediaKit = () => {
  const images = [
    '/Images/MediaKit/MediaKit1.png',
    '/Images/MediaKit/MediaKit2.png',
    '/Images/MediaKit/MediaKit2.png',
  ];

  return (
    <div>
      <TextReveal text= "MEDIA KIT"/>
      <MediaKitSlider images={images} />
    </div>
  );
};

export default MediaKit;
