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
import Sidebar from './Sidebar'; // Import the Sidebar component
import './ResponsiveAppBar.css'; // Import the CSS file for custom styles

const logo = `${process.env.PUBLIC_URL}/Images/Home/jwlogo3.png`;

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Travel', path: '/travel' },
  { name: 'Beauty', path: '/tutorials' },
  { name: 'Quiz', path: '/quiz' },
];

const aboutOptions = [
  { name: 'Contact', path: '/contact' },
  { name: 'Media Kit', path: '/press' },
  { name: 'Fan Art Gallery', path: '/fan-art' },
  
];



const shopOptions = [
  { name: 'Shop My Style', path: '/mystyle' },
  { name: 'VintageVibes Merch', path: '/vintagevibesmerch' },
];

const tutorialOptions = [
  { name: 'All Tutorials', path: '/tutorials' },
  { name: 'Bridal', path: '/bridal' },

  { name: 'Trending Now', path: '/trends' },
  { name: 'Pop Culture', path: '/popculture' },
  { name: 'Vintage Vibes', path: '/timetraveltutorials' },
];

function ResponsiveAppBar() {
  const isCollapsed = useMediaQuery('(max-width: 1250px)');
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElShop, setAnchorElShop] = useState(null);
  const [anchorElTutorials, setAnchorElTutorials] = useState(null);
  const [anchorElBeyond, setAnchorElBeyond] = useState(null);
  const [anchorElAbout, setAnchorElAbout] = useState(null); // New state for About dropdown
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

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

  const handleOpenBeyondMenu = (event) => {
    setAnchorElBeyond(event.currentTarget);
  };

  const handleCloseBeyondMenu = () => {
    setAnchorElBeyond(null);
  };

  const handleOpenAboutMenu = (event) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleCloseAboutMenu = () => {
    setAnchorElAbout(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          fontFamily: 'GFS Didot, serif',
          color: '#745B4F',
          backgroundColor: '#FDEDEF',
          marginBottom: '1px',
          width: '100%',
          zIndex: 1200, // Ensure it stays above other content but below the sidebar
        }}
      >
        <Container maxWidth="50%" disableGutters>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
            <IconButton
              onClick={toggleSidebar}
              sx={{
                p: 0,
                mr: 1,
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: '100px', // Exact width for the logo
                  height: '100px', // Exact height for the logo
                }}
              />
            </IconButton>

            {isCollapsed ? (
              <div>
                <IconButton
                  size="large"
                  aria-label="navigation menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="false"
                  onClick={toggleSidebar}
                  sx={{
                    color: '#745B4F',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
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
                    '.MuiPaper-root': {},
                    '.MuiMenuItem-root': {
                      fontFamily: 'GFS Didot, sans-serif',
                      fontSize: '1rem',
                      '&:hover': {
                        bgcolor: 'transparent',
                      },
                    },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={handleOpenTutorialsMenu}>
                    <Typography textAlign="center">Beauty</Typography>
                  </MenuItem>
                  <Menu
                    id="tutorials-submenu"
                    anchorEl={anchorElTutorials}
                    open={Boolean(anchorElTutorials)}
                    onClose={handleCloseTutorialsMenu}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    sx={{
                      '.MuiPaper-root': {
                        bgcolor: 'white',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                      },
                      '.MuiMenuItem-root': {
                        fontFamily: 'GFS Didot, sans-serif',
                        '&:hover': {
                          bgcolor: 'transparent',
                        },
                      },
                    }}
                  >
                    {tutorialOptions.map((option) => (
                      <MenuItem key={option.name} onClick={handleCloseTutorialsMenu} component={Link} to={option.path}>
                        <Typography textAlign="center">{option.name}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
               
               
                  {shopOptions.map((option) => (
                    <MenuItem key={option.name} onClick={handleCloseNavMenu} component={Link} to={option.path}>
                      <Typography textAlign="center">{option.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ) : (
              <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                {pages.slice(0, 1).map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.path}
                    className="responsive-button"
                    sx={{
                      my: 2,
                      color: '#745B4F',
                      display: 'block',
                      fontSize: '1rem',
                      fontFamily: 'GFS Didot, sans-serif',
                      mx: 2,
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
                <Button
                  aria-controls="about-menu"
                  aria-haspopup="true"
                  onClick={handleOpenAboutMenu}
                  className="responsive-button"
                  sx={{
                    my: 2,
                    color: '#745B4F',
                    display: 'flex',
                    fontSize: '1rem',
                    fontFamily: 'GFS Didot, sans-serif',
                    mx: 2,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  About
                </Button>
                <Menu
                  id="about-menu"
                  anchorEl={anchorElAbout}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElAbout)}
                  onClose={handleCloseAboutMenu}
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
                  {aboutOptions.map((option) => (
                    <MenuItem key={option.name} onClick={handleCloseAboutMenu} component={Link} to={option.path} sx={{ '&:hover': { bgcolor: 'transparent' } }}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Menu>
                <Button
                  aria-controls="tutorials-menu"
                  aria-haspopup="true"
                  onClick={handleOpenTutorialsMenu}
                  className="responsive-button"
                  sx={{
                    my: 2,
                    color: '#745B4F',
                    display: 'block',
                    fontSize: '1rem',
                    fontFamily: 'GFS Didot, sans-serif',
                    mx: 2,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
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
                {pages.slice(2, 3).map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.path}
                    className="responsive-button"
                    sx={{
                      my: 2,
                      color: '#745B4F',
                      display: 'block',
                      fontSize: '1rem',
                      fontFamily: 'GFS Didot, sans-serif',
                      mx: 2,
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
                <Button
                  aria-controls="shop-menu"
                  aria-haspopup="true"
                  onClick={handleOpenShopMenu}
                  className="responsive-button"
                  sx={{
                    my: 2,
                    color: '#745B4F',
                    display: 'block',
                    fontSize: '1rem',
                    fontFamily: 'GFS Didot, sans-serif',
                    mx: 2,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  STYLE
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
                {pages.slice(3).map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.path}
                    className="responsive-button"
                    sx={{
                      my: 2,
                      color: '#745B4F',
                      display: 'block',
                      fontSize: '1rem',
                      fontFamily: 'GFS Didot, sans-serif',
                      mx: 2,
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
               
               
              </Box>
            )}

            {!isCollapsed && (
              <Box sx={{ display: 'flex', flexGrow: 0, alignItems: 'center' }}>
               <Button
  component={Link}
  to="/subscribe"
  className="subscribe-button" // Rename the class for specificity
  sx={{
    backgroundColor: '#3a3a3a',
    color: '#ffffff !important',  // Adding !important to force the color
    borderRadius: '50px',
    width: '100%',
    fontFamily: 'GFS Didot, serif',
    padding: '10px 25px',
    fontSize: '1rem',
    marginRight: '30px',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.15)',

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
}

export default ResponsiveAppBar;
