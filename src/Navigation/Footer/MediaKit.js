import React from 'react';
import MediaKitSlider from './MediaKitSlider';
import TextReveal from '../../Components/TextReveal';
import FeaturedImages from './FeaturedImages';
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel';

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
      <TextReveal text= "FEATURED IN"/>
        <FeaturedImages />
        <BrandCarousel />
    </div>
  );
};

export default MediaKit;
