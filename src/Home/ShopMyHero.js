import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ThreeSections from '../Shop/ThreeSections';
import ShopMySlider from './ShopMySlider';
import styles from './ShopMyHero.module.css'; // Updated to use the CSS module
import TextReveal from '../Components/TextReveal';

const ShopMyHero = () => {
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
      <div className={styles.sectionStyle}></div>
      <ShopMySlider />
      <div className={styles.container}>
        <ThreeSections
          section1Content={<></>}
          section2Content={<></>}
          section3Content={<></>}
        />
      </div>
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
