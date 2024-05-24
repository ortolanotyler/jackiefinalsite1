const express = require('express');
const { Pool } = require('pg');
const serverless = require('serverless-http');

const app = express();
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.post('/submit-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email is required');
  }

  try {
    await pool.query('INSERT INTO emails (email) VALUES ($1)', [email]);
    res.status(200).send('Email saved successfully');
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send(`Error saving email: ${error.message}`);
  }
});

app.post('/submit-form', async (req, res) => {
  const { fullName, emailAddress, companyName, message } = req.body;

  if (!fullName || !emailAddress || !companyName || !message) {
    return res.status(400).send('All fields are required');
  }

  try {
    await pool.query(
      'INSERT INTO contact_forms (full_name, email_address, company_name, message) VALUES ($1, $2, $3, $4)',
      [fullName, emailAddress, companyName, message]
    );
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send(`Error submitting form: ${error.message}`);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);
