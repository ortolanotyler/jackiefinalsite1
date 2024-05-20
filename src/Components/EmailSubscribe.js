import React from 'react';
import { Formik,  Field } from 'formik';
import * as Yup from 'yup';
import { Grid, Button, Typography, Box } from '@mui/material';

const image1 = `${process.env.PUBLIC_URL}/Images/Home/EmailSub.jpeg`;

// Define a validation schema using Yup
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default function EmailSubscribe() {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await fetch('http://localhost:3001/submit-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: values.email }),
          });

          if (response.ok) {
            alert('Email subscribed successfully!');
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
      {({ submitForm, isSubmitting, touched, errors }) => (
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" padding="2rem" mt={8}>
          
          <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ maxWidth: '1000px', width: '100%' }}>
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
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                onClick={submitForm}
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: '5px',
                  width: '100%',
                  fontFamily: 'GFS Didot, serif',
                
                  padding: '0.5rem',
                  '&:hover': {
                    backgroundColor: '#fdedef',
                    color: '#745B4F',
                  },
                }}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Formik>
  );
}
