// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';
import theme from './theme/theme';
import { PageTitleProvider } from './context/PageTitleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageTitleProvider>
          <App />
        </PageTitleProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);