import React from 'react';
import { Box, CardMedia, Container, Grid } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';
import CustomTab from '../../components/CustomTab';

const Skills = () => {
  return (
    <Box className="line" component="div" id="skills" py={12}>
      <Container maxWidth="xl">
        <SectionTitle title="About Me" subtitle="My Skills" />
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={0} display="flex" justifyContent={'center'}>
          <Grid item xs={12} md={9}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  alt="Header logo"
                  component="img"
                  image="/about.svg"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTab />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
