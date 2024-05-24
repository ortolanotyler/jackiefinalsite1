// src/App.js
import React, { useState } from 'react';
import { API_URL, FORM_API_URL } from './config';

const App = () => {
  const [email, setEmail] = useState('');
  const [form, setForm] = useState({
    fullName: '',
    emailAddress: '',
    companyName: '',
    message: ''
  });

  const handleSubmitEmail = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  const handleSubmitForm = async () => {
    try {
      const response = await fetch(FORM_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h1>Submit Email</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmitEmail}>Submit Email</button>

      <h1>Submit Form</h1>
      <input
        type="text"
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        placeholder="Full Name"
      />
      <input
        type="email"
        value={form.emailAddress}
        onChange={(e) => setForm({ ...form, emailAddress: e.target.value })}
        placeholder="Email Address"
      />
      <input
        type="text"
        value={form.companyName}
        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
        placeholder="Company Name"
      />
      <textarea
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="Message"
      />
      <button onClick={handleSubmitForm}>Submit Form</button>
    </div>
  );
};

export default App;
