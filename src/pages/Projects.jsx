// src/pages/Projects.jsx
import React, { useEffect, useState } from 'react';
import { Grid, Container, CircularProgress, Alert } from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import ProjectCard from '../components/ui/ProjectCard';
import projectService from '../services/projectService';

const Projects = () => {
  const { setPageTitle } = usePageTitle();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPageTitle('Projects');
    
    // Fetch projects from the API
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await projectService.getAllProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
        // Fallback to sample data in case of error
        setProjects(fallbackProjectsData);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    
    // Cleanup function
    return () => {};
  }, [setPageTitle]);

  // Fallback projects data in case API fails
  const fallbackProjectsData = [
    {
      _id: 1,
      title: 'Chess',
      description: 'PvP chess with console display and mouse controls.'
    },
    {
      _id: 2,
      title: 'BudgetRep',
      description: 'An android app that manages finances on monthly basis.'
    },
    {
      _id: 3,
      title: 'Distributed Dictionary',
      description: 'Merge all nodes holding partial dictionary of key-value pairs.'
    },
    {
      _id: 4,
      title: 'Paint App',
      description: 'MS Paint inspired editor using C++ OpenCV library.'
    },
    {
      _id: 5,
      title: 'Weather App',
      description: 'A weather forecasting app using OpenWeather API.'
    },
    {
      _id: 6,
      title: 'Chest X-Ray Analyzer',
      description: 'Classifies an x-ray image to one of the labeled diseases.'
    },
    {
      _id: 7,
      title: 'Text Editor',
      description: 'A Vim-inspired text editor for fast text manipulation.'
    },
    {
      _id: 8,
      title: 'Library/Bookstore DBMS',
      description: 'A database management system for libraries/bookstores.'
    }
  ];

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project._id || project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;