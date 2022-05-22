import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';

const Intro = () => {
  return (
    <Box component="div" id="intro" py={12} bgcolor={'secondary.light'}>
      <Container maxWidth="xxl">
        <SectionTitle title="What I Do" subtitle="Service" />
      </Container>
      <Container maxWidth="xxl">
        <Grid container spacing={3} display="flex" justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                border: '1px solid',
                bgcolor: 'primary.main',
                color: 'secondary.contrastText',
                borderColor: 'primary.main',
                boxShadow: 'none',
                transition: '0.3s',
                p: 2,
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Box component="div" color={'#61dafb'} mb={3}>
                  <i className="lab la-4x la-react"></i>
                </Box>
                <Typography variant="h5" component="h5" mb={3}>
                  MERN Stack
                </Typography>
                <Typography variant="p" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima molestias quod reprehenderit
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                bgcolor: 'secondary.contrastText',
                border: '1px solid',
                borderColor: 'primary.contrastText',
                boxShadow: 'none',
                transition: '0.3s',
                p: 2,
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'secondary.contrastText',
                  borderColor: 'primary.main',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Box component="div" color={'#61dafb'} mb={3}>
                  <i className="lab la-4x la-react"></i>
                </Box>
                <Typography variant="h5" component="h5" mb={3}>
                  Shopify Liquid
                </Typography>
                <Typography variant="p" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima molestias quod reprehenderit
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                bgcolor: 'secondary.contrastText',
                border: '1px solid',
                borderColor: 'primary.contrastText',
                boxShadow: 'none',
                transition: '0.3s',
                p: 2,
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'secondary.contrastText',
                  borderColor: 'primary.main',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Box component="div" color={'#61dafb'} mb={3}>
                  <i className="lab la-4x la-react"></i>
                </Box>
                <Typography variant="h5" component="h5" mb={3}>
                  WordPress
                </Typography>
                <Typography variant="p" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima molestias quod reprehenderit
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
