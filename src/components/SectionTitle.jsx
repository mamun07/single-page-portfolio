import { Box, Typography } from '@mui/material';
import React from 'react';

export const SectionTitle = ({ title, subtitle }) => {
  return (
    <Box component="div" textAlign={'center'} mb={6}>
      <Typography variant="h4" component="h4" color={'primary.main'}>
        {subtitle}
      </Typography>
      <Typography variant="h2" component="h2">
        {title}
      </Typography>
    </Box>
  );
};
