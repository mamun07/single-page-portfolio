import React from 'react';
import Banner from '../container/banner/Banner';
import Intro from '../container/intro/Intro';
import Skills from '../container/skills/Skills';
import Portfolio from '../container/portfolio/Portfolio';
import Contact from '../container/contact/Contact';
import GetInTouch from '../container/getintouch/GetInTouch';

const Home = () => {
  return (
    <>
      <Banner />
      <Skills />
      <Intro />
      <Portfolio />
      <Contact />
      <GetInTouch />
    </>
  );
};

export default Home;
