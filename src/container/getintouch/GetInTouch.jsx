import React from 'react';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';

const GetInTouch = () => {
  return (
    <Box
      component="div"
      className="getintouch"
      py={{ xs: '150px', sm: '200px' }}
      bgcolor="secondary.light"
    >
      <Container maxWidth="xl">
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid
            item
            xs={12}
            sm={10}
            md={8}
            lg={6}
            bgcolor="secondary.contrastText"
            borderRadius={2}
            textAlign="center"
            boxShadow={'0px 10px 80px 0px #0000004f'}
          >
            <Box component="div" py={5} className="getintouchin">
              <SectionTitle subtitle="Get In Touch" />
              <Typography
                variant="h4"
                fontSize={{ xs: 25, md: 30 }}
                mt={-3}
                mb={3}
              >
                mamunben7@gmail.com
              </Typography>
              <Box
                component="div"
                py={3}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {socialData.map((social) => {
                  return (
                    <Typography
                      key={social.title}
                      component={'a'}
                      href={social.link}
                    >
                      <IconButton
                        size="large"
                        color="primary"
                        sx={{
                          boxShadow: '0px 1px 20px -3px #0000004f',
                          mr: 1,
                          transition: '0.3s',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                          },
                        }}
                      >
                        <i className={social.icon}></i>
                      </IconButton>
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetInTouch;

const socialData = [
  {
    title: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100056767370124',
    icon: 'lab la-facebook-f',
  },
  {
    title: 'instagram',
    link: '/',
    icon: 'lab la-instagram',
  },
  {
    title: 'twitter',
    link: '/',
    icon: 'lab la-twitter',
  },
  {
    title: 'linkedin',
    link: '/',
    icon: 'lab la-linkedin',
  },
  {
    title: 'stack overflow',
    link: '/',
    icon: 'lab la-stack-overflow',
  },
];
