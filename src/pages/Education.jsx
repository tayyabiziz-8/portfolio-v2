// src/pages/Education.jsx
import React, { useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';
import EducationCard from '../components/ui/EducationCard';

const Education = () => {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Education');
    // Cleanup function
    return () => {};
  }, [setPageTitle]);

  // Education data
  const educationData = [
    {
      id: 1,
      degree: 'B.Sc. in Computer Science',
      institution: 'Information Technology University',
      year: '2023 - 2027'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {educationData.map((edu) => (
          <Grid item xs={12} sm={8} md={6} lg={4} key={edu.id}>
            <EducationCard
              degree={edu.degree}
              institution={edu.institution}
              year={edu.year}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Education;