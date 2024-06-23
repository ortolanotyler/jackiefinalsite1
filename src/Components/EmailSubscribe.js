import React, { useState, useRef, useEffect } from 'react';
import { Grid, Button, Box, FormControlLabel, Checkbox, Typography, Alert, TextField } from '@mui/material';
import './EmailSubscribe.module.css'; // Ensure this file exists

const image1 = `${process.env.PUBLIC_URL}/Images/Home/EmailSub.jpeg`;

const iftttWebhookURL = 'https://cors.bridged.cc/https://maker.ifttt.com/trigger/email/with/key/3SLtqFLBg3zfwW2LzXJF4LC0WeaKUlWgfnSpbHY-Uw';

export default function EmailSubscribe() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const buttonRef = useRef(null);
  const hasJiggled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!buttonRef.current || hasJiggled.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        buttonRef.current.classList.add('jiggle');
        hasJiggled.current = true;
        setTimeout(() => {
          buttonRef.current.classList.remove('jiggle');
        }, 900);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !consent) {
      setError('Email and consent are required.');
      return;
    }

    try {
      const response = await fetch(iftttWebhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value1: email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setConsent(false);
        setError('');
      } else {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        setError('Failed to subscribe email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error submitting email.');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="50vh">
      <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ ml: '10px', mt: '10px', maxWidth: '800px', width: '100%' }}>
        {isSubmitted ? (
          <Grid item xs={12}>
            <Alert severity="success">Email subscribed successfully!</Alert>
          </Grid>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <Grid container spacing={3} alignItems="center" justifyContent="center">
              <Grid item xs={12}>
                <img src={image1} alt="Email Subscribe" style={{ width: '100%' }} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  fullWidth
                  variant="outlined"
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
                  ref={buttonRef}
                  type="submit"
                  variant="contained"
                  className="button"
                  sx={{
                    backgroundColor: consent ? '#fdedef' : 'black',
                    color: consent ? '#745B4F' : 'white',
                    borderRadius: '5px',
                    width: '100%',
                    fontFamily: 'GFS Didot, serif',
                    padding: '0.5rem',
                    '&:hover': {
                      backgroundColor: consent ? '#fdedef' : '#333',
                      color: consent ? '#745B4F' : 'white',
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      color="primary"
                      required
                    />
                  }
                  label={
                    <Typography variant="body2" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}>
                      I have read the <a href="/privacy" target="_blank" style={{ color: '#745B4F', textDecoration: 'underline' }}>Privacy Policy</a> and give consent to be a part of the newsletter. I understand that I can unsubscribe at any time via email.
                    </Typography>
                  }
                />
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
    </Box>
  );
}
