import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, IconButton, useMediaQuery, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import Logo from './Logo';
import NavButtons from './NavButtons';
import BannerNavSearch from '../../Home/SearchBar'; // Import the search bar

const ResponsiveAppBar = () => {
  const isCollapsed = useMediaQuery('(max-width: 1355px)');
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
          fontWeight: '400',
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
              fontWeight: '400',
              alignItems: 'center',
              padding: '5px 10px',
            }}
          >
            {/* Left Section: Logo, Subscribe Button, and Search Bar */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <IconButton
                size="large"
                aria-label="navigation menu"
                onClick={toggleSidebar}
                sx={{
                  color: '#745B4F',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: '400',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#745B4F',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Logo toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
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
                    marginLeft: '10px',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#000000 !important',
                      backgroundColor: '#fdedef',
                      border: '1px solid #745B4F !important',
                    },
                  }}
                >
                  Subscribe
                </Button>
              )}
              {!isCollapsed && (
                <Box
                  sx={{
                    width: '400px',
                    maxWidth: '100%',
                    marginLeft: '1rem',
                    paddingRight: '10px',
                  }}
                >
                  <BannerNavSearch />
                </Box>
              )}
            </Box>

            {/* Right Section: Nav Links */}
            {!isCollapsed && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '1rem',
                }}
              >
                <NavButtons />
              </Box>
            )}

            {/* Sidebar for smaller screens */}
            {isCollapsed && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingRight: '16px',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}
              >
                <Box
                  sx={{
                    width: '90%',
                    maxWidth: '300px',
                    marginRight: '10px',
                  }}
                >
                  <BannerNavSearch />
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleSidebar} />
    </>
  );
};

export default ResponsiveAppBar;