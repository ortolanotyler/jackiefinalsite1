import React from 'react';
import FanArt from './FanArtGallery';
import styles from './About.module.css';
import QuoteBanner from './QuoteBanner2';
import ContactForm from './ContactForm';
import BrandCarousel from '../Components/BrandCarousel/BrandCarousel';
import { Grid, Paper, Box } from '@mui/material';


import TextReveal from '../Components/TextReveal';
import AboutSection1 from './AboutSection1';



const AboutEmily = `${process.env.PUBLIC_URL}/Images/About/JackieAboutMe1.JPG`;
const leftImage = `${process.env.PUBLIC_URL}/Images/About/AboutJackie.jpg`;

const About = () => {
  return (
    
    <Grid container spacing={0} className={styles['about-container']}>
   <Grid item xs={12} className={styles['about-right-section']}>
        <AboutSection1/>
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
