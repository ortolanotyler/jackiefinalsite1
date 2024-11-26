import React from 'react';
import { Box } from '@mui/material';

const DividerWithText = ({ text }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        color: '#888888',
        margin: '1rem 0',
      }}
    >
      <Box sx={{ flex: 1, height: '1px', backgroundColor: '#dddddd' }} />
      <Box
        sx={{
          padding: '0 10px',
          fontSize: '14px',
          fontWeight: '500',
          color: '#666666',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </Box>
      <Box sx={{ flex: 1, height: '1px', backgroundColor: '#dddddd' }} />
    </Box>
  );
};

export default DividerWithText;