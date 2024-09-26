import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import FanArt from './FanArtGallery';
import styles from './About.module.css';
import TextReveal from '../Components/TextReveal';
import QuoteBanner from './QuoteBanner2';
import ContactForm from './ContactForm';
import BrandCarousel from '../Components/BrandCarousel/BrandCarousel';
import { Grid, Paper, Box } from '@mui/material';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const AboutEmily = `${process.env.PUBLIC_URL}/Images/About/JackieAboutMe1.JPG`;
const leftImage = `${process.env.PUBLIC_URL}/Images/About/AboutJackie.jpg`;

const About = () => {
  return (
    <Grid container spacing={0} className={styles['about-container']}>
      <Helmet>
        <title>About Jackie Wyers | Beauty and Pop Culture</title>
        <meta name="description" content="Get to know Jackie Wyers, a professionally trained makeup artist with a passion for beauty and pop culture. Discover her journey, inspirations, and collaborations." />
        <meta name="keywords" content="Jackie Wyers, makeup artist, beauty, pop culture, tutorials, collaborations, fan art, contact" />
        <meta property="og:title" content="About Jackie Wyers | Beauty and Pop Culture" />
        <meta property="og:description" content="Get to know Jackie Wyers, a professionally trained makeup artist with a passion for beauty and pop culture. Discover her journey, inspirations, and collaborations." />
        <meta property="og:image" content={AboutEmily} />
        <meta property="og:url" content="https://jackiewyers.beauty/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Jackie Wyers | Beauty and Pop Culture" />
        <meta name="twitter:description" content="Get to know Jackie Wyers, a professionally trained makeup artist with a passion for beauty and pop culture. Discover her journey, inspirations, and collaborations." />
        <meta name="twitter:image" content={AboutEmily} />
        <link rel="canonical" href="https://jackiewyers.beauty/about" />

      </Helmet>
     
      <Grid item xs={12}>
        <TextReveal text="COLLABORATIONS" style={{ backgroundColor: '#fdedef', color: '#000000', fontFamily: 'GFS Didot' }} />
      </Grid>
     
      <Grid item xs={12} md={6}>
        <img src={leftImage} alt="Left" className={styles['about-collaborations-left-image']} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ContactForm />
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0} style={{ padding: '2rem' }}>
          <BrandCarousel />
        </Paper>
      </Grid>
      <Grid item xs={12}>
    <FanArt/>
     
      </Grid>
      <Box sx={{ backgroundColor: 'white', textAlign: 'center', margin: '2rem auto' }}>
            <a href="https://youtube.com/@JackieWyers?si=sklULUqnNkzkmiaY" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon style={{ color: '#745B4F', fontSize: 50, margin: '0 10px' }} />
            </a>
            <a href="https://www.instagram.com/jackiewyers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ color: '#745B4F', fontSize: 50, margin: '0 10px' }} />
            </a>
            <a href="https://pin.it/27OmCVDye" target="_blank" rel="noopener noreferrer">
              <PinterestIcon style={{ color: '#745B4F', fontSize: 50, margin: '0 10px' }} />
            </a>
            <a href="mailto:jackietwyers@gmail.com">
              <MailOutlineIcon style={{ color: '#745B4F', fontSize: 50, margin: '0 10px' }} />
            </a>
          </Box>
    </Grid>
  );
};

export default About;
