// src/components/ui/EducationCard.jsx
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';

const EducationCard = ({ degree, institution, year }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: `0 15px 30px rgba(0, 255, 255, 0.1)`,
        transition: 'all 0.4s ease',
        position: 'relative',
        height: '100%',
        '&:hover': {
          transform: 'translateY(-10px) scale(1.02)',
          boxShadow: `0 20px 35px rgba(0, 255, 255, 0.3)`,
          border: '1px solid rgba(0, 255, 255, 0.3)',
        }
      }}
      className="edu-card"
    >
      <CardContent sx={{ p: 4 }}>
        <Typography 
          variant="h5" 
          component="div" 
          fontWeight="bold" 
          sx={{ mb: 2 }}
        >
          {degree}
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Institution:</strong> {institution}
        </Typography>
        
        <Typography variant="body1">
          <strong>Year:</strong> {year}
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          mt: 2 
        }}>
          <SchoolIcon 
            sx={{ 
              fontSize: '1.5rem', 
              color: theme.palette.primary.main 
            }} 
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default EducationCard;