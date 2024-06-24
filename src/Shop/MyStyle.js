import React from 'react';
import { Helmet } from 'react-helmet';
import ItemSlider from './Slider';
import AprilStyleSlider from './AprilStyleSlider';
import FallWinterSlider from './FallWinterSlider';
import PhotoShootSlider from './PhotoShootSlider';
import TextReveal from '../Components/TextReveal';

const MyStyle = () => {
  // Base style for anchor tags
  const anchorStyle = {
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'GFS Didot, serif',
    fontSize: '1.25rem', // Default for mobile and small devices
  };

  // Responsive base style for sections
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
   
    backgroundColor: 'white',
    fontFamily: 'GFS Didot, serif',
    padding: '2rem',
    // Adjust font size for larger screens
    fontSize: '4rem', // Default for mobile and small devices
    '@media (min-width: 768px)': {
      fontSize: '7rem', // Tablets and medium screens
    },
    '@media (min-width: 1024px)': {
      fontSize: '9rem', // Desktops and larger screens
    },
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Helmet>
        <title>Shop My Style - Jackie Wyers</title>
        <meta name="description" content="Explore the style and fashion choices of Jackie Wyers. Find inspiration and shop the looks." />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
      </Helmet>
      <TextReveal text="SHOP MY STYLE" style={{ backgroundColor: 'white', color: '#745B4F', fontFamily: 'Arapey' }} />
      <div style={sectionStyle}></div>
      <ItemSlider />
      <PhotoShootSlider />
      <AprilStyleSlider />
      <FallWinterSlider />
    </div>
  );
};

export default MyStyle;
