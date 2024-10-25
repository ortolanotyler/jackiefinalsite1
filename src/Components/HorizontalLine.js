import React from 'react';
import { Box } from '@mui/material';

const HorizontalLine = () => {
  return (
    <Box
      sx={{
        width: '80%',
        height: '1px',
        backgroundColor: 'rgba(0, 0, 0, 0.15)', // Faint black line with 10% opacity
        margin: '1rem auto', // Adjust the vertical margin
      }}
    />
  );
};

export default HorizontalLine;