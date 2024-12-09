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
import SmallAdSenseAd from '../../Home/AdsenseSmall';
import DividerWithText from '../../Home/DividerWithText';

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const menuItems = [
    { name: '       ', path: '/' },
    { name: 'HOME', path: '/' },
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BEAUTY TUTORIALS', path: '/tutorials' },
    { name: 'QUIZ', path: '/quiz-2-home' },
    { name: 'VINTAGE VIBES', path: '/timetraveltutorials' },
    { name: 'POP CULTURE', path: '/popculture' },
    { name: 'SHOP MY STYLE', path: '/mystyle' },
 

    { name: 'VLOGS', path: '/vlogs' },
    { name: 'TRAVEL ', path: '/travel' },
    { name: 'ANIMAL PRETTY QUIZ', path: '/quiz-2-home' },
    { name: 'REM BEAUTY WICKED REVIEW', path: '/articles/rembeauty/wicked-review' },

    { name: 'TAYLOR SWIFT HOLIDAY GUIDE', path: '/articles/taylor-swift-holidays-2024' },
    { name: 'TAYLOR SWIFT ERAS TOUR', path: '/articles/taylor-swift-eras-tour' },
    { name: 'DIARY', path: '/diary' },
    { name: 'POP CULTURE', path: '/popculture' },
    { name: 'VINTAGE VIBES', path: '/timetraveltutorials' },
    { name: 'TRENDS', path: '/trends' },
    { name: 'SHOP MY STYLE', path: '/mystyle' },

    { name: 'DIARY', path: '/diary' },
    { name: 'REM BEAUTY WICKED REVIEW', path: '/articles/rembeauty/wicked-review' },
    { name: 'MALE VS FEMALE GAZE QUIZ', path: '/quiz/quiz-5-home' },
    { name: 'WICKED COLLABORATIONS', path: '/articles/wicked-collaborations-2024' },

    { name: 'YARDLEY 1965', path: '/yardley1965' },
    { name: 'TWIGGY', path: '/twiggy' },
    { name: "VICTORIA'S SECRET", path: '/victoriasecret' },
    { name: 'SUGAR PLUM FAIRY', path: '/sugarplumfairy' },
    { name: 'SOPHIA LOREN', path: '/sophialoren' },
    { name: 'SHARON TATE BRIDAL', path: '/sharontatebridal' },
    { name: 'ICONIC SHARON', path: '/iconicsharon' },
    { name: 'PAT MCGRATH', path: '/patmcgrath' },
    { name: 'NO MAKEUP SPRING', path: '/nomakeupspring' },
    { name: 'MONT TREMBLANT', path: '/tremblant' },
    { name: 'LATTE MAKEUP', path: '/lattemakeup' },
    { name: 'LANA DEL REY', path: '/lanablog' },
    { name: 'HOTEL QUINTESSENCE', path: '/hotelQ' },
    { name: 'GRACE KELLY', path: '/gracekelly' },
    { name: 'EPCOT', path: '/epcot' },
    { name: 'DISNEY BEACH CLUB RESORT', path: '/disneybeachclubresort' },
    { name: 'MARGOT ROBBIE BARBIE', path: '/margotbarbie' },
    { name: 'INA BALKE', path: '/balkeblog' },
    { name: 'MAKEUP TRENDS 2016', path: '/2016Makeup' },
    { name: 'WESTGATE SAN DIEGO', path: '/westgatesandiego' },
    { name: 'ANDAZ MAUI REVIEW', path: '/andazmaui' },
    { name: 'PRINCE OF WALES', path: '/princeofwales' },
    { name: 'ANIMAL PRETTY QUIZ', path: '/quiz/animalpretty' },
    { name: 'HALFETI REVIEW', path: '/halfetireview' },
    { name: 'JICKY REVIEW', path: '/jickyreview' },
    { name: 'BON BON REVIEW', path: '/bonbonreview' },

    { name: 'PERIOD DRAMA', path: '/perioddrama' },
    { name: 'FAIRYTALE WEDDING', path: '/fairytalewedding' },
    { name: 'REVIEWS', path: '/reviews' },
    { name: 'BRIDAL', path: '/bridal' },
    { name: 'LATEST EXPLORER', path: '/latestexplorer' },
    { name: 'HAIR GROWTH SECRETS', path: '/articles/hair-growth-secrets' },
    { name: 'DCC CHEERLEADER TRANSFORMATION', path: '/articles/dcc-cheerleader' },
    { name: 'HARLEY QUINN EVOLUTION', path: '/articles/harley-quinn-evolution' },
  ];

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer}
      PaperProps={{ style: { zIndex: 1400, width: '300px', overflow: 'hidden' } }}
    >
      <BannerNavSearch/>

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
                fontWeight: '400',
                fontFamily: 'Playfair Display, serif',
                fontSize: '18px',
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
            marginTop: '10px',
            backgroundColor: '#745B4F',
            color: '#f8f8f8 !important',
            fontSize: '18px',
            fontWeight: '400',
            textTransform: 'lowercase',
            letterSpacing: '0.1em',
            borderRadius: '50px',
            padding: '5px 10px',
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
            <HomeIcon style={{ color: '#745B4F', fontSize: 20 }} />
          </a>
          <a
            href="https://youtube.com/@JackieWyers?si=sklULUqnNkzkmiaY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon style={{ color: '#745B4F', fontSize: 20 }} />
          </a>
          <a
            href="https://www.instagram.com/jackiewyers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon style={{ color: '#745B4F', fontSize: 20 }} />
          </a>
          <a
            href="https://pin.it/27OmCVDye"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PinterestIcon style={{ color: '#745B4F', fontSize: 20 }} />
          </a>
          <a href="mailto:contact@jackiewyers.beauty">
            <MailOutlineIcon style={{ color: '#745B4F', fontSize: 20 }} />
          </a>
        </Box>

        <DividerWithText text = "Ad"/>

<SmallAdSenseAd/>



      </Box>

     

    </Drawer>
  );
};

export default Sidebar;