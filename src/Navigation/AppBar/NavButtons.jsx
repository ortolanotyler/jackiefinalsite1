import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import menuOptions from './menuOptions'; // Import your menu options

const NavButtons = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenu, setSubmenu] = useState([]);

  const handleOpenMenu = (event, subMenu) => {
    setAnchorEl(event.currentTarget);
    setSubmenu(subMenu || []);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSubmenu([]);
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
            backgroundColor: 'transparent',
          }}
          onClick={(event) =>
            option.subMenu ? handleOpenMenu(event, option.subMenu) : handleCloseMenu()
          }
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
            backgroundColor: '#FDEDEF',
            color: '#745B4F',
            boxShadow: 'none',
            borderRadius: '0',
            fontFamily: 'Playfair Display, serif',
            padding: 0,
            marginTop: '0.5rem',
          },
          '.MuiMenuItem-root': {
            fontFamily: 'Playfair Display, serif !important',
            fontSize: '16px !important',
            color: '#745B4F !important',
            padding: '0.5rem 1rem',
            backgroundColor: 'transparent !important',
          },
        }}
      >
        {submenu.map((subOption) => (
          <MenuItem
            key={subOption.name}
            onClick={handleCloseMenu}
            component={Link}
            to={subOption.path}
            sx={{
              fontFamily: 'Playfair Display, serif !important',
              fontSize: '16px !important',
              color: '#745B4F !important',
              textTransform: 'uppercase',
              backgroundColor: 'transparent',
            }}
          >
            <Typography>{subOption.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NavButtons;