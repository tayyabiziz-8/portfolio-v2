// src/pages/Projects.jsx
import React, { useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Projects');
    // Cleanup function
    return () => {};
  }, [setPageTitle]);

  // Projects data
  const projectsData = [
    {
      id: 1,
      title: 'Chess',
      description: 'PvP chess with console display and mouse controls.'
    },
    {
      id: 2,
      title: 'BudgetRep',
      description: 'An android app that manages finances on monthly basis.'
    },
    {
      id: 3,
      title: 'Distributed Dictionary',
      description: 'Merge all nodes holding partial dictionary of key-value pairs.'
    },
    {
      id: 4,
      title: 'Paint App',
      description: 'MS Paint inspired editor using C++ OpenCV library.'
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'A weather forecasting app using OpenWeather API.'
    },
    {
      id: 6,
      title: 'Chest X-Ray Analyzer',
      description: 'Classifies an x-ray image to one of the labeled diseases.'
    },
    {
      id: 7,
      title: 'Text Editor',
      description: 'A Vim-inspired text editor for fast text manipulation.'
    },
    {
      id: 8,
      title: 'Library/Bookstore DBMS',
      description: 'A database management system for libraries/bookstores.'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={3}>
        {projectsData.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;