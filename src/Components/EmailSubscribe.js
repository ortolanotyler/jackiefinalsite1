import React, { useEffect, useRef, useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Grid, Button, Box, FormControlLabel, Checkbox, Typography, Alert } from '@mui/material';
import './EmailSubscribe.module.css'; // Import CSS file for styling

const image1 = `${process.env.PUBLIC_URL}/Images/Home/EmailSub.jpeg`;

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  consent: Yup.boolean().oneOf([true], 'Consent is required'),
});

const zapierWebhookURL = 'https://hooks.zapier.com/hooks/catch/18965305/3vxlycx/';

export default function EmailSubscribe() {
  const buttonRef = useRef(null);
  const hasJiggled = useRef(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <Formik
      initialValues={{ email: '', consent: false }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await fetch(zapierWebhookURL, {
            method: 'POST',
            body: JSON.stringify({ email: values.email }),
          });

          if (response.ok) {
            setIsSubmitted(true);
            resetForm();
          } else {
            alert('Failed to subscribe email.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error submitting email.');
        }
        setSubmitting(false);
      }}
    >
      {({ submitForm, isSubmitting, touched, errors, values, handleChange }) => (
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" padding="2rem" mt={8}>
          <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ maxWidth: '1000px', width: '100%' }}>
            {isSubmitted ? (
              <Grid item xs={12}>
                <Alert severity="success">Email subscribed successfully!</Alert>
              </Grid>
            ) : (
              <>
                <Grid item xs={12}>
                  <img src={image1} alt="Email Subscribe" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      borderRadius: '5px',
                      width: '100%',
                      boxSizing: 'border-box',
                      border: '1px solid black',
                      padding: '0.5rem',
                      fontFamily: 'GFS Didot, serif',
                      fontSize: '12px',
                      color: '#745B4F',
                      backgroundColor: '#FFFFFF',
                    }}
                  />
                  {touched.email && errors.email && <div style={{ color: '#745B4F', fontSize: '16px', marginTop: '0.5rem' }}>{errors.email}</div>}
                </Grid>
                <Grid item xs={6}>
                  <Button
                    ref={buttonRef}
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    sx={{
                      backgroundColor: values.consent ? '#fdedef' : 'black',
                      color: values.consent ? '#745B4F' : 'white',
                      borderRadius: '5px',
                      width: '100%',
                      fontFamily: 'GFS Didot, serif',
                      padding: '0.5rem',
                      '&:hover': {
                        backgroundColor: values.consent ? '#fdedef' : '#333',
                        color: values.consent ? '#745B4F' : 'white',
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
                        name="consent"
                        checked={values.consent}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}>
                        I have read the <a href="/privacy" target="_blank" style={{ color: '#745B4F', textDecoration: 'underline' }}>Privacy Policy</a> and give consent to be a part of the newsletter. I understand that I can unsubscribe at any time via email.
                      </Typography>
                    }
                  />
                  {touched.consent && errors.consent && <div style={{ color: '#745B4F', fontSize: '16px', marginTop: '0.5rem' }}>{errors.consent}</div>}
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      )}
    </Formik>
  );
}
