// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

// Custom theme based on your current CSS color scheme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6fbdcb',
      light: '#488be9',
      dark: '#0f3460',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d8ab6f',
      light: '#e0e0e0',
      dark: '#16213e',
      contrastText: '#000000',
    },
    background: {
      default: '#1a1a2e',
      paper: '#16213e',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#6fbdcb',
    },
  },
  typography: {
    fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    h1: {
      fontWeight: 700,
      position: 'relative',
      marginBottom: '25px',
      '&:hover': {
        color: '#6fbdcb',
        transition: 'color 0.4s',
      },
      '&:hover::after': {
        width: '100%',
        left: 0,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        width: '0%',
        height: '3px',
        backgroundColor: '#0dcaf0',
        transition: 'width 0.3s ease, left 0.3s ease',
      }
    },
    h2: {
      fontWeight: 600,
      position: 'relative',
      marginBottom: '25px',
      '&:hover': {
        color: '#6fbdcb',
        transition: 'color 0.4s',
      },
      '&:hover::after': {
        width: '100%',
        left: 0,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        width: '0%',
        height: '3px',
        backgroundColor: '#0dcaf0',
        transition: 'width 0.3s ease, left 0.3s ease',
      }
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#16213e',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#6fbdcb',
          '&:hover': {
            backgroundColor: '#488be9',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
          color: 'white',
          border: '2px solid #6fbdcb',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
            border: '2px solid #488be9',
          },
        },
      },
    },
  },
});

export default theme;