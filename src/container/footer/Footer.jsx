import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="div" py={5} bgcolor="primary.dark">
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }}>
            <Typography variant="h4" m={0} color="secondary.main">
              Mamun
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'right' }}>
            <Typography variant="p" component="p" m={0} color="secondary.main">
              &copy; 2022 Md. Al-Mamun. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
