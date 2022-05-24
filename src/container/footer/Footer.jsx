import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="div" py={5}>
      <Container maxWidth="xl">
        <Box
          component="div"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4" component="h4" m={0}>
            NOTO
          </Typography>
          <Typography variant="p" component="p" m={0}>
            &copy; 2022 Md. Al-Mamun. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
