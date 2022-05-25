import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';
import InfoCard from '../../components/InfoCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';

const Intro = () => {
  const cartinfo = [
    {
      title: 'React Frontend Development',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
    {
      title: 'Next Frontend Development',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
    {
      title: 'MERN Stack Development',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
    {
      title: 'Shopify Liquid Development',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
    {
      title: 'Landing Page Development',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
    {
      title: 'React Customizition',
      descriptions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quod reprehenderit',
    },
  ];

  return (
    <Box component="div" id="intro" py={12}>
      <Container maxWidth="xl">
        <SectionTitle title="What I Do" subtitle="Service" />
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={10}>
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={30}
              centeredSlides={false}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination]}
              style={{ padding: '10px 15px 80px 15px' }}
              className="line"
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
