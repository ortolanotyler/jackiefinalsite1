import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Box, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home'; // Import the Home icon
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'HOME', path: '/' },
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },

   
    { name: 'TUTORIALS', path: '/tutorials' },
    { name: 'QUIZ', path: '/quiz' },
    { name: 'BRIDAL', path: '/bridal' },
    { name: 'TRAVEL', path: '/travel' },
    { name: 'SHOP MY STYLE', path: '/mystyle' },
    { name: 'REVIEWS', path: '/reviews' },
    { name: 'DIARY', path: '/diary' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'SITEMAP', path: '/sitemap' },
  ];

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer}
      PaperProps={{ style: { zIndex: 1400, overflow: 'hidden' } }}
    >
      <Box
        className={styles.sidebar}
        role="presentation"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          padding: '1rem 1.25rem',
        }}
      >
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            color: '#745B4F',
            fontFamily: 'Playfair Display, serif',
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1, overflowY: 'auto', paddingBottom: '1px' }}>
          {menuItems.map((item) => (
            <Button
              key={item.name}
              component={Link}
              to={item.path}
              className={styles.sidebarButton}
              onClick={toggleDrawer}
            >
              <Typography
                variant="h6"
                className={styles.sidebarTypography}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {item.name}
              </Typography>
            </Button>
          ))}
        </Box>

        <Button
          key="subscribe-button"
          component={Link}
          to="/subscribe"
          className={styles.subscribeButton}
          onClick={toggleDrawer}
          sx={{
            margin: '1rem auto',
            padding: '5px',
          }}
        >
          Subscribe
        </Button>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            marginBottom: '1rem',
          }}
        >
          <a href="/" onClick={toggleDrawer}>
            <HomeIcon style={{ color: '#745B4F', fontSize: 24 }} />
          </a>
          <a
            href="https://youtube.com/@JackieWyers?si=sklULUqnNkzkmiaY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon style={{ color: '#745B4F', fontSize: 24 }} />
          </a>
          <a
            href="https://www.instagram.com/jackiewyers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon style={{ color: '#745B4F', fontSize: 24 }} />
          </a>
          <a
            href="https://pin.it/27OmCVDye"
            target="_blank"
            rel="noopener noreferrer"
          >
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