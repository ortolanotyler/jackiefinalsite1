import React, { useState, useContext } from 'react';
import { Grid, Button, Box, FormControlLabel, Checkbox, Typography, Alert, TextField } from '@mui/material';
import { EmailContext } from './EmailContext';
import axios from 'axios';
import './EmailSubscribe.module.css'; // Ensure this file exists

const image1 = `${process.env.PUBLIC_URL}/Images/Home/EmailSub.jpeg`;

export default function EmailSubscribe() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { addEmail } = useContext(EmailContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !consent) {
      setError('Email and consent are required.');
      return;
    }

    try {
      const response = await axios.post('https://jackie-emails-2a29185717d6.herokuapp.com/subscribe', { email });
      if (response.status === 200) {
        setIsSubmitted(true);
        setEmail('');
        setConsent(false);
        setError('');
        addEmail(email);
      }
    } catch (error) {
      setError('Failed to subscribe. Please try again.');
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
                    <Typography variant="body2" style={{ fontSize: '0.75rem',fontFamily: 'GFS Didot, serif', color: 'black' }}>
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
