import React from 'react';
import { Box, CardMedia, Container, Grid } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';

const Skills = () => {
  return (
    <Box component="div" id="skills" py={12}>
      <Container maxWidth="xxl">
        <SectionTitle title="About Me" subtitle="My Skills" />
      </Container>
      <Container maxWidth="xxl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CardMedia alt="Header logo" component="img" image="/about.jpg" />
          </Grid>
          <Grid item xs={12} md={6}>
            Content
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
