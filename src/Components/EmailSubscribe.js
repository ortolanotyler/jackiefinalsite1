import React, { useState, useContext } from 'react';
import { Grid, Button, Box, Typography, Alert, TextField, Paper } from '@mui/material';
import { EmailContext } from './EmailContext';
import axios from 'axios';
import './EmailSubscribe.module.css';
import TextBanner2 from './TextBanner2';

export default function EmailSubscribe() {
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
   

<Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  width="100%"
  height="400px"
  px={2}
  sx={{
    position: 'relative',
    
    backgroundColor: 'white',
  }}
>

  {/* Form inside a white card */}
  <Paper
    elevation={0}
    sx={{
      position: 'relative',
      zIndex: 2,
      padding: '1rem',
      maxWidth: '80%',
      backgroundColor: 'white',
      borderRadius: '0px',
    }}
  >
  

  
    <Grid container alignItems="center" justifyContent="center">
      {isSubmitted ? (
        <Grid item xs={12}>
          <Alert severity="success">Email subscribed successfully!</Alert>
        </Grid>
      ) : (
        <form onSubmit={handleSubmit} className="form">

          <Grid container spacing={3}>
            {/* Title above the email input */}

            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'GFS Didot, serif',
                  color: '#745B4F',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font size
                }}
              >
                Enter your email to subscribe !
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                fullWidth
                required
                className="input"
                sx={{
                  '& input': {
                    fontFamily: 'GFS Didot, serif',
                    color: '#745B4F',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                className="button"
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: '0px',
                  width: '100%',
                  fontFamily: 'GFS Didot, serif',
                  padding: '1rem',
                  '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white',
                  },
                }}
              >
                Subscribe
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '1rem',
                  fontFamily: 'GFS Didot, serif',
                  color: 'black',
                }}
              >
                By submitting, you agree to our{' '}
                <a
                  href="/privacy"
                  target="_blank"
                  style={{ color: '#745B4F', textDecoration: 'underline' }}
                >
                  Privacy Policy
                </a>.
              </Typography>
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Alert severity="error">{error}</Alert>
              </Grid>
            )}
          </Grid>
        </form>
      )}
    </Grid>
  </Paper>
</Box>
    </>
   
  );
}