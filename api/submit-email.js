const { Client } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Load environment variables from .env

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const { email } = req.body;

  if (!email) {
    res.status(400).send('Email is required');
    return;
  }

  const hashedEmail = await bcrypt.hash(email, 10);

  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  await client.connect();

  try {
    await client.query('INSERT INTO emails (email, plain_email) VALUES ($1, $2)', [hashedEmail, email]);
    res.status(200).send('Email saved successfully');
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Error saving email');
  } finally {
    await client.end();
  }
};
