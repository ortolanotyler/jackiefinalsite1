import React, { useEffect, useRef, useState } from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';

const BeyondBeautyHero = () => {
  const placeholderText = "While makeup, hair, and style remain my core passions, 'Beyond Beauty' is where I dive into travel, offering hotel reviews, crafting detailed itineraries, and sharing my experiences.\n\nThis section also serves as a glimpse into my mind, featuring diary-style posts that reflect my innermost thoughts. From love stories and personal milestones to life lessons, I hope we can get to know each other better, one post at a time.";
  const placeholderImage = `${process.env.PUBLIC_URL}/Images/Home/beyondbeauty.png`;

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
    <Box sx={{ width: '100%', padding: { xs: '1rem', sm: '2rem 0' }, backgroundColor: '#FDFDFD' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" component="h2" sx={{ textAlign: { xs: 'center', sm: 'left' }, fontFamily: 'Arapey', color: 'black', marginBottom: '1rem' }}>
                BEYOND BEAUTY
              </Typography>
              {paragraphs.map((text, index) => (
                <Typography key={index} variant="body1" sx={{ fontFamily: 'GFS Didot, serif', color: 'black', marginBottom: '1rem', textAlign: { xs: 'center', sm: 'left' } }}>
                  {text}
                </Typography>
              ))}
             
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box component="img" src={placeholderImage} alt="Beyond Beauty" sx={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BeyondBeautyHero;
