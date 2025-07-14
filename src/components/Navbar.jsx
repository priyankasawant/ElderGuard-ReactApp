import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/investors', label: 'Investors' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <AppBar
        position={'absolute'}
        elevation={0}
        color="transparent"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none' ,
          px: 4,
          py: 1
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            ElderGuard-AI
          </Typography>

          {navLinks.map((link, i) => (
            <Button
              key={i}
              color="inherit"
              component={Link}
              to={link.path}
              sx={{ textTransform: 'none', mx: 1 }}
            >
              {link.label}
            </Button>
          ))}

          <Button
            variant="contained"
            color="primary"
            onClick={() => setAuthOpen(true)}
            sx={{ textTransform: 'none', ml: 2 }}
          >
            Login / Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default Navbar;
