import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, IconButton, useMediaQuery, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import Logo from './Logo';
import NavButtons from './NavButtons';
import BannerNavSearch from '../../Home/SearchBar'; // Import the search bar

const ResponsiveAppBar = () => {
  const isCollapsed = useMediaQuery('(max-width: 870px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          fontFamily: 'Playfair Display, serif',
          color: '#745B4F',
          backgroundColor: '#FDEDEF',
          width: '100%',
          zIndex: 2300, // Ensure it's higher than the main content
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
              fontFamily: 'Playfair Display, serif',
              alignItems: 'center',
              padding: '5px 10px',
            }}
          >
            {/* Left Section: Menu Icon and Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <IconButton
                size="large"
                aria-label="navigation menu"
                onClick={toggleSidebar}
                sx={{
                  color: '#745B4F',
                  fontFamily: 'Playfair Display, serif',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#745B4F',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Logo toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
            </Box>

            {/* Center Section: Search Bar and Nav Links */}
            {!isCollapsed && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  flex: 1, // Takes up remaining space between left and right sections
                }}
              >
                <Box sx={{ width: '300px', maxWidth: '80%' }}>
                  <BannerNavSearch />
                </Box>
                <NavButtons />
              </Box>
            )}

            {/* Right Section: Subscribe Button */}
            {!isCollapsed && (
              <Button
                component={Link}
                to="/subscribe"
                sx={{
                  backgroundColor: '#745B4F',
                  color: '#f8f8f8 !important',
                  fontSize: '1rem',
                  fontWeight: '400',
                  textTransform: 'lowercase',
                  letterSpacing: '0.1em',
                  borderRadius: '50px',
                  padding: '10px 20px',
                  fontFamily: 'Playfair Display, serif ',
                  marginRight: '10px',
                  transition: 'color 0.3s ease', // Smooth transition for color change
                  '&:hover': {
                    color: '#000000 !important', // Change text color on hover
                    backgroundColor: '#fdedef', // Maintain the same background color
                    border: '1px solid #745B4F !important',
                  },
                }}
              >
                Subscribe
              </Button>
            )}

            {/* Menu Icon for Smaller Screens */}
            {isCollapsed && (
              <IconButton
                size="large"
                aria-label="navigation menu"
                onClick={toggleSidebar}
                sx={{
                  color: '#745B4F',
                  fontFamily: 'Playfair Display, serif',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#745B4F',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleSidebar} />
    </>
  );
};

export default ResponsiveAppBar;