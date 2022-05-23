import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
const InfoCard = ({ title, des }) => {
  return (
    <Card
      sx={{
        bgcolor: 'secondary.contrastText',
        color: 'secondary.main',
        boxShadow: 'none',
        transition: '0.3s',
        p: 5,
      }}
    >
      <CardContent>
        <Typography variant="h1" component="h1" mb={3}>
          {title}
        </Typography>
        <Typography variant="p" component="p">
          {des}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
