import React, { useEffect, useRef } from 'react';
import TextReveal from '../../Components/TextReveal';
import { Link, Typography, Box } from '@mui/material';
import styles from './AboutHero.module.css'; // Importing the CSS module

const BlackAndLeather = () => {
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
      <TextReveal text="BLACK AND LEATHER" />
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
      <div style={{ width: '100%', minHeight: '1200px', marginBottom: '2rem' }}>
        <iframe
          title="BLACK AND LEATHER"
          src="https://shopmy.us/collections/public/468485?noHeader=true"
          className={styles.parisPrincessIframe}
          ref={iframeRef}
          scrolling="no"
        ></iframe>
      </div>
   
    </div>
  );
};

export default BlackAndLeather;
