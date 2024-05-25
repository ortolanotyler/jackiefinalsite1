import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css'; // Import the CSS module

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

const ContactForm = () => {
  // State for submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      emailAddress: '',
      companyName: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      emailAddress: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      companyName: Yup.string()
        .required('Required'),
      message: Yup.string()
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      fetch(`${apiBaseUrl}/api/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      .then(response => {
        if (response.ok) {
          setIsSubmitted(true);
          resetForm({});
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    },
  });

  return (
    <div className={styles.container}>
      {isSubmitted ? (
        <div>
          <p>Thank You! I will be in touch.</p>
        </div>
      ) : (
        <>
          <div className={styles.column}>
            <p>
              Throughout the years, I have had the privilege of collaborating with esteemed brands that have enhanced the quality of my
              tutorials. If you believe that our partnership would be a beneficial fit, please reach out.
            </p>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
              <input
                type="text"
                name="fullName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className={styles.input}
                placeholder="Full name"
              />
              {formik.touched.fullName && formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}
              
              <input
                type="email"
                name="emailAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.emailAddress}
                className={styles.input}
                placeholder="Email address"
              />
              {formik.touched.emailAddress && formik.errors.emailAddress ? <div>{formik.errors.emailAddress}</div> : null}
              
              <input
                type="text"
                name="companyName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyName}
                className={styles.input}
                placeholder="Company name"
              />
              {formik.touched.companyName && formik.errors.companyName ? <div>{formik.errors.companyName}</div> : null}
              
              <textarea
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Message"
              />
              {formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null}
              
              <button type="submit" className={styles.button}>SEND</button>
            </form>
            <div style={{ height: '5vh' }}>
              <p></p>
            </div>
            <div className={styles.rightAlign}>
              <a
                href="/press"
                style={{
                  fontSize: '19px',
                  color: 'black',
                  textDecoration: 'underline',
                }}
              >
                View media kit and previous collaborations <span>&#x2192;</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactForm;
