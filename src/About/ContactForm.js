import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ContactForm.module.css'; // Import CSS file for styling

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      emailAddress: '',
      companyName: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
      emailAddress: Yup.string().email('Invalid email address').required('Required'),
      companyName: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
        .then(response => {
          if (response.ok) {
            alert('Form submitted successfully!');
            resetForm();
          } else {
            alert('Failed to submit form.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error submitting form.');
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="fullName"
        onChange={formik.handleChange}
        value={formik.values.fullName}
        placeholder="Full name"
      />
      {formik.touched.fullName && formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}
      
      <input
        type="email"
        name="emailAddress"
        onChange={formik.handleChange}
        value={formik.values.emailAddress}
        placeholder="Email address"
      />
      {formik.touched.emailAddress && formik.errors.emailAddress ? <div>{formik.errors.emailAddress}</div> : null}
      
      <input
        type="text"
        name="companyName"
        onChange={formik.handleChange}
        value={formik.values.companyName}
        placeholder="Company name"
      />
      {formik.touched.companyName && formik.errors.companyName ? <div>{formik.errors.companyName}</div> : null}
      
      <textarea
        name="message"
        onChange={formik.handleChange}
        value={formik.values.message}
        placeholder="Message"
      />
      {formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null}
      
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
