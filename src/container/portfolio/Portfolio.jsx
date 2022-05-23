import React from 'react';
import { Box, Container } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';

import CustomMesonary from '../../components/CustomMesonary';

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
        <CustomMesonary />
      </Container>
    </Box>
  );
};

export default Portfolio;
