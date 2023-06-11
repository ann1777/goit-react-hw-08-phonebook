import React, { useState } from 'react';
import { AppBar, Nav, NavBlock, UserBlock } from './Header.styled';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import { useAuth } from 'redux/auth/useAuth';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { UserBadge } from '../UserBadge/UserBadge';

import {
  Box,
  Divider,
  IconButton,
  Drawer,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// const primary = green[200];

import { createTheme, ThemeProvider } from '@mui/material/styles';
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#E0E7D9',
    },
    secondary: {
      main: '#FFF4F0',
    },
  },
});

const Header = () => {
  const { isLoggedIn } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const Logo = 'https://cdn2.iconfinder.com/data/icons/email-58/65/45-512.png';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileMenu = (
    <ThemeProvider theme={defaultTheme}>
      <Box
        onClick={handleDrawerToggle}
        sx={{ textAlign: 'center', padding: 0 }}
      >
        <Typography
          color="primary.main"
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            my: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link to="/">
            <img src={Logo} alt="logo" width={48} />
          </Link>
        </Typography> 
        <Divider />
        <Nav>
          <HeaderNav />
        </Nav>
        <UserBlock>{isLoggedIn ? <UserBadge /> : <HeaderAuth />}</UserBlock>
      </Box>
    </ThemeProvider>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        component={'header'}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '44px',
          width: '100%',
        }}
      >
        <AppBar
          component={'nav'}
          sx={{
            background: '#ffffff',
            backdropFilter: 'blur(7.5px)',
            position: 'relative',
          }}
          elevation={6}
        >
          <Toolbar
            sx={{
              justifyContent: 'space-between',
            }}
          >
            <IconButton
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: 'none' },
                color: '#A0C972',
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              {isLoggedIn ? <UserBadge /> : <HeaderAuth />}
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ my: 2, display: { xs: 'none', sm: 'block' } }}
            >
              <Link to="/">
                <img src={Logo} alt="logo" width={48} />
              </Link>
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <NavBlock>
                <HeaderNav />
              </NavBlock>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <UserBlock>
                {isLoggedIn ? <UserBadge /> : <HeaderAuth />}
              </UserBlock>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '280px',
                background: '#ffffff',
                backdropFilter: 'blur(7.5px)',
              },
            }}
          >
            {mobileMenu}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
