import React, { useEffect, useRef, useState } from 'react';
import TextReveal from '../../Components/TextReveal';
import { Link, Typography, Box } from '@mui/material';
import styles from './AboutHero.module.css'; // Importing the CSS module

const PinkLeather = () => {
  const iframeRef = useRef(null);
  const linkRef = useRef(null);
  const [isJiggling, setIsJiggling] = useState(false);

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
        threshold: 0.1,
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
    <div>
      <TextReveal text="BABY PINK" />
      <Box sx={{ textAlign: 'right', mt: 5, mr: 20 }}>
        <Link
          href="/mystyle"
          ref={linkRef}
          className={isJiggling ? styles.jiggle : ''}
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
          title="Baby Pink"
          src="https://shopmy.us/collections/public/379992?noHeader=true"
          className={styles.parisPrincessIframe}
          ref={iframeRef}
        ></iframe>
      </div>
    </div>
  );
};

export default PinkLeather;
