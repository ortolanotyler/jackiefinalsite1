import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Define a validation schema using Yup
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default function EmailSubscribe() {
  // Splitting the text based on \n to render separately
  const textSegments = `Watch Beauty Tutorials, Read Articles, Product Reviews & Take Quizzes Below! \n
Join to access the newsletter & exclusive content!`.split('\n');

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
        <Form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2.5rem' }}>
          <Grid container spacing={3} alignItems="center" style={{ width: '50vw', padding: '5rem', borderRadius: '1rem' }}>
            <Grid item xs={12}>
              {/* Render each segment with custom styles */}
              {textSegments.map((segment, index) => (
                <Typography
                  key={index}
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    fontSize: index === 0 ? '2.5rem' : '1.75rem', // Change font size based on index
                    fontFamily: 'GFS Didot, serif',
                    textAlign: 'center',
                    color: index === 0 ? '#745B4F' : '#333', // Change color based on index
                  }}
                >
                  {segment}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                style={{
                  borderRadius: '10px',
                  width: '100%',
                  boxSizing: 'border-box',
                  border: '1px solid #745B4F',
                  padding: '1rem',
                }}
              />
              {touched.email && errors.email && <div style={{ color: 'red', fontSize: '1rem' }}>{errors.email}</div>}
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                onClick={submitForm}
                sx={{
                  padding: '0.75rem',
                  fontSize: '1rem',
                  backgroundColor: '#FDEDEF',
                  color: '#745B4F',
                  borderRadius: '1rem',
                  width: '100%',
                  fontFamily: 'GFS Didot, serif', // Apply directly
                  fontWeight: 'bold', // Apply directly
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
