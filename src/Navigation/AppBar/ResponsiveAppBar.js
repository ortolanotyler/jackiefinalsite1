// ResponsiveAppBar.js
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
          zIndex: 1200,
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
              padding: '0 16px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Logo toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />

              {!isCollapsed && <NavButtons />}
            </Box>

            {isCollapsed ? (
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
            ) : (
              <Button
                component={Link}
                to="/subscribe"
                sx={{
                  backgroundColor: '#3a3a3a',
                  color: '#f8f8f8 !important',
                  borderRadius: '50px',
                  padding: '0.5rem 1.5rem',
                  fontFamily: 'Georgia, serif !important',
                  marginLeft: '1rem',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
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