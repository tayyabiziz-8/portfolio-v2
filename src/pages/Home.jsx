// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  Fade, 
  Zoom, 
  Button,
  useMediaQuery
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { usePageTitle } from '../context/PageTitleContext';
import { Link as RouterLink } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import profile image - adjust path as needed
import profileImg from '../assets/image.jpg';

const Home = () => {
  const theme = useTheme();
  const { setPageTitle } = usePageTitle();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isLoaded, setIsLoaded] = useState(false);

  // Feature cards data
  const featureCards = [
    {
      title: "Software Development",
      icon: <CodeIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      description: "Expertise in C++, Python, Java, and modern web development frameworks.",
      delay: 400
    },
    {
      title: "Education",
      icon: <SchoolIcon fontSize="large" sx={{ color: theme.palette.secondary.main }} />,
      description: "Computer Science student with a focus on algorithms and software engineering.",
      delay: 600
    },
    {
      title: "Experience",
      icon: <WorkIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      description: "Hands-on experience in Android app development and full-stack web projects.",
      delay: 800
    }
  ];

  useEffect(() => {
    setPageTitle(''); // Remove title as we're showing it differently on homepage
    
    // Simulate loading to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, [setPageTitle]);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 4, md: 6 },
        pb: { xs: 6, md: 10 }
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.06)} 0%, transparent 60%)`,
          filter: 'blur(60px)',
          zIndex: 0,
          animation: 'float 20s infinite alternate ease-in-out',
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.06)} 0%, transparent 60%)`,
          filter: 'blur(60px)',
          zIndex: 0,
          animation: 'floatReverse 15s infinite alternate ease-in-out',
        }}
      />
      
      {/* Hero section */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ textAlign: 'center', order: { xs: 1, md: 2 } }}>
            <Zoom in={isLoaded} style={{ transitionDelay: isLoaded ? '200ms' : '0ms' }}>
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Avatar
                  src={profileImg}
                  alt="Tayyab Irfan Aziz"
                  sx={{
                    width: { xs: 180, md: 220 },
                    height: { xs: 180, md: 220 },
                    mx: 'auto',
                    border: `4px solid ${theme.palette.primary.main}`,
                    boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.3)}, 
                                0 8px 24px ${alpha(theme.palette.common.black, 0.4)}`,
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    '&:hover': {
                      transform: 'scale(1.05) rotate(2deg)',
                      boxShadow: `0 0 0 6px ${alpha(theme.palette.primary.main, 0.4)}, 
                                  0 12px 36px ${alpha(theme.palette.common.black, 0.5)}`,
                    }
                  }}
                  className="profile-image"
                />
                
                {/* Decorative ring around avatar */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -15,
                    left: -15,
                    right: -15,
                    bottom: -15,
                    borderRadius: '50%',
                    border: `2px dashed ${alpha(theme.palette.secondary.main, 0.5)}`,
                    animation: 'spin 20s linear infinite',
                  }}
                />
                
                {/* Tech chips floating around avatar */}
                {['C++', 'Python', 'JavaScript', 'React'].map((tech, index) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    color={index % 2 === 0 ? 'primary' : 'secondary'}
                    sx={{
                      position: 'absolute',
                      fontWeight: 'bold',
                      boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.2)}`,
                      animation: `float${index} 8s infinite ease-in-out`,
                      opacity: 0.9,
                      ...getChipPosition(index),
                      display: { xs: 'none', sm: 'flex' }
                    }}
                  />
                ))}
              </Box>
            </Zoom>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            <Fade in={isLoaded} style={{ transitionDelay: isLoaded ? '300ms' : '0ms' }}>
              <Box textAlign={{ xs: 'center', md: 'left' }}>
                <Typography 
                  variant="overline" 
                  component="p"
                  sx={{ 
                    color: theme.palette.secondary.main,
                    letterSpacing: 2,
                    fontWeight: 600,
                    mb: 1
                  }}
                >
                  WELCOME TO MY PORTFOLIO
                </Typography>
                
                <Typography 
                  variant="h2" 
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3,
                    letterSpacing: '-0.5px',
                    lineHeight: 1.2,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -12,
                      left: { xs: '50%', md: 0 },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      width: '80px',
                      height: '4px',
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      borderRadius: '4px',
                    }
                  }}
                >
                  Tayyab Irfan Aziz
                </Typography>
                
                <Typography 
                  variant="h5" 
                  component="p"
                  color="primary"
                  sx={{ 
                    fontWeight: 500,
                    mb: 3,
                    opacity: 0.9
                  }}
                >
                  Web Developer | Software Engineer
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: alpha(theme.palette.text.primary, 0.9),
                  }}
                >
                  A passionate Computer Science student with expertise in multiple programming languages
                  and frameworks. I specialize in creating efficient, innovative software solutions and 
                  impactful web applications with modern technologies.
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' } 
                }}>
                  <Button 
                    variant="contained" 
                    component={RouterLink}
                    to="/projects"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontWeight: 600,
                      borderRadius: '50px',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.dark, 0.8)})`,
                      boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.5)}`,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.6)}`,
                      }
                    }}
                  >
                    View Projects
                  </Button>
                  
                  <Button 
                    variant="outlined" 
                    component={RouterLink}
                    to="/contact"
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontWeight: 600,
                      borderRadius: '50px',
                      borderWidth: '2px',
                      borderColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.main,
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderWidth: '2px',
                        transform: 'translateY(-3px)',
                        boxShadow: `0 4px 12px ${alpha(theme.palette.secondary.main, 0.3)}`,
                        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                      }
                    }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Grid>
        </Grid>
        
        {/* Feature cards */}
        <Grid container spacing={3} sx={{ mt: { xs: 6, md: 10 } }}>
          {featureCards.map((card, index) => (
            <Grid item xs={12} md={4} key={card.title}>
              <Fade 
                in={isLoaded} 
                style={{ transitionDelay: isLoaded ? `${card.delay}ms` : '0ms' }}
              >
                <Card 
                  elevation={0}
                  sx={{
                    height: '100%',
                    background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.default, 0.8)})`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                    borderRadius: theme.shape.borderRadius * 2,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: `0 12px 28px ${alpha(theme.palette.common.black, 0.2)}`,
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                      '& .card-content': {
                        background: index % 2 === 0 
                          ? `linear-gradient(145deg, ${alpha(theme.palette.primary.main, 0.08)}, transparent)`
                          : `linear-gradient(145deg, ${alpha(theme.palette.secondary.main, 0.08)}, transparent)`,
                      }
                    },
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: index % 2 === 0 
                        ? `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`
                        : `linear-gradient(90deg, ${theme.palette.secondary.main}, transparent)`,
                    }
                  }}
                >
                  <CardContent 
                    className="card-content"
                    sx={{ 
                      p: 4,
                      transition: 'all 0.3s',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <Box 
                      sx={{ 
                        mb: 2.5,
                        p: 1.5,
                        borderRadius: '50%',
                        backgroundColor: alpha(
                          index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main, 
                          0.1
                        ),
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: 'all 0.3s',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(5deg)',
                          backgroundColor: alpha(
                            index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main, 
                            0.2
                          ),
                        }
                      }}
                    >
                      {card.icon}
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      component="h3"
                      sx={{ 
                        mb: 2,
                        fontWeight: 600,
                        color: index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main
                      }}
                    >
                      {card.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1"
                      sx={{ 
                        color: alpha(theme.palette.text.primary, 0.8),
                        lineHeight: 1.7
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Global animations */}
      <style jsx="true">{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float0 {
          0%, 100% { transform: translate(70px, -40px); }
          50% { transform: translate(90px, -30px); }
        }
        
        @keyframes float1 {
          0%, 100% { transform: translate(70px, 80px); }
          50% { transform: translate(90px, 70px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(-70px, 80px); }
          50% { transform: translate(-90px, 70px); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(-70px, -40px); }
          50% { transform: translate(-90px, -30px); }
        }
        
        .profile-image {
          animation: pulse 4s infinite ease-in-out;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(111, 189, 203, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(111, 189, 203, 0); }
          100% { box-shadow: 0 0 0 0 rgba(111, 189, 203, 0); }
        }
      `}</style>
    </Box>
  );
};

// Helper function to position chips around avatar
const getChipPosition = (index) => {
  const positions = [
    { top: '10%', right: '5%' },     // Top right
    { bottom: '10%', right: '5%' },  // Bottom right
    { bottom: '10%', left: '5%' },   // Bottom left 
    { top: '10%', left: '5%' }       // Top left
  ];
  
  return positions[index % positions.length];
};

export default Home;