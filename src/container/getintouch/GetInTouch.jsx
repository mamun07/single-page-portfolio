import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';

const GetInTouch = () => {
  return (
    <Box
      component="div"
      id="portfolio"
      py={12}
      bgcolor={'secondary.contrastText'}
    >
      <Container maxWidth="xl">
        <SectionTitle subtitle="Get In Touch" />
      </Container>
      <Container maxWidth="xl">
        <Typography variant="h2" textAlign={'center'}>
          GetInTouch Email
        </Typography>
      </Container>
    </Box>
  );
};

export default GetInTouch;
