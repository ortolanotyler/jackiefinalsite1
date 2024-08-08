import React from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';
import './AboutHero.css'; // Import the CSS file

const AboutHero = () => {
  const placeholderText = "Hello! I'm Jackie Wyers. Welcome to where beauty meets pop culture. I started my YouTube career in my teens, and growing & connecting with you has been a highlight of my life. \n As a professionally trained makeup artist with a passion for character design, I thrive on celebrating and recreating iconic looks. Life’s too short not to embrace both new trends and timeless styles, and my tutorials are here to break down how.  \n Ready to switch up your style with confidence?";
  const placeholderImage = `${process.env.PUBLIC_URL}/Images/Home/MeetJackie.webp`;

  const paragraphs = placeholderText.split('\n');

  return (
    <Box sx={{ width: '100%', padding: { xs: '1rem', sm: '2rem 0' }, backgroundColor: '#FDFDFD' }}>
      {/* Preload the key image for better performance */}
      <link rel="preload" href={placeholderImage} as="image" />

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box
                component="img"
                src={placeholderImage}
                srcset={`${process.env.PUBLIC_URL}/Images/Home/MeetJackie.webp 400w, 
                         ${process.env.PUBLIC_URL}/Images/Home/MeetJackie.webp 800w, 
                         ${placeholderImage} 1200w`}
                sizes="(max-width: 600px) 400px, (max-width: 960px) 800px, 1200px"
                alt="About Us"
                sx={{
                  width: '100%',
                  height: 'auto', // Maintain aspect ratio
                  borderRadius: '8px',
                  aspectRatio: '4/3', // Defines a ratio for the image to prevent layout shift
                }}
                loading="lazy" // Lazy loading for performance
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  textAlign: { xs: 'center', sm: 'left' },
                  fontFamily: 'Arapey',
                  color: 'black',
                  marginBottom: '1rem',
                }}
              >
                MEET JACKIE
              </Typography>
              {paragraphs.slice(0, -1).map((text, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    fontFamily: 'GFS Didot, serif',
                    color: 'black',
                    marginBottom: '1rem',
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  {text}
                </Typography>
              ))}
              <Box sx={{ textAlign: { xs: 'center', sm: 'right' }, mt: 2 }}>
                <Link
                  href="/about"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontFamily: 'GFS Didot, serif',
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'GFS Didot, serif',
                      color: 'black',
                    }}
                  >
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
