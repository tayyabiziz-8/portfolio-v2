// src/components/ui/ProgressBar.jsx
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Custom animated progress bar component with label and percentage
 * @param {object} props Component props
 * @param {string} props.label Text label for the progress bar
 * @param {number} props.value Percentage value (0-100)
 * @param {string} props.color MUI color name (primary, secondary, success, etc.)
 * @param {object} props.sx Additional sx props for styling
 */
const ProgressBar = ({ label, value, color = 'primary', sx, showPercentage = true }) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 2, ...sx }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant="body2" fontWeight="medium">
          {label}
        </Typography>
        {showPercentage && (
          <Typography variant="body2" color="text.secondary">
            {value}%
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          height: 8,
          width: '100%',
          backgroundColor: theme.palette.grey[300],
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          className="progress-animate"
          sx={{
            position: 'absolute',
            height: '100%',
            borderRadius: 4,
            backgroundColor: theme.palette[color]?.main || color,
            width: `${value}%`,
            transition: 'width 1.5s ease-in-out',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundImage: `linear-gradient(
                -45deg,
                rgba(255, 255, 255, 0.2) 25%,
                transparent 25%,
                transparent 50%,
                rgba(255, 255, 255, 0.2) 50%,
                rgba(255, 255, 255, 0.2) 75%,
                transparent 75%,
                transparent
              )`,
              backgroundSize: '25px 25px',
              opacity: 0.5,
              animation: 'move 2s linear infinite',
              zIndex: 1,
            }
          }}
        />
      </Box>
    </Box>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
  sx: PropTypes.object,
  showPercentage: PropTypes.bool
};

export default ProgressBar;