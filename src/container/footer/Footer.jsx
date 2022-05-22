import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="div">
      <Box
        component="div"
        bgcolor={'secondary.main'}
        color={'primary.contrastText'}
        py={5}
        textAlign={'center'}
      >
        <Container maxWidth="xxl">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography variant="h3" component="h3">
                Left Widget
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h3" component="h3">
                Center Widget
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h3" component="h3">
                Right Widget
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component="div"
        bgcolor={'secondary.dark'}
        color={'primary.contrastText'}
        py={3}
      >
        <Container maxWidth="xxl">
          <Typography variant="p" component={'p'}>
            &copy; 2022 Md. Al-Mamun. All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
