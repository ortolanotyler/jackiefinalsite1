import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Box, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styles from './Sidebar.module.css'; // Import the CSS module

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'TUTORIALS', path: '/tutorials' },
    { name: 'VIDEOS', path: '/videos' },
    { name: 'REVIEWS', path: '/reviews' },
    { name: 'QUIZ', path: '/quiz' },
    { name: 'MERCH', path: '/vintagevibesmerch' },
    { name: 'SHOP MY STYLE', path: '/mystyle' },
    // Marker for subscribe button
    { name: 'TRAVEL', path: '/travel' },
    { name: 'DIARY', path: '/diary' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'PRESS', path: '/press' },
    { name: 'SITEMAP', path: '/sitemap' },
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
          padding: '0.5rem',
          fontFamily: 'GFS Didot, serif',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '@media (max-width: 1200px)': {
            width: '40vw',
          },
          '@media (max-width: 600px)': {
            width: '70vw',
          },
        }}
        role="presentation"
      >
        <div>
          <IconButton
            onClick={toggleDrawer}
            sx={{ position: 'absolute', top: '1rem', right: '1rem', color: '#745B4F' }}
          >
            <CloseIcon />
          </IconButton>
          {menuItems.map((item, index) => (
            <Button
              key={item.name}
              component={Link}
              to={item.path}
              className={styles.sidebarButton}
              onClick={toggleDrawer}
            >
              <Typography variant="h6" className={styles.sidebarTypography}>
                {item.name}
              </Typography>
            </Button>
          ))}
        </div>
        <Button
          key="subscribe-button"
          component={Link}
          to="/subscribe" // Replace with your subscription link
          sx={{
            backgroundColor: 'black',
            margin: '1rem 0',
            color: 'white',
            borderRadius: '5px',
            width: '100%',
            fontFamily: 'GFS Didot, serif',
            fontSize: '1rem', // Smaller font size
            boxShadow: '0 4px 8px rgba(0, 0.5, 0.5, 0.25)', // Add a shadow
            '&:hover': {
              backgroundColor: '#fdedef',
              color: '#745B4F',
            },
          }}
        >
          Subscribe
        </Button>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            paddingBottom: '1rem',
          }}
        >
          <a href="https://youtube.com/@JackieWyers?si=sklULUqnNkzkmiaY" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon style={{ color: '#745B4F', fontSize: 24 }} />
          </a>
          <a href="https://www.instagram.com/jackiewyers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={{ color: '#745B4F', fontSize: 24 }} />
          </a>
          <a href="https://pin.it/27OmCVDye" target="_blank" rel="noopener noreferrer">
            <PinterestIcon style={{ color: '#745B4F', fontSize: 24 }} />
          </a>
          <a href="mailto:contact@jackiewyers.beauty">
            <MailOutlineIcon style={{ color: '#745B4F', fontSize: 24 }} />
          </a>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
