import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { EmailContext } from './EmailContext';

export default function EmailList() {
  const { emailsList } = useContext(EmailContext);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="50vh" flexDirection="column">
      <Typography variant="h6" style={{ fontFamily: 'GFS Didot, sans-serif', color: 'black' }}>Subscribed Emails:</Typography>
      <ol>
        {emailsList.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ol>
    </Box>
  );
}
