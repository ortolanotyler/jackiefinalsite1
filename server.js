const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

app.post('/api/submit-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email is required');
  }

  try {
    await pool.query('INSERT INTO emails (email) VALUES ($1)', [email]);
    res.status(200).send('Email saved successfully');
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Error saving email');
  }
});

app.post('/api/submit-form', async (req, res) => {
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
    res.status(500).send('Error submitting form');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
