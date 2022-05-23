import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';
import InfoCard from '../../components/InfoCard';

const Intro = () => {
  const cartinfo = [
    {
      title: 'React Developer',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
    {
      title: 'Node Developer',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
    {
      title: 'MongoDB Developer',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
  ];

  return (
    <Box component="div" id="intro" py={12} bgcolor={'secondary.light'}>
      <Container maxWidth="xl">
        <SectionTitle title="What I Do" subtitle="Service" />
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={3} display="flex" justifyContent="center">
          {cartinfo.map((card, i) => {
            return (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <InfoCard title={card.title} des={card.descriptions} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
