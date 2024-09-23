import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import menuOptions from './menuOptions'; // Import your menu options (pages, tutorialOptions, etc.)

const NavButtons = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
      {menuOptions.map((option, index) => (
        <Button
          key={index}
          component={Link}
          to={option.path}
          sx={{
            my: 2,
            color: '#745B4F',
            display: 'block',
            fontSize: '1rem',
            fontFamily: 'Playfair Display, serif',
            mx: 2,
            '&:hover': { backgroundColor: 'transparent' },
            '&:active': { backgroundColor: 'transparent' }, // Remove background on press
          }}
          onClick={option.subMenu ? handleOpenMenu : handleCloseMenu}
        >
          {option.name}
        </Button>
      ))}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        sx={{
          '.MuiPaper-root': {
            bgcolor: 'white',
            color: '#745B4F',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          },
          '.MuiMenuItem-root': {
            fontFamily: 'Playfair Display, serif',
            fontSize: '1rem',
            '&:hover': { bgcolor: 'transparent' },
          },
        }}
      >
        {anchorEl &&
          menuOptions
            .find((option) => option.name === anchorEl.textContent)
            .subMenu.map((subOption) => (
              <MenuItem
                key={subOption.name}
                onClick={handleCloseMenu}
                component={Link}
                to={subOption.path}
                sx={{ '&:hover': { bgcolor: 'transparent' } }}
              >
                <Typography>{subOption.name}</Typography>
              </MenuItem>
            ))}
      </Menu>
    </Box>
  );
};

export default NavButtons;