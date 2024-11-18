import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, IconButton, useMediaQuery, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import Logo from './Logo';
import NavButtons from './NavButtons';

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
          zIndex: 2300,
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '5px 10px',
              fontFamily: 'Playfair Display, serif',
            }}
          >
            {isCollapsed ? (
              <>
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
                <Box sx={{ marginLeft: 'auto' }}>
                  <Logo />
                </Box>
              </>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Logo />
                  <NavButtons />
                </Box>
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
                    marginRight: '50px',
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