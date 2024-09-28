import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import menuOptions from './menuOptions'; // Import your menu options

const NavButtons = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null); // Track which menu is open

  const handleOpenMenu = (event, option) => {
    // Only open the menu without navigation if the option has a submenu
    if (option.subMenu) {
      setAnchorEl(event.currentTarget);
      setCurrentMenu(option.name);
    }
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
      {menuOptions.map((option, index) => (
        <Button
          key={index}
          component={!option.subMenu ? Link : 'button'} // Only link when there is no submenu
          to={!option.subMenu ? option.path : undefined}
          sx={{
            my: 2,
            color: '#745B4F',
            display: 'block',
            fontSize: '1.15rem',
            fontFamily: '"Playfair Display", serif', // Updated to Playfair Display
            mx: 2,
            textTransform: 'none',
            cursor: 'pointer',
          }}
          onClick={(event) => handleOpenMenu(event, option)}
        >
          {option.name}
        </Button>
      ))}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          zIndex: 2400, // Ensure it's higher than the AppBar
          '.MuiPaper-root': {
            bgcolor: '#FDEDEF', // Match AppBar background color
            color: '#745B4F',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            border: '1px solid #745B4F',
            fontFamily: '"Playfair Display", serif', // Updated to Playfair Display
          },
          '.MuiMenuItem-root': {
            fontFamily: '"Playfair Display", serif', // Updated to Playfair Display
            fontSize: '1rem',
          },
        }}
      >
        {anchorEl &&
          menuOptions
            .find((option) => option.name === currentMenu)
            ?.subMenu.map((subOption) => (
              <MenuItem
                key={subOption.name}
                onClick={handleCloseMenu}
                component={Link}
                to={subOption.path}
                sx={{
                  fontFamily: '"Playfair Display", serif', // Updated to Playfair Display
                }}
              >
                {subOption.name}
              </MenuItem>
            ))}
      </Menu>
    </Box>
  );
};

export default NavButtons;