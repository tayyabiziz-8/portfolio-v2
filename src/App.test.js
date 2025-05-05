// src/App.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import Header from './components/layout/Header';
import SideNav from './components/layout/SideNav';
import MainSection from './components/layout/MainSection';
import Footer from './components/layout/Footer';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onDrawerToggle={handleDrawerToggle} />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <SideNav mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
        <MainSection>
          <Suspense fallback={
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </Box>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </MainSection>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;