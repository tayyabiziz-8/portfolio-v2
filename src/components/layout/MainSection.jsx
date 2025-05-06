// src/components/layout/MainSection.jsx
import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { usePageTitle } from '../../context/PageTitleContext';

const MainSection = ({ children }) => {
  const { pageTitle } = usePageTitle();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const titleRef = useRef(null);
  
  // Animate page title on mount
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-title');
    }
    
    return () => {
      if (titleRef.current) {
        titleRef.current.classList.remove('animate-title');
      }
    };
  }, [pageTitle]);

  return (
    <Box 
      component="main" 
      sx={{ 
        flexGrow: 1, 
        p: { xs: 2, sm: 3, md: 4 },
        width: { sm: `calc(100% - 280px)` },
        minHeight: 'calc(100vh - 128px)', // Subtracting header and footer height
        background: `linear-gradient(145deg, ${alpha(theme.palette.background.default, 0.97)}, ${alpha(theme.palette.background.paper, 0.97)})`,
        position: 'relative',
        overflow: 'hidden',
        // Add subtle patterns to background
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(111, 189, 203, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(216, 171, 111, 0.05) 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          pointerEvents: 'none',
          zIndex: -1,
        },
        // Add glow effect
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          opacity: 0.6,
          zIndex: -1,
          animation: 'float 20s infinite alternate ease-in-out',
        },
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          pt: { xs: 2, sm: 4, md: 6 },
          pb: { xs: 4, sm: 6, md: 8 },
        }}
      >
        {pageTitle && (
          <Typography 
            ref={titleRef}
            variant="h3" 
            component="h1" 
            align="center" 
            sx={{ 
              mt: { xs: 2, sm: 3, md: 4 }, 
              mb: { xs: 3, sm: 4, md: 5 },
              position: 'relative',
              fontWeight: 700,
              backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.5px',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                width: '80px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: '4px',
                transform: 'translateX(-50%)',
                transition: 'width 0.5s ease',
              },
              '&:hover::after': {
                width: '120px',
              },
              // Add subtle text shadow
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            }}
            className="page-title"
          >
            {pageTitle}
          </Typography>
        )}
        
        <Box 
          className="content-container"
          sx={{
            position: 'relative',
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
            animation: 'fadeIn 0.8s ease-out forwards',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            },
            // Add subtle border to content area on desktop
            ...(isMobile ? {} : {
              p: 4,
              borderRadius: theme.shape.borderRadius * 2,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
              backdropFilter: 'blur(8px)',
              background: alpha(theme.palette.background.paper, 0.6),
            })
          }}
        >
          {children}
        </Box>
      </Container>
      
      {/* Floating decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.08)} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          opacity: 0.5,
          zIndex: 0,
          animation: 'floatReverse 15s infinite alternate ease-in-out',
        }}
      />
      
      {/* Global animations */}
      <style jsx="true">{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, 20px) rotate(5deg); }
          100% { transform: translate(30px, -20px) rotate(-5deg); }
        }
        
        @keyframes floatReverse {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, -20px) rotate(-5deg); }
          100% { transform: translate(-30px, 20px) rotate(5deg); }
        }
        
        .animate-title {
          animation: titleReveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        @keyframes titleReveal {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .page-title {
          position: relative;
          overflow: hidden;
        }
        
        .page-title::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </Box>
  );
};

export default MainSection;