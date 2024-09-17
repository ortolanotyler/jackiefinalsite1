import React from 'react';
import { Box } from '@mui/material';

const HorizontalLine = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '1px',
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Faint black line with 10% opacity
        margin: '20px 0', // Adjust the vertical margin
      }}
    />
  );
};

export default HorizontalLine;