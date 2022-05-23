import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';

const Portfolio = () => {
  return (
    <Box
      component="div"
      id="portfolio"
      py={12}
      bgcolor={'secondary.contrastText'}
    >
      <Container maxWidth="xl">
        <SectionTitle title="Latest Work" subtitle="Portfolio" />
      </Container>
      <Container maxWidth="xl">
        <Typography variant="h2" textAlign={'center'}>
          Portfolio Area
        </Typography>
      </Container>
    </Box>
  );
};

export default Portfolio;
