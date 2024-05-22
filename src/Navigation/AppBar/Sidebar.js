import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Box, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Sidebar.module.css'; // Import the CSS module

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'QUIZ', path: '/quiz' },
    { name: 'POP CULTURE OBSESSED', path: '/popculture' },
    { name: 'TIME TRAVEL TUTORIALS', path: '/timetraveltutorials' },
    { name: 'TRENDS', path: '/trends' },
    { name: 'PRODUCT REVIEWS', path: '/reviews' },
    { name: 'TRAVEL', path: '/travel' },
    { name: 'HOTEL REVIEWS', path: '/travel' },
    { name: 'ITINERARIES', path: '/travel' },
    { name: 'DIARY', path: '/diary' },
    { name: 'SHOP MY STYLE', path: '/mystyle' },
    { name: "60'S MERCH", path: '/mystyle' },
    { name: 'BIG BEAUTY BAG', path: '/mystyle' },
    { name: 'SITEMAP', path: '/sitemap' },
    { name: 'PRESS', path: '/mediakit' },
    { name: 'PRIVACY', path: '/privacy' },
  ];

  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer} PaperProps={{ style: { zIndex: 1400 } }}>
      <Box
        className={styles.sidebar}
        sx={{
          width: '25vw',
          height: '100vh',
          backgroundColor: '#FDEDEF',
          padding: '2rem 1rem',
          fontFamily: 'GFS Didot, serif',
          position: 'relative',
          '@media (max-width: 1200px)': {
            width: '45vw',
          },
        }}
        role="presentation"
      >
        <IconButton
          onClick={toggleDrawer}
          sx={{ position: 'absolute', top: '1rem', right: '1rem', color: '#745B4F' }}
        >
          <CloseIcon />
        </IconButton>
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
              textAlign: 'left',
              justifyContent: 'flex-start', // Align text to the left
            }}
            onClick={toggleDrawer}
          >
            <Typography variant="h6" className={styles.sidebarTypography}>
              {item.name}
            </Typography>
          </Button>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
