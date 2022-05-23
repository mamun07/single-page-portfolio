import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';
import InfoCard from '../../components/InfoCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';

const Intro = () => {
  const cartinfo = [
    {
      title: 'ReactJS Developer',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
    {
      title: 'NodeJS Developer',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
    {
      title: 'MongoDB Developer',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
    {
      title: 'MongoDB Developer',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
  ];

  return (
    <Box component="div" id="intro" py={12} bgcolor={'secondary.light'}>
      <Container maxWidth="xl">
        <SectionTitle title="What I Do" subtitle="Service" />
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={10}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={false}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination]}
              style={{ padding: '80px 15px' }}
            >
              {cartinfo.map((card, i) => {
                return (
                  <SwiperSlide key={i}>
                    <InfoCard title={card.title} des={card.descriptions} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
