import { Box, Typography } from '@mui/material';
import React from 'react';

export const SectionTitle = ({ title, subtitle }) => {
  return (
    <Box component="div" textAlign={'center'} mb={6}>
      <Typography variant="subtitle1" fontSize={15} color="primary.main">
        {subtitle}
      </Typography>
      <Typography variant="subtitle1" fontSize={40}>
        {title}
      </Typography>
    </Box>
  );
};
