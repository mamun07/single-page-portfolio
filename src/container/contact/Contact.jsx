import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';

import CountUp from 'react-countup';

const Contact = () => {
  return (
    <>
      <Box
        component="div"
        id="contact"
        py={15}
        bgcolor={'primary.main'}
        mb={-20}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3} display="flex" justifyContent={'center'}>
            <Grid item xs={12} md={6}>
              <Box
                bgcolor="secondary.contrastText"
                borderRadius={2}
                textAlign="center"
                py={5}
                boxShadow={'0px 10px 40px 0px #0000004f'}
              >
                <SectionTitle title="Hire me for your awesome project" />
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => alert('Create a Contact form')}
                >
                  Contact Me
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="div" id="contact" py={20} bgcolor={'secondary.light'}>
        <Container maxWidth="xxl">
          <Grid container spacing={0} display="flex" justifyContent={'center'}>
            <Grid item xs={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                  <Box component="div" textAlign={'center'}>
                    <Typography variant="h2" color={'primary'}>
                      <CountUp start={0} end={153} duration={2.75} delay={2} />+
                    </Typography>
                    <Typography variant="h4">Complete Project</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Box component="div" textAlign={'center'}>
                    <Typography variant="h2" color={'primary'}>
                      <CountUp start={0} end={5} duration={2.75} delay={2} />+
                    </Typography>
                    <Typography variant="h4">In Processes</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Box component="div" textAlign={'center'}>
                    <Typography variant="h2" color={'primary'}>
                      <CountUp start={0} end={10} duration={2.75} delay={2} />+
                    </Typography>
                    <Typography variant="h4">Get Awards</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Box component="div" textAlign={'center'}>
                    <Typography variant="h2" color={'primary'}>
                      <CountUp start={0} end={982} duration={2.75} delay={2} />+
                    </Typography>
                    <Typography variant="h4">Happy Clients</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
