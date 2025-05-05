// src/pages/Contact.jsx
import React, { useEffect } from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { usePageTitle } from '../context/PageTitleContext';
import ContactForm from '../components/ui/ContactForm';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  const theme = useTheme();
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Contact');
    // Cleanup function
    return () => {};
  }, [setPageTitle]);

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      {/* Contact Form */}
      <ContactForm />
      
      {/* Social Media Links */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Connect With Me
        </Typography>
        
        <Stack 
          direction="row" 
          spacing={3} 
          justifyContent="center" 
          sx={{ mt: 2 }}
        >
          <IconButton
            aria-label="GitHub"
            href="https://github.com/tayyabiziz-8"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#333',
              color: 'white',
              width: 50,
              height: 50,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                backgroundColor: '#342238',
                transform: 'scale(1.1)',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }
            }}
            className="social-btn btn-github"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          
          <IconButton
            aria-label="LinkedIn"
            href="https://linkedin.com/in/tayyab-aziz-34807528a"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#0077b5',
              color: 'white',
              width: 50,
              height: 50,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                backgroundColor: '#005582',
                transform: 'scale(1.1)',
                boxShadow: '0 0 10px rgba(0, 119, 181, 0.5)',
              }
            }}
            className="social-btn btn-linkedin"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default Contact;