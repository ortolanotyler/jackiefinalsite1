import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, IconButton, useMediaQuery, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar'; // Import the Sidebar component
import Logo from './Logo'; // Separate Logo component
import NavButtons from './NavButtons'; // Separate NavButtons component

const ResponsiveAppBar = () => {
  const isCollapsed = useMediaQuery('(max-width: 870px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          fontFamily: 'Playfair Display, sans-serif',
          color: '#745B4F',
          backgroundColor: '#FDEDEF',
          width: '100%',
          zIndex: 1200,
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 16px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Logo toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
              
              {!isCollapsed && (
                <NavButtons />  // Nav buttons right next to the logo
              )}
            </Box>

            {isCollapsed ? (
              <IconButton
                size="large"
                aria-label="navigation menu"
                onClick={toggleSidebar}
                sx={{
                  color: '#745B4F',
                  '&:hover': { backgroundColor: 'transparent' },
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Button
                component={Link}
                to="/subscribe"
                sx={{
                  backgroundColor: '#3a3a3a',
                  color: '#f8f8f8 !important',
                  borderRadius: '25px',
                  padding: '0.5rem 1.5rem',
                  fontFamily: 'Playfair Display, serif',
                  marginLeft: '2rem',
                  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.15)',
                  '&:hover': { backgroundColor: '#745B4F' }, // Ensuring no hover background color change
                }}
              >
                Subscribe
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleSidebar} />
    </>
  );
};

export default ResponsiveAppBar;