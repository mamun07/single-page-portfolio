import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

const SkillProgress = ({ title, value }) => {
  return (
    <Box component="div">
      <Typography variant="p"> {title} </Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ height: 10, mb: 2 }}
      />
    </Box>
  );
};

export default SkillProgress;
