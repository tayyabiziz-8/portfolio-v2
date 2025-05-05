// src/components/ui/ProjectCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ProjectCard = ({ title, description }) => {
  const theme = useTheme();

  return (
    <Card 
      elevation={3} 
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
        color: 'white',
        border: `2px solid ${theme.palette.primary.main}`,
        transition: 'transform 0.3s, border 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          border: `2px solid ${theme.palette.primary.light}`,
        }
      }}
      className="project-card"
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;