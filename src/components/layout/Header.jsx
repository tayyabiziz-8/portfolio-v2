// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
  useMediaQuery 
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { usePageTitle } from '../../context/PageTitleContext';

// Import profile image - adjust path as needed
import profileImg from '../../assets/image.jpg';

const Header = ({ onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { pageTitle } = usePageTitle();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onDrawerToggle}
            sx={{ mr: 2 }}
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
            color: 'white',
            textDecoration: 'none',
            fontFamily: '"Gravitas One", serif',
            '&:hover': {
              color: theme.palette.secondary.main,
              transition: 'color 0.3s',
            },
          }}
          className="icon-font"
        >
          <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>TIA</span>
        </Typography>

        {/* Navigation - show horizontal menu on desktop */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button 
              component={RouterLink} 
              to="/" 
              color="inherit"
              sx={{ 
                mx: 1,
                color: theme.palette.text.secondary,
                '&:hover': { color: theme.palette.primary.light }
              }}
            >
              Home
            </Button>
            <Button 
              component={RouterLink} 
              to="/education" 
              color="inherit"
              sx={{ 
                mx: 1,
                color: theme.palette.text.secondary,
                '&:hover': { color: theme.palette.primary.light }
              }}
            >
              Education
            </Button>
            <Button 
              component={RouterLink} 
              to="/projects" 
              color="inherit"
              sx={{ 
                mx: 1,
                color: theme.palette.text.secondary,
                '&:hover': { color: theme.palette.primary.light }
              }}
            >
              Projects
            </Button>
            <Button 
              component={RouterLink} 
              to="/contact" 
              color="inherit"
              sx={{ 
                mx: 1,
                color: theme.palette.text.secondary,
                '&:hover': { color: theme.palette.primary.light }
              }}
            >
              Contact
            </Button>
          </Box>
        )}

        {/* Avatar with dropdown */}
        <Box>
          <IconButton
            onClick={handleMenu}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar 
              src={profileImg} 
              alt="Tayyab Irfan Aziz"
              sx={{ 
                width: 40, 
                height: 40,
                border: `2px solid ${theme.palette.primary.main}`,
                '&:hover': { 
                  border: `2px solid ${theme.palette.primary.light}`,
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s'
                }
              }}
            />
          </IconButton>
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'account-button',
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;