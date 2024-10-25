import React from 'react';
import { Helmet } from 'react-helmet-async';
import TextReveal from '../Components/TextReveal';
import { Grid } from '@mui/material';
import styles from './About.module.css';
import ContactForm from '../About/ContactForm';

const leftImage = `${process.env.PUBLIC_URL}/Images/About/AboutJackie.jpg`;

const BusinessContact = () => {
  return (
    <div>
      <Helmet>
        <title>Business Contact | Jackie Wyers</title>
        <meta name="description" content="Reach out for business inquiries and collaborations with Jackie Wyers. Fill out the contact form for more information." />
      
      </Helmet>
      <Grid container spacing={0} className={styles['about-collaborations-section']}
      style = {{
        paddingTop: '20px',
  
      }}
      >
        <Grid item xs={12}
           style = {{
            paddingTop: '20px',
      
          }}
        >
          <TextReveal text="BUSINESS INQUIRIES" style={{ backgroundColor: 'white', color: '#745B4F' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={leftImage} alt="Left" className={styles['about-collaborations-left-image']} />
        </Grid>
        <Grid item xs={12} md={6} className={styles['about-collaborations-text']}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default BusinessContact;
