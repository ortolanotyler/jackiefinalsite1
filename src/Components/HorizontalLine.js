import React from 'react';
import { Box } from '@mui/material';

const HorizontalLine = () => {
  return (
    <Box
      sx={{
        width: '80%',
        height: '1.5px',
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Faint black line with 10% opacity
        margin: '0 auto', // Adjust the vertical margin
      }}
    />
  );
};

export default HorizontalLine;