import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Box, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import BannerNavSearch from '../../Home/SearchBar';

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'BEAUTY', path: '/tutorials' },
    { name: 'QUIZ', path: '/quiz-2-home' },
    { name: 'TRENDING', path: '/trends' },
    { name: 'BRIDAL', path: '/bridal' },
    { name: 'TRAVEL', path: '/travel' },
    { name: 'POP CULTURE', path: '/popculture' },
    { name: 'VINTAGE VIBES', path: '/timetraveltutorials' },
    { name: 'REVIEWS', path: '/reviews' },
    { name: 'SHOP MY STYLE', path: '/mystyle' },
    { name: 'DIARY', path: '/diary' },
  ];

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer}
      PaperProps={{ style: { zIndex: 1400, width: '300px', overflow: 'hidden' } }}
    >
      <Box
        role="presentation"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          backgroundColor: '#fdedef',
          color: '#745B4F',
          padding: '1rem',
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            alignSelf: 'flex-end',
            color: '#745B4F',
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Search Bar */}
        <Box sx={{ marginBottom: '1rem', paddingTop: '50px' }}>
          <BannerNavSearch />
        </Box>

        {/* Menu Items */}
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
          {menuItems.map((item) => (
            <Button
              key={item.name}
              component={Link}
              to={item.path}
              onClick={toggleDrawer}
              sx={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '0.5rem 1rem',
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.1rem',
                color: '#745B4F',
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>

        {/* Subscribe Button */}
        <Button
          component={Link}
          to="/subscribe"
          onClick={toggleDrawer}
          sx={{
            marginTop: '1rem',
            backgroundColor: '#745B4F',
            color: '#f8f8f8 !important',
            fontSize: '1rem',
            fontWeight: '400',
            textTransform: 'lowercase',
            letterSpacing: '0.1em',
            borderRadius: '50px',
            padding: '10px 20px',
            fontFamily: 'Playfair Display, serif ',
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

        {/* Social Links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            marginTop: '1rem',
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