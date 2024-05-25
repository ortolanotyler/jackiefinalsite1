import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

import ThreeSections from '../Shop/ThreeSections';
import ShopMySlider from './ShopMySlider';
import './AboutHero.css'; // Import the CSS file for jiggle animation
import TextReveal from '../Components/TextReveal';

const ShopMyHero = () => {
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
    marginBottom: 0,
    backgroundColor: 'white',
    fontFamily: 'GFS Didot, serif',
    padding: '1rem',
    // Adjust font size for larger screens
    fontSize: '4rem', // Default for mobile and small devices
    '@media (minWidth: 768px)': {
      fontSize: '7rem', // Tablets and medium screens
    },
    '@media (minWidth: 1024px)': {
      fontSize: '9rem', // Desktops and larger screens
    },
  };

  const linkRef = useRef(null);
  const [isJiggling, setIsJiggling] = useState(false);

  useEffect(() => {
    const currentLinkRef = linkRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsJiggling(true);
          setTimeout(() => {
            setIsJiggling(false);
          }, 4000); // Stop jiggling after 4 seconds
        }
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (currentLinkRef) {
      observer.observe(currentLinkRef);
    }

    return () => {
      if (currentLinkRef) {
        observer.unobserve(currentLinkRef);
      }
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div style={sectionStyle}></div>
      <ShopMySlider />
      <ThreeSections
        section1Content={
          <div>
            <a href="https://go.shopmy.us/p-3491370" style={anchorStyle} target="">
              Top: LPA //
            </a>
            <br />
            <a href="https://go.shopmy.us/p-3491382" style={anchorStyle} target="">
              Skirt: BY.DYLN //
            </a>
            <br />
            <a href="https://go.shopmy.us/p-3491385" style={anchorStyle} target="_blank" rel="noreferrer">
              Necklace: ALEX MONROE (similar) //
            </a>
            <br />
            <a href="https://go.shopmy.us/p-3491400" style={anchorStyle} target="_blank" rel="noreferrer">
              Shoes: ALOHAS //
            </a>
          </div>
        }
        section2Content={
          <div>
          <a href="https://go.shopmy.us/p-3494143" style={anchorStyle} target="">Pants: Lovers and Friends //</a>
          <br />
          <a href="https://go.shopmy.us/p-3494171" style={anchorStyle} target="_blank" rel="noreferrer">Bodysuit: Majorelle //</a>
          <br />
          <a href="https://go.shopmy.us/p-3494173" style={anchorStyle} target="_blank" rel="noreferrer">Heels: Steve Madden //</a>
          <br />
        </div>
        }
        section3Content={
          <div>
            <a href="https://go.shopmy.us/p-3492388" style={anchorStyle} target="">
              Top: V. Chapman Studio // Majorelle (similar) //
            </a>
            <br />
            <a href="https://go.shopmy.us/p-3492414" style={anchorStyle} target="_blank" rel="noreferrer">
              Pants: FAVORITE DAUGHTER //
            </a>
            <br />
            <a href="https://go.shopmy.us/p-3492437" style={anchorStyle} target="_blank" rel="noreferrer">
              Heels: Steve Madden //
            </a>
            <br />
            <a href="https://go.shopmy.us/p-3492555" style={anchorStyle} target="_blank" rel="noreferrer">
              Purse: CHANEL //
            </a>
          </div>
        }
      />
      <Box sx={{ textAlign: 'right', mt: 2, mr: 5 }}>
        <a
          href="/mystyle"
          ref={linkRef}
          className={isJiggling ? 'jiggle' : ''}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontFamily: 'GFS Didot, serif',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <Typography variant="body1" sx={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', color: 'black', marginTop: '2.5rem', marginBottom: '4rem' }}>
            SHOP MY STYLE
          </Typography>
          <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>&rarr;</Box>
        </a>
      </Box>
    </div>
  );
};

export default ShopMyHero;
