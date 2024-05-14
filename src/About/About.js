import React from 'react';


import FanArt from './FanArtGallery';




import styles from './About.module.css'; // Ensure your CSS module is correctly set up
import TextReveal from '../Components/TextReveal';
import QuoteBanner from './QuoteBanner2';
import ContactForm from './ContactForm';
import BrandCarousel from '../Components/BrandCarousel/BrandCarousel';
import { Grid, Paper } from '@mui/material';
import PageLines from '../Components/PageBreakUpLines';
import MediaSplitComponent from './MediaSplitComponent';
import MediaSplitComponentTwo from './MediaSplitComponentTwo';
import MediaSplitComponentThree from './MediaSplitComponentThree';
import RotatingText from '../Navigation/AppBar/RotatingText';

// Images imported dynamically from the public folder using process.env.PUBLIC_URL
const AboutEmily = `${process.env.PUBLIC_URL}/Images/About/JackieAboutMe1.jpg`;
const leftImage = `${process.env.PUBLIC_URL}/Images/About/AboutJackie.jpg`;



const About = () => {
  return (
    
    <Grid container spacing={0} className={styles['about-container']}>

      <Grid item xs={12}>
    <TextReveal text='MEET JACKIE'  />
    <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', padding : '1rem', marginBottom: '1rem' }}>
      <RotatingText />
    </Paper>

      </Grid>
 
    
      <Grid item xs={12} md={6} className={styles['about-text-section']}>
        <p style={{ fontFamily: 'GFS Didot, serif', color: '#745B4F' }} className={styles['about-left-text']}>
        Hello, beauties! I'm Jackie Wyers, and my YouTube beauty journey started back in my teens (it’s been a minute!) I specialize in creating tutorials that blend the nostalgia of pop culture with vintage beauty and the latest trends. It's been an incredible ride growing up together online, reminiscing about iconic pop culture moments, and staying updated with new beauty trends, products, and today's pop culture. As a professionally trained MUA with a love of character design, I believe discovering your unique style is a significant source of confidence. Life's too short not to experiment. Join me in celebrating pop culture, trends, and beauty techniques that empower you to recreate iconic looks and find your best makeup style. Ready to switch up your style with confidence? 
I've always cherished all things feminine, especially in wholesome TV shows and movies that celebrate sisterhood and style. Some favorites include "H2O: Just Add Water," "Sisterhood of the Traveling Pants,” “Hannah Montana," "Mean Girls,” and more recently, "The Barbie Movie." I love bringing these characters to life through makeup transformations to celebrate their impact on me.
<br></br>
<br/>I also find inspiration in Taylor Swift's ever-changing eras and adore the playfulness of 60s style, a transformative era for women with bold makeup trends to match. These interests are reflected in my pop culture videos, time travel tutorials, and commitment to covering evolving trends and style. While I enjoy getting dressed up, I'm just as happy to get cozy and catch a new movie in the cinema!

As a detail-oriented virgo, I excel at subtle makeup transformations for instantly recognizable inspiration. That being said, my true goal is to simplify beauty techniques that are practical for your everyday routine while also celebrating your unique interests. For example, if you're planning a beach day and want to capture the essence of Brooke Shields in "Blue Lagoon" with windswept hair and no-makeup makeup, I can break down how. Wishing the barbiecore trend was still popping like summer 2023? My tutorial serves as the perfect pink makeup for a date to feel like a Barbie! My aim is to make beauty accessible and enjoyable, helping you express yourself effortlessly in your everyday life. Together, we'll create looks that make you feel incredible and pay homage to the iconic moments and styles that inspire us. Keep experimenting to find your best personal style! xoxo Jackie.
         
        </p>
      </Grid>
      <Grid item xs={12} md={6} className={styles['about-right-section']}>
        <img src={AboutEmily} alt='Emily' className={styles['about-right-image']} />
      </Grid>
      <Grid item xs={12}>
        <QuoteBanner />
      </Grid>
 
      <Grid item xs={12}>
        <TextReveal text='FAN ART GALLERY'/>
      </Grid>
      <Grid item xs={12} >
        <FanArt />
      </Grid>
      <Grid item xs={12}>
      <TextReveal text='COLLABORATIONS'/>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={leftImage} alt="Left" className={styles['about-collaborations-left-image']} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ContactForm />
      </Grid>
      <Grid item  md = {12} >
        <PageLines />
      </Grid>
   
      <Grid item xs={12} >
        <BrandCarousel />
      </Grid>
     
      <Grid item  xs = {12} >
        <PageLines />
      </Grid>
  
      <Grid item  xs = {12} >
        <MediaSplitComponent />
      </Grid>
      <Grid item  xs = {12} >
        <PageLines />
      </Grid>
      <Grid item  xs = {12} >
        <MediaSplitComponentTwo />
      </Grid>
      <Grid item  xs = {12} >
        <PageLines />
      </Grid>
      <Grid item  xs = {12} >
        <MediaSplitComponentThree />
        </Grid>
   

    
   
    </Grid>
  );
};

export default About;
