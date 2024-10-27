import React, { useState, useContext } from 'react';
import { Grid, Button, Box, Typography, Alert, TextField, Paper } from '@mui/material';
import { EmailContext } from './EmailContext';
import axios from 'axios';
import './EmailSubscribe.module.css';
import NewsletterSlider from '../Home/NewsletterSlider';

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
   


<div style = {{
  paddingTop: '100px',
}}>
<NewsletterSlider/>
</div>

    </>
   
  );
}