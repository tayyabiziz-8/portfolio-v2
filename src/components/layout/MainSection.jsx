// src/components/layout/MainSection.jsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';

const MainSection = ({ children }) => {
  const { pageTitle } = usePageTitle();

  return (
    <Box 
      component="main" 
      sx={{ 
        flexGrow: 1, 
        p: { xs: 2, sm: 3 },
        width: { sm: `calc(100% - 280px)` },
        minHeight: 'calc(100vh - 128px)' // Subtracting header and footer height
      }}
    >
      <Container maxWidth="lg">
        {pageTitle && (
          <Typography 
            variant="h4" 
            component="h1" 
            align="center" 
            sx={{ 
              mt: 3, 
              mb: 4,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                width: '50px',
                height: '3px',
                backgroundColor: 'primary.main',
                transform: 'translateX(-50%)',
              }
            }}
            className="fade-in"
          >
            {pageTitle}
          </Typography>
        )}
        <Box className="scale-in">
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default MainSection;