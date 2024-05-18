import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Grid, Button, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ArrowDownward } from '@mui/icons-material';

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
        <Form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Grid container spacing={3} alignItems="center" style={{ width: '100%', padding: '1rem' }}>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontFamily: 'GFS Didot, serif',
                  textAlign: 'center',
                  color: 'black'
                }}
              >
                Watch Beauty Tutorials, Read Articles, Product Reviews & Take Quizzes!
                <ArrowDownward sx={{ fontSize: 'inherit', verticalAlign: 'middle' }} />
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontFamily: 'GFS Didot, serif',
                  textAlign: 'center',
                  color: '#745B4F'
                }}
              >
                Join to access the newsletter & exclusive content!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                style={{
                  borderRadius: '10px',
                  width: '100%',
                  boxSizing: 'border-box',
                  border: '1px solid #745B4F',
                  padding: '.75rem',
                  fontFamily: 'GFS Didot, serif',
                }}
              />
              {touched.email && errors.email && <div style={{ color: '#745B4F', fontSize: '1rem' }}>{errors.email}</div>}
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                onClick={submitForm}
                sx={{
                  fontSize: '1rem',
                  backgroundColor: '#FDEDEF',
                  color: '#745B4F',
                  borderRadius: '1rem',
                  width: '100%',
                  fontFamily: 'GFS Didot, serif',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#FDEDEF',
                  }
                }}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
