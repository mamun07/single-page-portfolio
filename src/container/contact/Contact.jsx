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
        mb={-20}
        bgcolor={'primary.main'}
        className="contactmainbg"
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
            display="flex"
            justifyContent={'center'}
            mb={-20}
          >
            <Grid item xs={12} md={8}>
              <Box
                bgcolor="secondary.contrastText"
                borderRadius={2}
                textAlign="center"
                py={8}
                boxShadow={'0px 10px 40px 0px #0000004f'}
                className="contactbg"
              >
                <SectionTitle title="Hire me for your awesome project" />
                <Button
                  variant="contained"
                  onClick={() => alert('Create a Contact form')}
                  sx={{
                    width: '200px',
                    height: '60px',
                    fontSize: '20px',
                    '&:hover': {
                      bgcolor: 'primary.main',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component="div"
        id="contact"
        pt={{ xs: '300px', lg: '350px' }}
        pb={{ xs: '100px', lg: '150px' }}
      >
        <Container maxWidth="xxl">
          <Grid container spacing={0} display="flex" justifyContent={'center'}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                {projectsuccess.map((project, i) => {
                  return (
                    <Grid item xs={6} sm={3} key={i}>
                      <Box component="div" textAlign={'center'}>
                        <Typography
                          variant="subtitle1"
                          color={'primary'}
                          fontSize={{ xs: 30, sm: 50, md: 60, lg: 80 }}
                          fontWeight={300}
                        >
                          <CountUp
                            start={0}
                            end={project.amount}
                            duration={2.75}
                            delay={1}
                          />
                          +
                        </Typography>
                        <Typography
                          variant="h6"
                          fontSize={{ xs: 14, sm: 15, md: 20 }}
                        >
                          {project.title}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;

const projectsuccess = [
  {
    title: 'Complete Project',
    amount: '153',
  },
  {
    title: 'In Processes',
    amount: '5',
  },
  {
    title: 'Get Awards',
    amount: '13',
  },
  {
    title: 'Happy Clients',
    amount: '982',
  },
];
