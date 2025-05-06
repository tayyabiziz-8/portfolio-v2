// src/components/ui/ProjectCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box, Chip, IconButton, CardActions } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({ 
  title, 
  description, 
  technologies = [], 
  imageUrl, 
  projectUrl, 
  githubUrl 
}) => {
  const theme = useTheme();

  return (
    <Card 
      elevation={4} 
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.background.card,
        border: '1px solid rgba(111, 189, 203, 0.3)',
        transition: 'all 0.3s',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
          borderColor: theme.palette.primary.main,
        },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '&:hover::before': {
          opacity: 1,
        }
      }}
      className="project-card"
    >
      {imageUrl && (
        <Box 
          sx={{ 
            height: 180, 
            overflow: 'hidden',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '30%',
              background: 'linear-gradient(transparent, rgba(26, 26, 46, 0.8))',
            }
          }}
        >
          <img 
            src={imageUrl} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.5s',
            }}
            className="project-image"
          />
        </Box>
      )}
      
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography 
          gutterBottom 
          variant="h3" 
          component="div"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: theme.palette.text.primary,
            mb: 2,
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -5,
              left: 0,
              width: '40px',
              height: '3px',
              backgroundColor: theme.palette.primary.main,
              transition: 'width 0.3s ease',
            },
            '&:hover::after': {
              width: '100%',
            }
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.primary"
          sx={{ 
            mb: 3, 
            lineHeight: 1.7,
            opacity: 0.85,
            transition: 'opacity 0.3s',
            '&:hover': {
              opacity: 1
            }
          }}
        >
          {description}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
          {technologies.map((tech, index) => (
            <Chip 
              key={index} 
              label={tech} 
              size="small"
              sx={{
                backgroundColor: 'rgba(111, 189, 203, 0.15)',
                color: theme.palette.primary.light,
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(111, 189, 203, 0.25)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            />
          ))}
        </Box>
      </CardContent>
      
      {(projectUrl || githubUrl) && (
        <CardActions sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          p: 2,
          borderTop: `1px solid ${theme.palette.divider}`
        }}>
          {projectUrl && (
            <IconButton 
              size="small" 
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit project"
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  color: theme.palette.primary.light,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              <LinkIcon />
            </IconButton>
          )}
          {githubUrl && (
            <IconButton 
              size="small" 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View code on GitHub"
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  color: theme.palette.primary.light,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              <GitHubIcon />
            </IconButton>
          )}
        </CardActions>
      )}
    </Card>
  );
};

export default ProjectCard;