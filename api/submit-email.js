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

module.exports = app;
module.exports.handler = serverless(app);
