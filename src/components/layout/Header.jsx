// src/components/layout/Header.jsx
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  IconButton, 
  Button, 
  useMediaQuery
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { usePageTitle } from '../../context/PageTitleContext';

const Header = ({ onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  usePageTitle();
  const location = useLocation();
  
  const [scrolled, setScrolled] = useState(false);
  
  // Navigation links configuration
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Education', path: '/education' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' }
  ];

  // Handle scroll effect for AppBar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? theme.palette.background.paper : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
        borderBottom: scrolled ? 'none' : `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onDrawerToggle}
            sx={{ 
              mr: 2,
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            color: theme.palette.primary.main,
            textDecoration: 'none',
            fontFamily: '"Gravitas One", serif',
            display: 'flex',
            alignItems: 'center',
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            letterSpacing: '1px',
            textShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.15)' : 'none',
            transition: 'all 0.3s',
            '&:hover': {
              color: theme.palette.secondary.main,
              transform: isMobile ? 'none' : 'scale(1.02)',
            },
          }}
        >
          <Box 
            component="span" 
            sx={{ 
              fontStyle: 'italic', 
              fontWeight: 'bold',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                bottom: '-4px',
                left: 0,
                backgroundColor: theme.palette.secondary.main,
                transform: 'scaleX(0)',
                transformOrigin: 'bottom center',
                transition: 'transform 0.3s ease-out'
              },
              '&:hover::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom center'
              }
            }}
          >
            TIA
          </Box>
        </Typography>

        {/* Navigation - show horizontal menu on desktop */}
        {!isMobile && (
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              mr: 3,
              background: scrolled ? alpha(theme.palette.background.paper, 0.7) : 'transparent',
              borderRadius: theme.shape.borderRadius,
              padding: '4px',
              transition: 'all 0.3s'
            }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              return (
                <Button 
                  key={link.title}
                  component={RouterLink} 
                  to={link.path} 
                  sx={{ 
                    mx: 0.5,
                    px: 2,
                    py: 0.7,
                    position: 'relative',
                    color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                    fontWeight: isActive ? 600 : 500,
                    borderRadius: '6px',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: isActive ? '0%' : '50%',
                      width: isActive ? '100%' : '0%',
                      height: '3px',
                      backgroundColor: theme.palette.primary.main,
                      transition: 'all 0.3s ease'
                    },
                    '&:hover': { 
                      color: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.primary.main, 0.05),
                      '&::before': {
                        left: '0%',
                        width: '100%'
                      }
                    }
                  }}
                >
                  {link.title}
                </Button>
              );
            })}
          </Box>
        )}

      </Toolbar>
    </AppBar>
  );
};

export default Header;