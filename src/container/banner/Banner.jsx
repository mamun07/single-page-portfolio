import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Buttons from '../../components/Buttons';

const Banner = () => {
  return (
    <Box component="div" py={{ xs: 0, md: 5, lg: 8 }} id="banner">
      <Box
        component="div"
        sx={{
          backgroundImage: `url("./image/bannerbg.svg")`,
          backgroundPosition: {
            xs: 'bottom top',
            sm: 'bottom top',
            md: 'center center',
          },
          backgroundRepeat: 'no-repeat',
          backgroundSize: { xs: '400%', sm: '300%', md: '100%' },
        }}
        py={20}
      >
        <Container maxWidth="xl">
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <Box component="div">
                <Typography
                  variant="h4"
                  fontSize={{ xs: 20, md: 25, lg: 30 }}
                  color="primary.main"
                >
                  HELLO
                </Typography>
                <Box component="div" mb={{ xs: 2, md: 3, lg: 4 }}>
                  <Typography
                    variant="subtitle1"
                    fontSize={{ xs: 40, md: 70, lg: 90 }}
                    lineHeight={{ xs: '50px', md: '80px', lg: '90px' }}
                    fontWeight={900}
                    m={0}
                  >
                    I'm{' '}
                    <Box component="span" color="primary.main">
                      Mamun
                    </Box>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={{ xs: 40, md: 70, lg: 90 }}
                    lineHeight={{ xs: '50px', md: '80px', lg: '90px' }}
                    fontWeight={900}
                  >
                    MERN Developer
                  </Typography>
                </Box>
                <Typography variant="p" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  quas libero at adipisci animi fugiat dolorum, similique
                  numquam facere iusto rem necessitatibus maxime, error
                  excepturi.
                </Typography>
                <Box component="div" mt={10}>
                  <Buttons
                    label="Hire Me"
                    href="#contact"
                    styled="contained"
                    mr="40px"
                  />
                  <Buttons
                    label="Portfolio"
                    href="#portfolio"
                    styled="outlined"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
