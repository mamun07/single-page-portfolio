import { Button } from '@mui/material';
import React from 'react';

const Buttons = ({ label, href, styled, mr }) => {
  return (
    <>
      <Button
        variant={styled}
        sx={{
          fontSize: 18,
          lineHeight: '18px',
          minWidth: 170,
          minHeight: 55,
          textTransform: 'none',
          mr: `${mr}`,
          '&:hover': {
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
          },
        }}
        href={href}
      >
        {label}
      </Button>
    </>
  );
};

export default Buttons;
