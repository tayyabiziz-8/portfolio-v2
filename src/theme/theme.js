// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

// Enhanced theme with additional styling
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6fbdcb',
      light: '#8ee0ef',
      dark: '#0f3460',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d8ab6f',
      light: '#ffdc9f',
      dark: '#a67d45',
      contrastText: '#000000',
    },
    background: {
      default: '#1a1a2e',
      paper: '#16213e',
      card: 'linear-gradient(135deg, #1a1a2e, #16213e)',
      accent: '#0f3460',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#6fbdcb',
      accent: '#d8ab6f',
    },
    divider: 'rgba(111, 189, 203, 0.15)',
    action: {
      hover: 'rgba(111, 189, 203, 0.08)',
      selected: 'rgba(111, 189, 203, 0.16)',
    },
  },
  typography: {
    fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    h1: {
      fontWeight: 700,
      position: 'relative',
      marginBottom: '25px',
      letterSpacing: '0.5px',
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
      letterSpacing: '0.3px',
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
    h3: {
      fontWeight: 600,
      color: '#d8ab6f',
      marginBottom: '16px',
    },
    h4: {
      fontWeight: 500,
      color: '#e0e0e0',
    },
    subtitle1: {
      color: '#8ee0ef',
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#16213e',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
          transition: 'all 0.3s ease',
        },
        contained: {
          backgroundColor: '#6fbdcb',
          '&:hover': {
            backgroundColor: '#488be9',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 12px rgba(72, 139, 233, 0.25)',
          },
        },
        outlined: {
          borderColor: '#6fbdcb',
          color: '#6fbdcb',
          '&:hover': {
            borderColor: '#8ee0ef',
            backgroundColor: 'rgba(111, 189, 203, 0.08)',
          },
        },
        text: {
          color: '#6fbdcb',
          '&:hover': {
            backgroundColor: 'rgba(111, 189, 203, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
          color: 'white',
          border: '1px solid rgba(111, 189, 203, 0.3)',
          transition: 'all 0.3s',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
            borderColor: '#6fbdcb',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
          '&:last-child': {
            paddingBottom: '24px',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(111, 189, 203, 0.15)',
          color: '#6fbdcb',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'rgba(111, 189, 203, 0.25)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(224, 224, 224, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: '#6fbdcb',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6fbdcb',
            },
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#6fbdcb',
          position: 'relative',
          textDecoration: 'none',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '0',
            height: '2px',
            bottom: '-2px',
            left: '0',
            backgroundColor: '#6fbdcb',
            transition: 'width 0.3s ease',
          },
          '&:hover': {
            textDecoration: 'none',
            '&::after': {
              width: '100%',
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(111, 189, 203, 0.15)',
          margin: '16px 0',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:hover': {
            backgroundColor: 'rgba(111, 189, 203, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
        elevation4: {
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#0f3460',
          color: '#e0e0e0',
          fontSize: '12px',
          padding: '8px 12px',
          borderRadius: 4,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: '2px solid #6fbdcb',
        },
      },
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0, 0, 0, 0.1)',
    '0 4px 8px rgba(0, 0, 0, 0.12)',
    '0 8px 16px rgba(0, 0, 0, 0.14)',
    '0 12px 24px rgba(0, 0, 0, 0.16)',
    // ... fill in other shadow levels as needed
  ],
});

export default theme;