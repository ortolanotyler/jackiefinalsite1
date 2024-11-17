import React from 'react';
import FanArt from './FanArtGallery';
import styles from './About.module.css';
import QuoteBanner from './QuoteBanner2';
import ContactForm from './ContactForm';
import BrandCarousel from '../Components/BrandCarousel/BrandCarousel';
import { Grid, Paper, Box } from '@mui/material';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextReveal from '../Components/TextReveal';
import HorizontalLine from '../Components/HorizontalLine';


const AboutEmily = `${process.env.PUBLIC_URL}/Images/About/JackieAboutMe1.JPG`;
const leftImage = `${process.env.PUBLIC_URL}/Images/About/AboutJackie.jpg`;

const About = () => {
  return (
    
    <Grid container spacing={0} className={styles['about-container']}>
      <Grid item xs={12}
      style = {{
        paddingTop: '50px',
      }}
      >

      
      </Grid>

      <Grid item xs={12} md={6} className={styles['about-text-section']}>
        <div style={{ padding: '10px', margin: '0 2.5rem', fontFamily: 'Playfair Display, serif', color: '#745B4F' , backgroundColor: '#fdedef'  }} className={styles['about-left-text']}>
          <p style={{ fontFamily: 'Playfair Display, serif', color: '#3a3a3a', textAlign: 'center', fontSize: '2.5rem', textDecoration: 'italic' }}>Hello! I'm Jackie Wyers.</p>
     
         
          <p style={{ fontFamily: 'Playfair Display, serif', textIndent: '1rem',fontSize: '1.25rem' , color: '#745B4F', margin: '1rem auto'}}>
            Welcome to where beauty meets pop culture. I started my YouTube career in my teens, and connecting with you through beauty has been a highlight of my life thus far.
          </p>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem' , color: '#745B4F', }}>
            As a professionally trained makeup artist with a deep passion for character design, I excel at celebrating and recreating iconic looks. Life’s too short not to embrace both new trends and timeless styles. My tutorials are designed to guide you on how to <strong> switch up your style with confidence </strong>.
          </p>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem' , color: '#745B4F', }}>
            I have a soft spot for TV and films that celebrate sisterhood and style. My comfort TV shows include "H2O: Just Add Water" and "Emily In Paris." Among my favorite films are "Sisterhood of the Traveling Pants," "Mean Girls," "Little Women," and more recently, "The Barbie Movie." I love bringing these characters to life through makeup transformations, celebrating their impact on me and acknowledging the incredible work of the artists behind the scenes.
          </p>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem' , color: '#745B4F', }}>
            Inspiration also strikes from Taylor Swift's ever-changing eras and the playful 1960s—a transformative era for women with bold makeup trends to match. These inspirations are reflected in my video series, which includes TV and film hairstyles, wearable pop culture makeup transformations, and Time Travel Tutorials that cover all the vintage vibes. You'll also find modern trends and product recommendations here!
          </p>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem' , color: '#745B4F', }}>
            My goal is to simplify beauty techniques that are practical for your everyday routine while celebrating our unique interests. Whether you're aiming for a Brooke Shields-inspired no-makeup makeup look for a beach day, or a vibrant, pink Barbiecore look reminiscent of Summer 2023, I'm here to help. I aim to make beauty accessible and enjoyable, helping you express yourself effortlessly in your everyday life.
          </p>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem' , color: '#745B4F', }}>
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
        <TextReveal text="INQUIRIES" style={{ backgroundColor: 'white', color: '#745B4F', fontFamily: 'GFS Didot, serif' }} />
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
        <FanArt />
     
      </Grid>
    </Grid>
  );
};

export default About;
