import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  IconButton,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RotatingText from './RotatingText';

const logo = `${process.env.PUBLIC_URL}/Images/jackielogo.png`;

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Quiz', path: '/quiz' },
  { name: 'Reviews', path: '/reviews' },
];

const secondaryPages = [
  { name: 'Vlogs', path: '/vlogs' },
  { name: 'Travel', path: '/travel' },
  { name: 'Diary', path: '/diary' },
];

const shopOptions = [
  { name: 'MyStyle', path: '/mystyle' },
  { name: 'Big Beauty Bag', path: '/beautybag' },
  { name: 'VintageVibes Merch', path: '/vintagevibesmerch' },
];

const tutorialOptions = [
  { name: 'View All', path: '/tutorials' },
  { name: 'Trending Now', path: '/tutorials' },
  { name: 'Pop Culture', path: '/popculture' },
  { name: 'Time Travel Tutorials', path: '/vintagevibes' },
  { name: 'All About Hair', path: '/hair' },
];

function ResponsiveAppBar() {
  const isCollapsed = useMediaQuery('(max-width: 1200px)');
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElShop, setAnchorElShop] = useState(null);
  const [anchorElTutorials, setAnchorElTutorials] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenShopMenu = (event) => {
    setAnchorElShop(event.currentTarget);
  };

  const handleCloseShopMenu = () => {
    setAnchorElShop(null);
  };

  const handleOpenTutorialsMenu = (event) => {
    setAnchorElTutorials(event.currentTarget);
  };

  const handleCloseTutorialsMenu = () => {
    setAnchorElTutorials(null);
  };

  return (
    <div>
    <AppBar position="static" sx={{ fontFamily: 'GFS Didot, serif', backgroundColor: '#FDEDEF', width: '100%', height: '12.5vh' }}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
          <IconButton component={Link} to="/" sx={{
            p: 0,
            mr: 1,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}>
            <img src={logo} alt="Logo" style={{ height: '10vh' }} />
          </IconButton>

          {isCollapsed ? (
            <div>
              <IconButton
                size="large"
                aria-label="navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: '#745B4F',
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '.MuiPaper-root': {
                    bgcolor: 'white',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                 
                    color: '#745B4F',
                    minWidth: '200px',
                  },
                  '.MuiMenuItem-root': {
                    fontFamily: 'GFS Didot, sans-serif',
                    fontSize: '1em',
                    '&:hover': {
                      bgcolor: 'transparent',
                    },
                  },
                }}
              >
                {[...pages, ...secondaryPages].map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path} sx={{ '&:hover': { bgcolor: 'transparent' } }}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
                {shopOptions.map((option) => (
                  <MenuItem key={option.name} onClick={handleCloseNavMenu} component={Link} to={option.path} sx={{ '&:hover': { bgcolor: 'transparent' } }}>
                    <Typography textAlign="center">{option.name}</Typography>
                  </MenuItem>
                ))}
                {tutorialOptions.map((option) => (
                  <MenuItem key={option.name} onClick={handleCloseNavMenu} component={Link} to={option.path} sx={{ '&:hover': { bgcolor: 'transparent' } }}>
                    <Typography textAlign="center">{option.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ) : (
            <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{
                    my: 2,
                    color: '#745B4F',
                    display: 'block',
                    fontSize: '1rem',
                    fontFamily: 'GFS Didot, sans-serif',
                    mx: 2,
                    '&:hover': {
                      backgroundColor: 'none'
                    }
                  }}
                >
                  {page.name}
                </Button>
              ))}
              <Button
                aria-controls="tutorials-menu"
                aria-haspopup="true"
                onClick={handleOpenTutorialsMenu}
                sx={{
                  my: 2,
                  color: '#745B4F',
                  display: 'block',
                  fontSize: '1rem',
                  fontFamily: 'GFS Didot, sans-serif',
                  mx: 2,
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
              >
                Tutorials
              </Button>
              <Menu
                id="tutorials-menu"
                anchorEl={anchorElTutorials}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElTutorials)}
                onClose={handleCloseTutorialsMenu}
                sx={{
                  '.MuiPaper-root': {
                    bgcolor: 'white',
                    color: '#745B4F',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                  },
                  '.MuiMenuItem-root': {
                    fontFamily: 'GFS Didot, sans-serif',
                    fontSize: '1rem',
                    '&:hover': {
                      bgcolor: 'transparent',
                    },
                  },
                }}
              >
                {tutorialOptions.map((option) => (
                  <MenuItem key={option.name} onClick={handleCloseTutorialsMenu} component={Link} to={option.path} sx={{ '&:hover': { bgcolor: 'transparent' } }}>
                    {option.name}
                  </MenuItem>
                ))}
              </Menu>
              <Button
                aria-controls="shop-menu"
                aria-haspopup="true"
                onClick={handleOpenShopMenu}
                sx={{
                  my: 2,
                  color: '#745B4F',
                  display: 'block',
                  fontSize: '1rem',
                  fontFamily: 'GFS Didot, sans-serif',
                  mx: 2,
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
              >
                Shop
              </Button>
              <Menu
                id="shop-menu"
                anchorEl={anchorElShop}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElShop)}
                onClose={handleCloseShopMenu}
                sx={{
                  '.MuiPaper-root': {
                    bgcolor: 'white',
                    color: '#745B4F',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                  },
                  '.MuiMenuItem-root': {
                    fontFamily: 'GFS Didot, sans-serif',
                    fontSize: '1rem',
                    '&:hover': {
                      bgcolor: 'transparent',
                    },
                  },
                }}
              >
                {shopOptions.map((option) => (
                  <MenuItem key={option.name} onClick={handleCloseShopMenu} component={Link} to={option.path} sx={{ '&:hover': { bgcolor: 'transparent' } }}>
                    {option.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {!isCollapsed && (
            <Box sx={{ display: 'flex', flexGrow: 0, alignItems: 'center' }}>
              {secondaryPages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{
                    my: 2,
                    color: '#745B4F',
                    display: 'block',
                    fontSize: '1rem',
                    fontFamily: 'GFS Didot, sans-serif',
                    mx: 2,
                    '&:hover': {
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
       
      </Container>
      
    </AppBar>
   <div>
 <RotatingText/>
   </div></div>


  );
}

export default ResponsiveAppBar;
