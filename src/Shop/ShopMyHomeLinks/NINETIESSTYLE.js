import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import TextReveal from '../../Components/TextReveal';
import { Link, Typography, Box } from '@mui/material';
import styles from './AboutHero.module.css'; // Importing the CSS module

const NinetiesStyle = () => {
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
      <Helmet>
        <title>90's Vibes | Jackie Wyers</title>
        <meta name="description" content="Explore the best of 90's fashion with Jackie Wyers. Shop all the iconic styles and trends from the decade." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RT6GR7JXYG');
          `}
        </script>
      </Helmet>
      <TextReveal text="90's VIBES" />
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
          title="Nineties Style"
          src="https://shopmy.us/collections/public/379874?noHeader=true"
          className={styles.parisPrincessIframe}
          ref={iframeRef}
          scrolling="no"
        ></iframe>
      </div>
    
    </div>
  );
};

export default NinetiesStyle;
