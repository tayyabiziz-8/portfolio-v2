// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Box, Typography, Avatar, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { usePageTitle } from '../context/PageTitleContext';

// Import profile image - adjust path as needed
import profileImg from '../assets/image.jpg';

const Home = () => {
  const theme = useTheme();
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Home');
    // Cleanup function
    return () => {};
  }, [setPageTitle]);

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', py: 5 }} className="fade-in">
        <Avatar
          src={profileImg}
          alt="Tayyab Irfan Aziz"
          sx={{
            width: 150,
            height: 150,
            mx: 'auto',
            mb: 3,
            border: `3px solid ${theme.palette.primary.main}`,
            transition: 'transform 0.3s, border 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
              border: `4px solid ${theme.palette.primary.light}`,
            }
          }}
          className="profile-image-animate"
        />
        
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              width: '50px',
              height: '3px',
              backgroundColor: theme.palette.primary.main,
              transform: 'translateX(-50%)',
              transition: 'width 0.3s',
            },
            '&:hover::after': {
              width: '100px',
            }
          }}
        >
          Tayyab Irfan Aziz
        </Typography>
        
        <Typography 
          variant="h6" 
          component="p" 
          color="text.secondary" 
          sx={{ 
            mt: 4,
            transition: 'font-size 1s',
            '&:hover': {
              fontSize: 'large'
            }
          }}
          className="para"
        >
          Computer Science student with expertise in C++, Python, Java, and Android development. <br />
          Passionate about problem-solving, efficient software design, and building impactful tech solutions.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;