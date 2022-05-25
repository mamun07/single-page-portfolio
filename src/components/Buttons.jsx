import { Button } from '@mui/material';
import React from 'react';

const Buttons = ({ label, href, styled, mr, target }) => {
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
        target={target}
        href={href}
      >
        {label}
      </Button>
    </>
  );
};

export default Buttons;
