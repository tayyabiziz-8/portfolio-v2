// src/components/ui/ContactForm.jsx
import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Alert, 
  Paper,
  Stack,
  Typography,
  Slide,
  Fade,
  IconButton,
  CircularProgress
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';

const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      // Simulate form submission with artificial delay
      try {
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Here you would normally send the data to your backend
        console.log('Form submitted:', formData);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setSubmitted(true);
        setSubmitError(false);
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  // Custom input styles
  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      color: theme.palette.text.primary,
      backgroundColor: 'rgba(22, 33, 62, 0.5)',
      backdropFilter: 'blur(10px)',
      borderRadius: theme.shape.borderRadius,
      transition: 'all 0.3s ease',
      '& fieldset': {
        borderColor: 'rgba(111, 189, 203, 0.3)',
        transition: 'all 0.3s ease',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: '2px',
      },
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.secondary,
      transition: 'all 0.3s ease',
      '&.Mui-focused': {
        color: theme.palette.primary.main,
      },
    },
    '& .MuiFormHelperText-root': {
      color: theme.palette.error.main,
      fontWeight: 500,
      fontSize: '0.75rem',
      marginTop: '4px',
    },
    '&:hover': {
      transform: 'translateY(-2px)',
    },
    transition: 'transform 0.3s ease',
  };

  return (
    <Paper 
      elevation={4}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: { xs: 3, md: 4 },
        background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
        borderRadius: 2,
        border: '1px solid rgba(111, 189, 203, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${theme.palette.primary.dark}22, ${theme.palette.secondary.dark}11)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Fade in={true} timeout={800}>
        <Box>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            sx={{ 
              mb: 3, 
              color: theme.palette.primary.main,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -6,
                left: 0,
                width: '60px',
                height: '3px',
                backgroundColor: theme.palette.secondary.main,
                transition: 'width 0.3s ease',
              },
              '&:hover::after': {
                width: '100%',
              },
              fontWeight: 600,
            }}
          >
            Get In Touch
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4, 
              color: theme.palette.text.secondary,
              textAlign: 'center',
              maxWidth: '80%',
              mx: 'auto',
            }}
          >
            I'd love to hear from you! Feel free to reach out with any questions, opportunities, or just to say hello.
          </Typography>
        
          {submitted && (
            <Slide direction="down" in={submitted} mountOnEnter unmountOnExit>
              <Alert 
                severity="success" 
                sx={{ 
                  mb: 3,
                  backgroundColor: 'rgba(15, 52, 96, 0.8)',
                  color: theme.palette.primary.light,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  '& .MuiAlert-icon': {
                    color: theme.palette.primary.main,
                  },
                }}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => setSubmitted(false)}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                }
              >
                Thank you for your message! I'll get back to you soon.
              </Alert>
            </Slide>
          )}
          
          {submitError && (
            <Slide direction="down" in={submitError} mountOnEnter unmountOnExit>
              <Alert 
                severity="error" 
                sx={{ 
                  mb: 3,
                  backgroundColor: 'rgba(30, 20, 20, 0.8)',
                  color: '#ff6b6b',
                  borderLeft: '4px solid #ff6b6b',
                  '& .MuiAlert-icon': {
                    color: '#ff6b6b',
                  },
                }}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => setSubmitError(false)}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                }
              >
                There was an error submitting the form. Please try again.
              </Alert>
            </Slide>
          )}
          
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Box sx={{ position: 'relative' }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  error={!!errors.name}
                  helperText={errors.name}
                  required
                  InputProps={{
                    startAdornment: (
                      <PersonIcon 
                        sx={{ 
                          mr: 1, 
                          color: focused === 'name' ? theme.palette.primary.main : 'rgba(111, 189, 203, 0.6)',
                          transition: 'color 0.3s ease',
                        }} 
                      />
                    ),
                  }}
                  sx={inputStyles}
                />
              </Box>
              
              <Box sx={{ position: 'relative' }}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  error={!!errors.email}
                  helperText={errors.email}
                  required
                  InputProps={{
                    startAdornment: (
                      <EmailIcon 
                        sx={{ 
                          mr: 1, 
                          color: focused === 'email' ? theme.palette.primary.main : 'rgba(111, 189, 203, 0.6)',
                          transition: 'color 0.3s ease',
                        }} 
                      />
                    ),
                  }}
                  sx={inputStyles}
                />
              </Box>
              
              <Box sx={{ position: 'relative' }}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  error={!!errors.message}
                  helperText={errors.message}
                  required
                  InputProps={{
                    startAdornment: (
                      <MessageIcon 
                        sx={{ 
                          mr: 1, 
                          mt: 1,
                          color: focused === 'message' ? theme.palette.primary.main : 'rgba(111, 189, 203, 0.6)',
                          transition: 'color 0.3s ease',
                        }} 
                      />
                    ),
                  }}
                  sx={inputStyles}
                />
              </Box>
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  mt: 2,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  endIcon={loading ? null : <SendIcon />}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    borderRadius: '50px',
                    padding: '10px 32px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    boxShadow: '0 4px 14px rgba(111, 189, 203, 0.4)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(111, 189, 203, 0.5)',
                    },
                    '&:active': {
                      transform: 'translateY(-1px)',
                      boxShadow: '0 3px 10px rgba(111, 189, 203, 0.4)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                      transition: 'left 0.7s ease',
                    },
                    '&:hover::before': {
                      left: '100%',
                    },
                  }}
                >
                  {loading ? (
                    <CircularProgress 
                      size={24} 
                      sx={{ 
                        color: theme.palette.primary.contrastText,
                      }} 
                    />
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </Fade>
    </Paper>
  );
};

export default ContactForm;