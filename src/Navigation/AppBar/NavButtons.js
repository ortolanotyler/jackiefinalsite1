import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import menuOptions from './menuOptions'; // Import your menu options

const NavButtons = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event, option) => {
    // Only open the menu without navigation if the option has a submenu
    if (option.subMenu) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
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
            ?.subMenu.map((subOption) => (
              <MenuItem
                key={subOption.name}
                onClick={handleCloseMenu}
                component={Link}
                to={subOption.path}
              
              >
                <Typography>{subOption.name}</Typography>
              </MenuItem>
            ))}
      </Menu>
    </Box>
  );
};

export default NavButtons;