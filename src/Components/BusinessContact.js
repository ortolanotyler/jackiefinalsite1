import React from 'react';
import TextReveal from '../Components/TextReveal';
import { Grid } from '@mui/material';
import styles from './About.module.css';
import ContactForm from '../About/ContactForm';

const leftImage = `${process.env.PUBLIC_URL}/Images/About/AboutJackie.jpg`;

const BusinessContact = () => {
  return (
    <Grid container spacing={0} className={styles['about-collaborations-section']}>
      <Grid item xs={12}>
        <TextReveal text="BUSINESS INQUIRIES" style={{ backgroundColor: 'white', color: '#745B4F', fontFamily: 'GFS Didot' }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={leftImage} alt="Left" className={styles['about-collaborations-left-image']} />
      </Grid>
      <Grid item xs={12} md={6} className={styles['about-collaborations-text']}>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default BusinessContact;
