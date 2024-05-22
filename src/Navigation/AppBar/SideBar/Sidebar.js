import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Box, Button, Typography } from '@mui/material';
import styles from './Sidebar.module.css'; // Import the CSS module

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const menuItems = [
    { name: 'Subscribe', path: '/subscribe' },
    { name: 'Fashion', path: '/fashion' },
    { name: 'Beauty', path: '/beauty' },
    { name: 'Culture', path: '/culture' },
    { name: 'News & Politics', path: '/news-politics' },
    { name: 'Horoscopes', path: '/horoscopes' },
    { name: 'Weddings', path: '/weddings' },
    { name: 'In the Magazine', path: '/magazine' },
    { name: 'Newsletter', path: '/newsletter' },
    { name: 'Follow', path: '/follow' },
  ];

  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      <Box
        sx={{
          width: '20vw',
          height: '100vh',
          backgroundColor: '#FDEDEF',
          padding: '2rem 1rem',
          fontFamily: 'GFS Didot, serif',

        }}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        {menuItems.map((item) => (
          <Button
            key={item.name}
            component={Link}
            to={item.path}
            className={styles.sidebarButton}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#000000',
              },
            }}
          >
            <Typography variant="h6" className={styles.sidebarTypography}>{item.name}</Typography>
          </Button>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
