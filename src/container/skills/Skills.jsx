import React from 'react';
import {
  Box,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';
import CustomTab from '../../components/CustomTab';

const Skills = () => {
  return (
    <Box
      className="skillbg"
      component="div"
      id="skills"
      py={12}
      bgcolor="secondary.light"
    >
      <Container maxWidth="xl">
        <SectionTitle title="About Me" subtitle="My Skills" />
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={0} display="flex" justifyContent={'center'}>
          <Grid item xs={12} md={9}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Box component="div" position="relative">
                  <CardMedia
                    alt="Header logo"
                    component="img"
                    image="/about.svg"
                  />
                  <Box
                    component="div"
                    p={{ xs: 1, md: 2, lg: 3 }}
                    bgcolor="primary.main"
                    color="primary.contrastText"
                    position="absolute"
                    textAlign="center"
                    left={{ xs: 10, lg: -30 }}
                    bottom={{ xs: 20, md: 30, lg: 40 }}
                    width={{ xs: 150, md: 200 }}
                    height={{ xs: 150, md: 200 }}
                    borderRadius={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Typography
                      variant="h4"
                      fontSize={{ xs: 20, md: 30, lg: 40 }}
                    >
                      3 <br />
                      Years Experience
                    </Typography>
                    <Box component="div" mt={1}>
                      <Stack direction="row" spacing={0}>
                        <IconButton color="inherit" aria-label="facebook">
                          <i className="lab la-facebook-f"></i>
                        </IconButton>
                        <IconButton color="inherit" aria-label="twitter">
                          <i className="lab la-twitter"></i>
                        </IconButton>
                        <IconButton color="inherit" aria-label="linkedin">
                          <i className="lab la-linkedin-in"></i>
                        </IconButton>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTab />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
