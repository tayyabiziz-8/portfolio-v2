// src/components/ui/ProgressBar.jsx
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';

const ProgressBar = ({ value = 0, color = '#6fbdcb', height = 10, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Animate progress after component mounts with optional delay
    const timer = setTimeout(() => {
      setProgress(value);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return (
    <Box
      sx={{
        position: 'relative',
        height,
        width: '100%',
        borderRadius: height / 2,
        backgroundColor: alpha(color, 0.15),
        overflow: 'hidden',
        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: `${progress}%`,
          borderRadius: height / 2,
          background: `linear-gradient(90deg, ${color}, ${alpha(color, 0.7)})`,
          transition: 'width 1s cubic-bezier(0.65, 0, 0.35, 1)',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(
              90deg, 
              transparent, 
              rgba(255, 255, 255, 0.3), 
              transparent
            )`,
            transform: 'translateX(-100%)',
            animation: 'shimmer 2s infinite',
          }
        }}
      />
      
      <style jsx="true">{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default ProgressBar;