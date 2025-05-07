import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  IconButton, 
  Divider, 
  Tooltip,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Social media links
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <LinkedInIcon />, 
      url: 'https://linkedin.com/in/yourprofile',
      color: '#0A66C2' 
    },
    { 
      name: 'GitHub', 
      icon: <GitHubIcon />, 
      url: 'https://github.com/yourusername',
      color: '#f5f5f5' 
    },
    { 
      name: 'Email', 
      icon: <EmailIcon />, 
      url: 'mailto:your.email@example.com',
      color: '#EA4335' 
    },
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        mt: 'auto',
        background: `linear-gradient(to top, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
        borderTop: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          {/* Social Links */}
          <Grid item xs={12} sm={4} sx={{ textAlign: isMobile ? 'center' : 'left' }}>
            <Typography variant="subtitle1" sx={{ mb: 1, color: theme.palette.text.secondary }}>
              Connect
            </Typography>
            <Box>
              {socialLinks.map((link) => (
                <Tooltip key={link.name} title={link.name} arrow placement="top">
                  <IconButton 
                    aria-label={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mr: 1,
                      color: theme.palette.text.primary,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: link.color,
                        transform: 'translateY(-3px)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    {link.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Typography 
              variant="body2" 
              color="text.primary"
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5
              }}
            >
              © {currentYear} Tayyab Irfan Aziz
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ mt: 0.5, fontSize: '0.75rem', opacity: 0.8 }}
            >
              All rights reserved
            </Typography>
          </Grid>

          {/* Made with */}
          <Grid item xs={12} sm={4} sx={{ textAlign: isMobile ? 'center' : 'right' }}>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: isMobile ? 'center' : 'flex-end',
                gap: 0.5 
              }}
            >
              Made with 
              <CodeIcon sx={{ fontSize: 16, color: theme.palette.primary.light }} />
              and
              <FavoriteIcon sx={{ fontSize: 16, color: theme.palette.secondary.light }} />
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mt: 0.5, 
                fontSize: '0.75rem', 
                opacity: 0.8,
                color: theme.palette.primary.light 
              }}
            >
              React & Material UI
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2, opacity: 0.2 }} />
        
        {/* Bottom footer text */}
        <Typography 
          variant="caption" 
          color="text.secondary" 
          align="center"
          component="p"
          sx={{ 
            display: 'block',
            textAlign: 'center',
            opacity: 0.6,
            mt: 1,
            '&:hover': {
              opacity: 1,
              color: theme.palette.primary.light
            },
            transition: 'all 0.3s ease'
          }}
        >
          Thanks for visiting my portfolio
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;