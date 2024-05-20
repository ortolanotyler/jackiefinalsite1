import React, { useEffect, useRef, useState } from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';
import './AboutHero.css'; // Import the CSS file

const AboutHero = () => {
  const placeholderText = "Hello! I'm Jackie Wyers. Welcome to where beauty meets pop culture. I started my YouTube career in my teens, and growing & connecting with you has been a highlight of my life. \n As a professionally trained makeup artist with a passion for character design, I thrive on celebrating and recreating iconic looks. Life’s too short not to embrace both new trends and timeless styles, and my tutorials are here to break down how.  \n Ready to switch up your style with confidence?";
  const placeholderImage = `${process.env.PUBLIC_URL}/Images/Home/MeetJackie.png`;

  const paragraphs = placeholderText.split('\n');

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
    <Box sx={{ width: '100%', padding: '2rem 0', backgroundColor: '#FDFDFD' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box component="img" src={placeholderImage} alt="About Us" sx={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" component="h2" sx={{ textAlign: 'left', fontFamily: 'Arapey', color: 'black', marginBottom: '1rem' }}>
                MEET JACKIE
              </Typography>
              {paragraphs.slice(0, -1).map((text, index) => (
                <Typography key={index} variant="body1" sx={{ fontFamily: 'GFS Didot, serif', color: 'black', marginBottom: '1rem' }}>
                  {text}
                </Typography>
              ))}
              <Box sx={{ textAlign: 'right', mt: 2 }}>
                <Link
                  href="/about"
                  ref={linkRef}
                  className={isJiggling ? 'jiggle' : ''}
                  sx={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'GFS Didot, serif', color: 'black', textDecoration: 'none' }}
                >
                  <Typography variant="body1" sx={{ fontFamily: 'GFS Didot, serif', color: 'black' }}>
                    READ FULL BIO
                  </Typography>
                  <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>&rarr;</Box>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutHero;


