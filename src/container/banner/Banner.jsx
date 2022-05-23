import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Buttons from '../../components/Buttons';

const Banner = () => {
  return (
    <Box component="div" py={8}>
      <Box
        component="div"
        sx={{
          backgroundImage: `url("./image/bannerbg.svg")`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        py={20}
      >
        <Container maxWidth="xl">
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <Box component="div">
                <Typography variant="h3" component="h3" color="primary.main">
                  HELLO
                </Typography>
                <Box component="div" mb={4}>
                  <Typography variant="h1" component="h1" fontWeight={'900'}>
                    I'm{' '}
                    <Box
                      component="span"
                      color="primary.main"
                      fontWeight={'900'}
                    >
                      Noto
                    </Box>
                  </Typography>
                  <Typography variant="h1" component="h1">
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
