import React from 'react';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';

const Skills = () => {
  return (
    <Box component="div" id="skills" py={12}>
      <Container maxWidth="xxl">
        <SectionTitle title="About Me" subtitle="My Skills" />
      </Container>
      <Container maxWidth="xxl">
        <Grid container spacing={0} display="flex" justifyContent={'center'}>
          <Grid item xs={12} md={9}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  alt="Header logo"
                  component="img"
                  image="/about.jpg"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" component="h3">
                  MERN Stack Developer
                </Typography>
                <Typography variant="p" component="p" mb={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, molestias iure modi laudantium molestiae eveniet beatae
                  repellat deserunt voluptatum optio, officiis
                </Typography>
                <Typography variant="p" component="p" mb={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, molestias iure modi laudantium molestiae eveniet beatae
                  repellat deserunt voluptatum optio, officiis, quibusdam odio
                  iste blanditiis maxime rerum nulla aliquam nisi quaerat soluta
                  laboriosam praesentium omnis facilis hic! Non tempora
                  excepturi ex fuga quia, necessitatibus nam in quaerat vero.
                  Inventore, accusamus!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
