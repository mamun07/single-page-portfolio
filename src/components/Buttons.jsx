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
          minWidth: 200,
          minHeight: 60,
          textTransform: 'none',
          mr: `${mr}`,
        }}
        href={href}
      >
        {label}
      </Button>
    </>
  );
};

export default Buttons;
