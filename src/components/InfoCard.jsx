import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
const InfoCard = ({ title, des }) => {
  return (
    <Card
      className="cardbg"
      sx={{
        bgcolor: 'secondary.contrastText',
        color: 'secondary.main',
        transition: '0.3s',
        p: '50px 20px',
        boxShadow: '0px 1px 20px -5px #0000004f',
      }}
    >
      <CardContent className="textcolor">
        <Typography variant="h2" component="h2" mb={3}>
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
