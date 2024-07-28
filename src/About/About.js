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
      </Helmet>
      <Grid item xs={12}>
        <TextReveal text='MEET JACKIE' />
      </Grid>
      <Grid item xs={12} md={6} className={styles['about-text-section']}>
        <div style={{ fontFamily: 'GFS Didot, serif', color: '#745B4F', margin: '1rem' }} className={styles['about-left-text']}>
          <p style={{ color: 'black', textAlign: 'center', fontSize: '30px', marginBottom: '1rem' }}>Hello! I'm Jackie Wyers.</p>
          <p style={{ textIndent: '1em', marginBottom: '1rem' }}>
            Welcome to where beauty meets pop culture. I started my YouTube career in my teens, and connecting with you through beauty has been a highlight of my life thus far.
          </p>
          <p style={{ textIndent: '1em', marginBottom: '1rem' }}>
            As a professionally trained makeup artist with a deep passion for character design, I excel at celebrating and recreating iconic looks. Life’s too short not to embrace both new trends and timeless styles. My tutorials are designed to guide you on how to <strong> switch up your style with confidence </strong>.
          </p>
          <p style={{ textIndent: '1em', marginBottom: '1rem' }}>
            I have a soft spot for TV and films that celebrate sisterhood and style. My comfort TV shows include "H2O: Just Add Water" and "Emily In Paris." Among my favorite films are "Sisterhood of the Traveling Pants," "Mean Girls," "Little Women," and more recently, "The Barbie Movie." I love bringing these characters to life through makeup transformations, celebrating their impact on me and acknowledging the incredible work of the artists behind the scenes.
          </p>
          <p style={{ textIndent: '1em', marginBottom: '1rem' }}>
            Inspiration also strikes from Taylor Swift's ever-changing eras and the playful 1960s—a transformative era for women with bold makeup trends to match. These inspirations are reflected in my video series, which includes TV and film hairstyles, wearable pop culture makeup transformations, and Time Travel Tutorials that cover all the vintage vibes. You'll also find modern trends and product recommendations here!
          </p>
          <p style={{ textIndent: '1em', marginBottom: '1rem' }}>
            My goal is to simplify beauty techniques that are practical for your everyday routine while celebrating our unique interests. Whether you're aiming for a Brooke Shields-inspired no-makeup makeup look for a beach day, or a vibrant, pink Barbiecore look reminiscent of Summer 2023, I'm here to help. I aim to make beauty accessible and enjoyable, helping you express yourself effortlessly in your everyday life.
          </p>
          <p style={{ textIndent: '1em', marginBottom: '1rem' }}>
            Together, we'll create looks that make you feel incredible and pay homage to the iconic moments and styles that inspire us. If you follow my tutorials, tag me on social media—I love seeing your experiments and often reshare them on my channels!
          </p>
          <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
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
        </div>
      </Grid>
      <Grid item xs={12} md={6} className={styles['about-right-section']}>
        <img src={AboutEmily} alt='Emily' className={styles['about-right-image']} />
      </Grid>
      <Grid item xs={12}>
        <QuoteBanner />
      </Grid>
      <Grid item xs={12}>
        <TextReveal text="COLLABORATIONS" style={{ backgroundColor: 'white', color: '#745B4F', fontFamily: 'GFS Didot' }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={leftImage} alt="Left" className={styles['about-collaborations-left-image']} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ContactForm />
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={1} style={{ padding: '2rem' }}>
          <BrandCarousel />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <TextReveal text='FAN ART GALLERY' />
        <FanArt />
      </Grid>
    </Grid>
  );
};

export default About;
