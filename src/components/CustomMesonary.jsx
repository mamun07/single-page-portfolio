import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

const CustomMesonary = () => {
  return (
    <Masonry
      columns={{ xs: 2, sm: 3, md: 4 }}
      spacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {itemData.map((item, index) => (
        <Box
          component="div"
          key={index}
          zIndex={1}
          borderRadius={2}
          boxShadow="0px 1px 20px -5px #0000004f"
          overflow="hidden"
        >
          <Typography
            variant="a"
            component="a"
            target="_blank"
            href={item.link}
          >
            <CardMedia
              image={item.img}
              alt={item.title}
              component="img"
              sx={{
                display: 'block',
                width: '100%',
              }}
            />
          </Typography>
        </Box>
      ))}
    </Masonry>
  );
};

export default CustomMesonary;

const itemData = [
  {
    img: '/1.png',
    title: 'Care Me Global',
    link: 'https://global.caremebd.com/',
  },
  {
    img: '/2.png',
    title: 'Care Me Global',
    link: 'https://global.caremebd.com/',
  },
  {
    img: '/1.png',
    title: 'Care Me Global',
    link: 'https://global.caremebd.com/',
  },
  {
    img: '/2.png',
    title: 'Care Me Global',
    link: 'https://global.caremebd.com/',
  },
  {
    img: '/1.png',
    title: 'Care Me Global',
    link: 'https://global.caremebd.com/',
  },
  {
    img: '/2.png',
    title: 'Care Me Global',
    link: 'https://global.caremebd.com/',
  },
  {
    img: '/1.png',
    title: 'Care Me Global',
    link: 'https://global.caremebd.com/',
  },
  {
    img: '/2.png',
    title: 'Care Me Global',
    link: 'https://global.caremebd.com/',
  },
  {
    img: '/1.png',
    title: 'Care Me Global',
    link: 'https://global.caremebd.com/',
  },
  {
    img: '/2.png',
    title: 'Care Me Global',
    link: 'https://global.caremebd.com/',
  },
];
