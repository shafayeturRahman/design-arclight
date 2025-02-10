import React from 'react';
import Hero from '../components/home/Hero';
import ImageSliding from '../components/home/ImageSliding';
import Brands from '../components/home/Brands';
import WorkFlow from '../components/home/WorkFlow';
import Bloom from '../components/home/Bloom';
import Wave from '../components/home/Wave';
import Projects from '../components/home/Projects';
import AboutMe from '../components/home/AboutMe';
import Pricing from '../components/home/Pricing';

const Home = () => {
  return (
    <>
      <Hero />
      <ImageSliding />
      <Brands />
      <WorkFlow />
      <Bloom />
      <Wave />
      <Projects />
      <Pricing />
      <AboutMe />
    </>
  );
};

export default Home;
