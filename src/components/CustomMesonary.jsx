import React from 'react';
import { Box, CardMedia } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

const CustomMesonary = () => {
  return (
    <Masonry
      columns={{ xs: 2, sm: 3, md: 4 }}
      spacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {itemData.map((item, index) => (
        <Box component="div" key={index} zIndex={1}>
          <CardMedia
            image={item.img}
            alt={item.title}
            component="img"
            sx={{
              borderRadius: 2,
              display: 'block',
              width: '100%',
            }}
          />
        </Box>
      ))}
    </Masonry>
  );
};

export default CustomMesonary;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
];
