import React from 'react';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';

const GetInTouch = () => {
  return (
    <Box component="div" id="portfolio" pt={23} pb={20}>
      <Container maxWidth="xl">
        <Grid container spacing={3} display="flex" justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            bgcolor="secondary.contrastText"
            borderRadius={2}
            textAlign="center"
            boxShadow={'0px 10px 80px 0px #0000004f'}
          >
            <Box component="div" py={5}>
              <SectionTitle subtitle="Get In Touch" />
              <Typography variant="h2" component="h2">
                mamunben7@gmail.com
              </Typography>
              <Box
                component="div"
                py={3}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="a" component="a" href="/">
                  <Avatar
                    sx={{
                      mr: 1,
                      bgcolor: 'secondary.contrastText',
                      color: 'primary.dark',
                      boxShadow: '0px 1px 20px -3px #0000004f',
                    }}
                  >
                    <i className="lab la-facebook-f"></i>
                  </Avatar>
                </Typography>
                <Avatar
                  sx={{
                    mr: 1,
                    bgcolor: 'secondary.contrastText',
                    color: 'primary.dark',
                    boxShadow: '0px 1px 20px -3px #0000004f',
                  }}
                >
                  <i className="lab la-linkedin-in"></i>
                </Avatar>
                <Avatar
                  sx={{
                    mr: 1,
                    bgcolor: 'secondary.contrastText',
                    color: 'primary.dark',
                    boxShadow: '0px 1px 20px -3px #0000004f',
                  }}
                >
                  <i className="lab la-youtube"></i>
                </Avatar>
                <Avatar
                  sx={{
                    mr: 1,
                    bgcolor: 'secondary.contrastText',
                    color: 'primary.dark',
                    boxShadow: '0px 1px 20px -3px #0000004f',
                  }}
                >
                  <i className="lab la-twitter"></i>
                </Avatar>
                <Avatar
                  sx={{
                    mr: 1,
                    bgcolor: 'secondary.contrastText',
                    color: 'primary.dark',
                    boxShadow: '0px 1px 20px -3px #0000004f',
                  }}
                >
                  <i className="lab la-snapchat-ghost"></i>
                </Avatar>
                <Avatar
                  sx={{
                    mr: 1,
                    bgcolor: 'secondary.contrastText',
                    color: 'primary.dark',
                    boxShadow: '0px 1px 20px -3px #0000004f',
                  }}
                >
                  <i className="lab la-instagram"></i>
                </Avatar>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetInTouch;
