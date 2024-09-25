// NavButtons.js
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
            fontSize: '1rem',
            fontFamily: 'Playfair Display, serif',
            mx: 2,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#745B4F',
            },
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
          '.MuiPaper-root': {
            bgcolor: '#FDEDEF', // Match AppBar background color
            color: '#745B4F',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            border: '1px solid #745B4F',
            fontFamily: 'Playfair Display, serif', // Ensure font family
          },
          '.MuiMenuItem-root': {
            fontFamily: 'Playfair Display, serif',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#E6DCDC', // Slightly darker shade on hover
              color: '#000000',
            },
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
                  fontFamily: 'Playfair Display, serif', // Ensure font family
                  '&:hover': {
                    backgroundColor: '#E6DCDC',
                    color: '#000000',
                  },
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