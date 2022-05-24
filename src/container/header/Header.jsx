import React from 'react';
import {
  Box,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';

const Header = () => {
  return (
    <Box
      component="div"
      py={2}
      position="sticky"
      top={0}
      borderBottom={'1px solid'}
      borderColor={'primary.contrastText'}
      bgcolor={'secondary.contrastText'}
      zIndex={2}
    >
      <Container maxWidth="xl">
        <Grid spacing={3} container>
          <Grid
            item
            lg={1.5}
            sm={2}
            xs={4}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'flex-start'}
          >
            <Typography variant="a" component={'a'} href="/">
              <CardMedia alt="Header logo" component="img" image="/logo.svg" />
            </Typography>
          </Grid>
          <Grid item sm={10} lg={10.5} xs={8}>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-end'}
              flexDirection={'row'}
            >
              <Box
                variant="div"
                component="div"
                mx={2}
                display={{ md: 'flex', xs: 'none' }}
                alignItems={'center'}
              >
                <IconButton
                  size="large"
                  color="primary"
                  sx={{
                    border: '1px solid',
                    borderColor: 'primary.contrastText',
                  }}
                >
                  <i className="las la-map-marked"></i>
                </IconButton>
                <Typography variant="p" component="p" ml={2}>
                  Navana D.H. Tower, 6 Panthapath,
                  <br /> Karwan Bazar, Dhaka-1215
                </Typography>
              </Box>
              <Box
                variant="div"
                component="div"
                mx={2}
                display={{ md: 'flex', xs: 'none' }}
                alignItems={'center'}
              >
                <Typography
                  variant="a"
                  component={'a'}
                  href="mailto:mamunben7@gmail.com"
                >
                  <IconButton
                    size="large"
                    color="primary"
                    sx={{
                      border: '1px solid',
                      borderColor: 'primary.contrastText',
                    }}
                  >
                    <i className="las la-envelope"></i>
                  </IconButton>
                </Typography>
                <Typography variant="p" component="p" ml={2}>
                  mamunben7@gmail.com
                </Typography>
              </Box>
              <Box
                variant="div"
                component="div"
                mx={2}
                display={'flex'}
                alignItems={'center'}
              >
                <Typography variant="a" component={'a'} href="tel:01917632421">
                  <IconButton
                    size="large"
                    color="primary"
                    sx={{
                      border: '1px solid',
                      borderColor: 'primary.contrastText',
                    }}
                  >
                    <i className="las la-phone"></i>
                  </IconButton>
                </Typography>
                <Typography variant="p" component="p" ml={2}>
                  01917632421
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
