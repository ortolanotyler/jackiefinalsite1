import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styles from './About.module.css';

const AboutImage = `${process.env.PUBLIC_URL}/Images/About/AboutJackie.jpg`;

const AboutSection1 = () => {
  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(to bottom, #fde7e7, #fff)',
        padding: { xs: '2rem 1rem', md: '4rem 2rem' },
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          alignItems: 'center',
          justifyContent: 'center', // Center the content
          textAlign: { xs: 'center', md: 'left' }, // Adjust alignment for mobile and desktop
          flexDirection: { xs: 'column', md: 'row' },
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: { xs: '1rem', md: '2rem' },
              maxWidth: '600px', // Limit text width for better centering
              margin: '0 auto', // Center the box horizontally
            }}
          >
            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Playfair Display, serif',
                color: '#745B4F',
                fontSize: { xs: '2rem', md: '2.5rem' },
                marginBottom: '1.5rem',
              }}
            >
              Hello! I'm Jackie Wyers.
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '1.25rem',
                color: '#745B4F',
                lineHeight: '1.8',
                marginBottom: '1rem',
              }}
            >
              Welcome to where beauty meets pop culture. I started my YouTube career in my teens, and connecting with you through beauty has been a highlight of my life thus far. Whether you’re looking for timeless styles or trendy transformations, I’m here to guide you on how to{' '}
              <strong>switch up your style with confidence</strong>.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '1.25rem',
                color: '#745B4F',
                lineHeight: '1.8',
                marginBottom: '1rem',
              }}
            >
              Inspired by iconic characters, bold makeup trends, and the ever-changing eras of Taylor Swift, my tutorials celebrate individuality and help you embrace beauty techniques that are practical yet expressive.
            </Typography>

            {/* Social Icons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: '1rem',
                marginTop: '2rem',
              }}
            >
              <a
                href="https://youtube.com/@JackieWyers?si=sklULUqnNkzkmiaY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon sx={{ color: '#745B4F', fontSize: 40 }} />
              </a>
              <a
                href="https://www.instagram.com/jackiewyers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon sx={{ color: '#745B4F', fontSize: 40 }} />
              </a>
              <a
                href="https://pin.it/27OmCVDye"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PinterestIcon sx={{ color: '#745B4F', fontSize: 40 }} />
              </a>
              <a href="mailto:jackietwyers@gmail.com">
                <MailOutlineIcon sx={{ color: '#745B4F', fontSize: 40 }} />
              </a>
            </Box>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={AboutImage}
            alt="Jackie Wyers"
            sx={{
              width: '100%',
              height: 'auto',
              maxWidth: '500px', // Set a max width for better centering
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              margin: '0 auto', // Center the image
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection1;