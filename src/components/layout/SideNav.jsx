// src/components/layout/SideNav.jsx
import React from 'react';
import { 
  Box, 
  Drawer, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider,
  Avatar,
  Tooltip,
  useMediaQuery,
  Stack,
  Chip
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

// Custom progress component
import ProgressBar from '../ui/ProgressBar';

// Import profile image
import profileImg from '../../assets/image.jpg';

// Skills data for dynamic rendering
const skills = [
  { name: 'C++', value: 97, color: '#6fbdcb' },
  { name: 'Python', value: 90, color: '#d8ab6f' },
  { name: 'JavaScript', value: 88, color: '#488be9' },
  { name: 'HTML & CSS', value: 87, color: '#6fbdcb' },
  { name: 'Java', value: 85, color: '#d8ab6f' },
  { name: 'Mobile App Development', value: 80, color: '#488be9' },
  { name: 'Bootstrap', value: 80, color: '#6fbdcb' },
  { name: 'React', value: 60, color: '#d8ab6f' }
];

// Interests data for dynamic rendering
const interests = [
  { name: 'Football', icon: <SportsSoccerIcon />, color: 'primary' },
  { name: 'Table Tennis', icon: <SportsTennisIcon />, color: 'secondary' },
  { name: 'Literature', icon: <MenuBookIcon />, color: 'primary' },
  { name: 'Coding', icon: <CodeIcon />, color: 'secondary' }
];

// Social media links
const socialLinks = [
  { name: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/' },
  { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://linkedin.com/' },
  { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com/' }
];

// Drawer width
const drawerWidth = 280;

const SideNav = ({ mobileOpen, onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Drawer content
  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        background: `linear-gradient(165deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        color: theme.palette.text.primary,
        borderRight: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        transition: 'all 0.3s',
        '&:hover': {
          borderRight: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
        },
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Profile Section */}
      <Box 
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
            opacity: 0.7
          }
        }}
      >
        <Avatar 
          src={profileImg} 
          alt="Tayyab Irfan Aziz"
          sx={{ 
            width: 100, 
            height: 100,
            mb: 2,
            border: `3px solid ${theme.palette.primary.main}`,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }
          }}
        />
        
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 600,
            color: theme.palette.primary.main,
            mb: 0.5,
            fontSize: '1.25rem'
          }}
        >
          Tayyab Irfan Aziz
        </Typography>
        
        <Typography 
          variant="subtitle1" 
          sx={{ 
            mb: 2,
            color: theme.palette.text.secondary,
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          Web Developer | Software Engineer
        </Typography>
        
        {/* Social Media Links */}
        <Stack 
          direction="row" 
          spacing={1.5} 
          sx={{ mb: 2 }}
        >
          {socialLinks.map((link) => (
            <Tooltip key={link.name} title={link.name} arrow>
              <IconButton 
                component="a" 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: theme.palette.text.secondary,
                  transition: 'all 0.3s',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                {link.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Stack>
      </Box>

      {/* Content Container with Scrolling */}
      <Box 
        sx={{ 
          p: 3, 
          pt: 2,
          overflowY: 'auto',
          flex: 1,
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: alpha(theme.palette.primary.main, 0.1),
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: alpha(theme.palette.primary.main, 0.3),
            borderRadius: '10px',
            '&:hover': {
              background: alpha(theme.palette.primary.main, 0.5),
            }
          }
        }}
      >
        {/* Skills Section */}
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 2,
            color: theme.palette.primary.main,
            fontWeight: 600,
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '40%',
              height: '3px',
              bottom: '-5px',
              left: 0,
              backgroundColor: theme.palette.primary.main,
              borderRadius: '2px'
            }
          }}
        >
          Skills
        </Typography>

        {skills.map((skill, index) => (
          <Box key={skill.name} sx={{ mb: 2.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5, alignItems: 'center' }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                  transition: 'color 0.3s',
                  '&:hover': {
                    color: skill.color
                  }
                }}
              >
                {skill.name}
              </Typography>
              <Chip 
                label={`${skill.value}%`} 
                size="small" 
                sx={{ 
                  height: 22, 
                  backgroundColor: alpha(skill.color, 0.2),
                  color: skill.color,
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  border: `1px solid ${alpha(skill.color, 0.3)}`,
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: alpha(skill.color, 0.3),
                    transform: 'translateY(-1px)'
                  }
                }}
              />
            </Box>
            <ProgressBar 
              value={skill.value} 
              color={skill.color}
              delay={index * 100} // Staggered animation
            />
          </Box>
        ))}

        <Divider 
          sx={{ 
            my: 3,
            opacity: 0.8,
            backgroundColor: alpha(theme.palette.primary.main, 0.15)
          }} 
        />

        {/* Interests Section */}
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 2,
            color: theme.palette.primary.main,
            fontWeight: 600,
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '40%',
              height: '3px',
              bottom: '-5px',
              left: 0,
              backgroundColor: theme.palette.primary.main,
              borderRadius: '2px'
            }
          }}
        >
          Interests
        </Typography>

        <List sx={{ pl: 0 }}>
          {interests.map((interest, index) => (
            <ListItem 
              key={interest.name} 
              sx={{ 
                pl: 0,
                py: 0.75,
                transition: 'all 0.3s',
                borderRadius: '8px',
                mb: 0.5,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  transform: 'translateX(5px)',
                  pl: 1
                }
              }}
            >
              <ListItemIcon 
                sx={{ 
                  minWidth: 40,
                  color: theme.palette[interest.color].main,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1) rotate(5deg)'
                  }
                }}
              >
                {interest.icon}
              </ListItemIcon>
              <ListItemText 
                primary={interest.name} 
                primaryTypographyProps={{ 
                  variant: 'body2',
                  fontWeight: 500,
                  color: theme.palette.text.primary
                }} 
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer with Copyright */}
      <Box
        sx={{
          p: 2,
          textAlign: 'center',
          borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          backgroundColor: alpha(theme.palette.background.paper, 0.6)
        }}
      >
        <Typography 
          variant="caption" 
          sx={{ 
            color: theme.palette.text.secondary,
            fontSize: '0.7rem',
            opacity: 0.8
          }}
        >
          © {new Date().getFullYear()} Tayyab Irfan Aziz
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            boxShadow: '4px 0 24px rgba(0, 0, 0, 0.15)'
          },
        }}
      >
        {drawerContent}
      </Drawer>
      
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            position: 'relative',
            height: '100%',
            boxShadow: '4px 0 24px rgba(0, 0, 0, 0.15)'
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default SideNav;

// Helper components
const IconButton = ({ children, ...props }) => {
  return (
    <Box
      component="a"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: '50%',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};