import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './EmailSubscribe.css'; // Import CSS file for styling

const EmailSubscribe = () => {
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({ email: Yup.string().email('Invalid email').required('Email is required') }),
    onSubmit: (values, { resetForm }) => {
      fetch('/api/submit-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
        .then(response => {
          if (response.ok) {
            alert('Email subscribed successfully!');
            resetForm();
          } else {
            alert('Failed to subscribe email.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error submitting email.');
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Enter your email"
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default EmailSubscribe;
