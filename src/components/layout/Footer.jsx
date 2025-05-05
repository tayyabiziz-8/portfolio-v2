// src/components/layout/Footer.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto', 
        backgroundColor: theme.palette.secondary.dark,
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="body2" 
          color="text.primary" 
          align="center"
        >
          © {currentYear} Tayyab Irfan Aziz. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;