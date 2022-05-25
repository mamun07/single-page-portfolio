import React from 'react';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

const Buttons = ({ label, href, styled, mr, target }) => {
  const notify = () =>
    toast.success('Successfully loaded!', { theme: 'colored' });
  return (
    <>
      <Button
        onClick={notify}
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
