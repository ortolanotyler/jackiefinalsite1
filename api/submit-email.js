const { Pool } = require('pg');
const serverless = require('serverless-http');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const { email } = req.body;

  if (!email) {
    res.status(400).send('Email is required');
    return;
  }

  try {
    await pool.query('INSERT INTO emails (email) VALUES ($1)', [email]);
    res.status(200).send('Email saved successfully');
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send(`Error saving email: ${error.message}`);
  }
}

module.exports = serverless(handler);
