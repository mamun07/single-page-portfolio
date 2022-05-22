import React from 'react';
import {
  Box,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';

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
      zIndex={1}
    >
      <Container maxWidth="xxl">
        <Grid spacing={3} container>
          <Grid
            item
            lg={1}
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
          <Grid item sm={10} lg={11} xs={8}>
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
                  <MapIcon />
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
                    <EmailIcon />
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
                    <LocalPhoneIcon />
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
