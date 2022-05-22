import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url("./image/bannerbg.svg")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      py={30}
    >
      <Container maxWidth="xxl">
        <Grid container spacing={0}>
          <Grid item xs={12} md={5}>
            <Box component="div">
              <Typography
                variant="h2"
                component="h2"
                mb={0}
                fontWeight={'900'}
                color="primary.main"
              >
                HELLO
              </Typography>
              <Typography variant="h1" component="h1" mb={4} fontWeight={'900'}>
                I'm{' '}
                <Box component="span" color="primary.main" fontWeight={'900'}>
                  Mamun
                </Box>
                <br /> MERN Developer
              </Typography>
              <Typography variant="p" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                quas libero at adipisci animi fugiat dolorum, similique numquam
                facere iusto rem necessitatibus maxime, error excepturi.
              </Typography>
              <Box component="div" mt={5}>
                <Button
                  variant="contained"
                  sx={{ fontSize: 18, py: 3, px: 8, lineHeight: '18px', mr: 5 }}
                  href="#contact"
                >
                  Hire Me
                </Button>
                <Button
                  variant="outlined"
                  sx={{ fontSize: 18, py: 3, px: 8, lineHeight: '18px' }}
                  href="#portfolio"
                >
                  Portfolio
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
