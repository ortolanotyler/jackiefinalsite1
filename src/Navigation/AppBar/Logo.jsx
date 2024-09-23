import React from 'react';
import { IconButton } from '@mui/material';

const logo = `${process.env.PUBLIC_URL}/Images/Home/jwlogo3.png`;

const Logo = ({ toggleSidebar, isCollapsed }) => (
  <IconButton
    onClick={toggleSidebar}
    sx={{
      p: 0,
      mr: 1,
      '&:hover': { backgroundColor: 'transparent' },
    }}
  >
    <img
      src={logo}
      alt="Logo"
      style={{ width: '100px', height: '100px' }}
    />
  </IconButton>
);

export default Logo;