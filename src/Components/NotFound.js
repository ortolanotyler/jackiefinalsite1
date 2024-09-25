import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Playfair Display, serif',
        height: '100vh',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '4rem',
          fontFamily: 'Playfair Display, serif',
          color: '#745B4F',
        }}
      >
        404
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: '1.5rem',
          fontFamily: 'Playfair Display, serif',
          color: '#3a3a3a',
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          backgroundColor: '#fdedef',
          color: '#f8f8f8',
          padding: '0.5rem 2rem',
          fontFamily: 'Playfair Display, serif',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: '#fff',
          },
        }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFound;