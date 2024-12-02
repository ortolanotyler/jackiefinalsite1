import React, { useState, useContext } from 'react';
import { Grid, Button, Box, Typography, Alert, TextField, Paper } from '@mui/material';
import { EmailContext } from './EmailContext';
import axios from 'axios';
import './EmailSubscribe.module.css';
import NewsletterSlider from '../Home/NewsletterSlider';
import EmailSubscribe from './EmailSubscribe';

export default function EmailSubscribe2() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { addEmail } = useContext(EmailContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required.');
      return;
    }

    try {
      const response = await axios.post('https://jackie-emails-2a29185717d6.herokuapp.com/subscribe', { email });
      if (response.status === 200) {
        setIsSubmitted(true);
        setEmail('');
        setError('');
        addEmail(email);
      }
    } catch (error) {
      setError('Failed to subscribe. Please try again.');
    }
  };

  return (
    <>
   
   <Typography 
        variant="h2" 
        align="center" 
        sx={{ 
          
     
          fontFamily: 'Playfair Display, serif', 
          margin: '1rem auto',
          fontWeight : '400',
          maxWidth: '100%',
          color: '#000000', 
        }}
      >
        Sign up for the weekly newsletter!
      
      </Typography>

<div style = {{
margin: '1rem auto',

}}>
<EmailSubscribe/>
</div>

    </>
   
  );
}