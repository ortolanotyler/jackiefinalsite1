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
import './ResponsiveAppBar.css'; // Import the CSS file for custom styles
import Sidebar from './SideBar/Sidebar';

const logo = `${process.env.PUBLIC_URL}/Images/Home/jackielogo.png`;

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Quiz', path: '/quiz' },
  { name: 'Reviews', path: '/reviews' },
];

const beyondBeautyOptions = [
  { name: 'Travel', path: '/travel' },
  { name: 'Vlog', path: '/vlog' },
  { name: 'Diary', path: '/diary' },
];

const shopOptions = [
  { name: 'MyStyle', path: '/mystyle' },
  { name: 'Big Beauty Bag', path: '/beautybag' },
  { name: 'VintageVibes Merch', path: '/vintagevibesmerch' },
];

const tutorialOptions = [
  { name: 'All Tutorials', path: '/tutorials' },
  { name: 'Trending Now', path: '/trends' },
  { name: 'Pop Culture', path: '/popculture' },
  { name: 'Vintage Vibes', path: '/timetraveltutorials' },
];

function ResponsiveAppBar() {
  const isCollapsed = useMediaQuery('(max-width: 1300px)');
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElShop, setAnchorElShop] = useState(null);
  const [anchorElTutorials, setAnchorElTutorials] = useState(null);
  const [anchorElBeyond, setAnchorElBeyond] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

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

  const handleOpenBeyondMenu = (event) => {
    setAnchorElBeyond(event.currentTarget);
  };

  const handleCloseBeyondMenu = () => {
    setAnchorElBeyond(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AppBar position="fixed" sx={{
        fontFamily: 'GFS Didot, serif',
        backgroundColor: '#FDEDEF',
        margin: 0,
        padding: '1rem',
        width: '100%',
        zIndex: 1300, // Ensure it stays above other content
      }}>
        <Container maxWidth="false" disableGutters>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
            <IconButton onClick={toggleSidebar} sx={{
              p: 0,
              mr: 1,
              '&:hover': {
                backgroundColor: 'transparent'
              }
            }}>
              <img src={logo} alt="Logo" style={{ height: '8vh' }} />
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
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={handleOpenTutorialsMenu}>
                    <Typography textAlign="center">Tutorials</Typography>
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
                  <MenuItem onClick={handleOpenBeyondMenu}>
                    <Typography textAlign="center">Beyond Beauty</Typography>
                  </MenuItem>
                  <Menu
                    id="beyond-beauty-submenu"
                    anchorEl={anchorElBeyond}
                    open={Boolean(anchorElBeyond)}
                    onClose={handleCloseBeyondMenu}
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
                    {beyondBeautyOptions.map((option) => (
                      <MenuItem key={option.name} onClick={handleCloseBeyondMenu} component={Link} to={option.path}>
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
                {pages.slice(0, 2).map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.path}
                    className="jiggle-button"
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
                <Button
                  aria-controls="tutorials-menu"
                  aria-haspopup="true"
                  onClick={handleOpenTutorialsMenu}
                  className="jiggle-button"
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
                {pages.slice(2).map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.path}
                    className="jiggle-button"
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
                <Button
                  aria-controls="beyond-beauty-menu"
                  aria-haspopup="true"
                  onClick={handleOpenBeyondMenu}
                  className="jiggle-button"
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
                  Beyond Beauty
                </Button>
                <Menu
                  id="beyond-beauty-menu"
                  anchorEl={anchorElBeyond}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElBeyond)}
                  onClose={handleCloseBeyondMenu}
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
                  {beyondBeautyOptions.map((option) => (
                    <MenuItem key={option.name} onClick={handleCloseBeyondMenu} component={Link} to={option.path} sx={{ '&:hover': { bgcolor: 'transparent' } }}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Menu>
                <Button
                  aria-controls="shop-menu"
                  aria-haspopup="true"
                  onClick={handleOpenShopMenu}
                  className="jiggle-button"
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
                <Button
                  component={Link}
                  to="/subscribe" // Replace with your subscription link
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '5px',
                    width: '100%',
                    fontFamily: 'GFS Didot, serif',
                    padding: '0.5rem', // Half the padding of the original button
                    fontSize: '1rem', // Smaller font size
                    '&:hover': {
                      backgroundColor: '#fdedef',
                      color: '#745B4F',
                    },
                    marginRight: '1rem', // Add some margin to the right
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
