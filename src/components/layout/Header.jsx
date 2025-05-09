// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  IconButton, 
  Button, 
  Avatar, 
  Menu, 
  MenuItem, 
  useMediaQuery,
  Fade,
  Tooltip,
  Divider
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { usePageTitle } from '../../context/PageTitleContext';

// Import profile image - adjust path as needed
import profileImg from '../../assets/image.jpg';

const Header = ({ onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { pageTitle } = usePageTitle();
  const location = useLocation();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const open = Boolean(anchorEl);
  
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

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              transform: 'scale(1.02)',
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
                transformOrigin: 'bottom right',
                transition: 'transform 0.3s ease-out'
              },
              '&:hover::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left'
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

        {/* Avatar with dropdown */}
        <Box>
          <Tooltip title="Account settings" arrow>
            <IconButton
              onClick={handleMenu}
              size="small"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              sx={{
                p: 0.5,
                border: `2px solid transparent`,
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  backgroundColor: 'transparent'
                }
              }}
            >
              <Avatar 
                src={profileImg} 
                alt="Tayyab Irfan Aziz"
                sx={{ 
                  width: 40, 
                  height: 40,
                  border: `2px solid ${theme.palette.primary.main}`,
                  transition: 'all 0.3s',
                  '&:hover': { 
                    borderColor: theme.palette.primary.light,
                    transform: 'scale(1.05)'
                  }
                }}
              />
            </IconButton>
          </Tooltip>
          
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 4,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                borderRadius: '8px',
                width: 200,
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: theme.palette.background.paper,
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                  borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  borderLeft: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            TransitionComponent={Fade}
          >
            <Box sx={{ px: 2, py: 1 }}>
              <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 600 }}>
                Tayyab Irfan Aziz
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                tayyabsbuni@gmail.com
              </Typography>
            </Box>
            
            <Divider sx={{ my: 1 }} />
            
            <MenuItem onClick={handleClose} sx={{ 
              py: 1.5,
              '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.08) }
            }}>
              <AccountCircleIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
              <Typography variant="body2">Profile</Typography>
            </MenuItem>
            
            <MenuItem onClick={handleClose} sx={{ 
              py: 1.5,
              '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.08) }
            }}>
              <SettingsIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
              <Typography variant="body2">Settings</Typography>
            </MenuItem>
            
            <Divider sx={{ my: 1 }} />
            
            <MenuItem onClick={handleClose} sx={{ 
              py: 1.5,
              '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.08) }
            }}>
              <LogoutIcon sx={{ mr: 2, color: theme.palette.error.main }} />
              <Typography variant="body2" color="error.main">Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;