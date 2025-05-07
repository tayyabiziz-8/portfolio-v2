import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Chip,
  Divider,
  Avatar,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const EducationCard = ({ 
  degree, 
  institution, 
  year, 
  location, 
  description, 
  gpa, 
  achievements = [],
  logo
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: `0 15px 30px rgba(0, 0, 0, 0.15)`,
        transition: 'all 0.4s ease',
        position: 'relative',
        height: '100%',
        overflow: 'visible',
        '&:hover': {
          transform: 'translateY(-10px) scale(1.02)',
          boxShadow: `0 20px 35px rgba(0, 0, 0, 0.25)`,
          borderColor: theme.palette.primary.main,
          '& .education-icon': {
            transform: 'rotate(10deg) scale(1.1)',
            backgroundColor: theme.palette.primary.main,
          }
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '5px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        }
      }}
      className="edu-card"
    >
      {/* Education Icon Floating Element */}
      <Box 
        className="education-icon"
        sx={{
          position: 'absolute',
          top: '-20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: theme.palette.secondary.main,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.4s ease',
          zIndex: 1
        }}
      >
        <SchoolIcon sx={{ fontSize: '28px', color: theme.palette.secondary.contrastText }} />
      </Box>

      <CardContent sx={{ p: 3, pt: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, gap: 2 }}>
          {logo && (
            <Avatar 
              src={logo} 
              alt={institution} 
              variant="rounded"
              sx={{ 
                width: 56, 
                height: 56,
                border: `2px solid ${theme.palette.divider}`,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                mr: 2
              }}
            />
          )}
          
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h5" 
              component="div" 
              fontWeight="bold" 
              sx={{ 
                mb: 0.5,
                background: `linear-gradient(90deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              {degree}
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 1, 
                color: theme.palette.text.secondary,
                fontWeight: 500
              }}
            >
              {institution}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          gap: 2,
          mb: 2,
          flexWrap: 'wrap'
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            color: theme.palette.text.secondary
          }}>
            <CalendarTodayIcon sx={{ fontSize: '0.9rem' }} />
            <Typography variant="body2">{year}</Typography>
          </Box>
          
          {location && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              color: theme.palette.text.secondary
            }}>
              <LocationOnIcon sx={{ fontSize: '0.9rem' }} />
              <Typography variant="body2">{location}</Typography>
            </Box>
          )}
          
          {gpa && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              color: theme.palette.text.secondary
            }}>
              <WorkspacePremiumIcon sx={{ fontSize: '0.9rem' }} />
              <Typography variant="body2">GPA: {gpa}</Typography>
            </Box>
          )}
        </Box>
        
        {description && (
          <>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 2,
                color: theme.palette.text.secondary,
                lineHeight: 1.6
              }}
            >
              {description}
            </Typography>
            
            <Divider sx={{ mb: 2, opacity: 0.6 }} />
          </>
        )}
        
        {achievements.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography 
              variant="subtitle2" 
              sx={{ 
                mb: 1, 
                color: theme.palette.primary.light,
                fontWeight: 600
              }}
            >
              Key Achievements
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {achievements.map((achievement, index) => (
                <Chip 
                  key={index}
                  label={achievement}
                  size="small"
                  sx={{
                    backgroundColor: `${theme.palette.primary.dark}30`,
                    color: theme.palette.primary.light,
                    border: `1px solid ${theme.palette.primary.dark}50`,
                    '&:hover': {
                      backgroundColor: `${theme.palette.primary.dark}50`,
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default EducationCard;