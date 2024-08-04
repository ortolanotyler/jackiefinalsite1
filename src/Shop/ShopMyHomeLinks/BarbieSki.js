import React, { useEffect, useRef } from 'react';
import TextReveal from '../../Components/TextReveal';
import { Link, Typography, Box } from '@mui/material';
import styles from './AboutHero.module.css'; // Importing the CSS module
import AdSenseAd from '../../Advertising/Ads';

const BarbieSki = () => {
  const iframeRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        iframeRef.current.style.overflow = 'auto';
        iframeRef.current.scrolling = 'yes';
      } else {
        iframeRef.current.style.overflow = 'hidden';
        iframeRef.current.scrolling = 'no';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <TextReveal text="BARBIE GOES SKIING" />
      <Box sx={{ textAlign: 'right', mt: 5, mr: 20 }}>
        <Link
          href="/mystyle"
          ref={linkRef}
          sx={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'GFS Didot, serif', color: 'black', textDecoration: 'none' }}
        >
          <Typography variant="body1" sx={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', color: 'black' }}>
            SHOP ALL
          </Typography>
          <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>&rarr;</Box>
        </Link>
      </Box>
      <div className={styles.iframeContainer}>
        <iframe
          title="Barbie Goes Skiing"
          src="https://shopmy.us/collections/public/468491?noHeader=true"
          className={styles.parisPrincessIframe}
          scrolling="no"
          ref={iframeRef}
        ></iframe>
      </div>
      <div className={styles.adContainer}>
        <AdSenseAd />
      </div>
    </div>
  );
};

export default BarbieSki;
