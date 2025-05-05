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
  LinearProgress,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// Skills data for dynamic rendering
const skills = [
  { name: 'C++', value: 97, color: 'success' },
  { name: 'Python', value: 90, color: 'warning' },
  { name: 'JavaScript', value: 88, color: 'info' },
  { name: 'HTML & CSS', value: 87, color: 'primary' },
  { name: 'Java', value: 85, color: 'error' },
  { name: 'Mobile App Development', value: 80, color: 'secondary' },
  { name: 'Bootstrap', value: 80, color: 'success' },
  { name: 'React', value: 60, color: 'inherit' }
];

// Interests data for dynamic rendering
const interests = [
  { name: 'Football', icon: <SportsSoccerIcon />, color: 'primary' },
  { name: 'Table Tennis', icon: <SportsTennisIcon />, color: 'error' },
  { name: 'Literature', icon: <MenuBookIcon />, color: 'success' }
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
        p: 3,
        height: '100%',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderRight: `3px solid ${theme.palette.primary.main}`,
        transition: 'border-right 0.2s',
        '&:hover': {
          borderRight: `3px solid ${theme.palette.primary.light}`,
        }
      }}
    >
      <Typography variant="h5" sx={{ mt: 2 }}>
        Tayyab Irfan Aziz
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Web Developer | Software Engineer
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {/* Skills Section */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Skills
      </Typography>
      {skills.map((skill) => (
        <Box key={skill.name} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">{skill.name}</Typography>
            <Typography variant="body2">{skill.value}%</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={skill.value}
            color={skill.color}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: theme.palette.primary.dark,
              '& .MuiLinearProgress-bar': {
                borderRadius: 5,
              },
              transition: 'background-color 0.2s',
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
              }
            }}
            className="progress-animate"
          />
        </Box>
      ))}

      <Divider sx={{ my: 2 }} />

      {/* Interests Section */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Interests
      </Typography>
      <List>
        {interests.map((interest) => (
          <ListItem key={interest.name} sx={{ pl: 0 }}>
            <ListItemIcon sx={{ color: `${interest.color}.main` }}>
              {interest.icon}
            </ListItemIcon>
            <ListItemText 
              primary={interest.name} 
              primaryTypographyProps={{ color: interest.color }} 
            />
          </ListItem>
        ))}
      </List>
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
            width: drawerWidth 
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
            height: '100%'
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