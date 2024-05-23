const { Client } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Add this line to load environment variables from .env

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const { email, recaptcha } = req.body;

  if (!email || !recaptcha) {
    res.status(400).send('Email and reCAPTCHA are required');
    return;
  }

  // Add reCAPTCHA verification logic here (if needed)
  
  const hashedEmail = await bcrypt.hash(email, 10);

  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  await client.connect();

  try {
    await client.query('INSERT INTO emails(email) VALUES($1)', [hashedEmail]);
    res.status(200).send('Email saved successfully');
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Error saving email');
  } finally {
    await client.end();
  }
};
