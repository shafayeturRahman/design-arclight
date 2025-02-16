import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CTA from '../components/common/CTA';
import AboutMe from '../components/home/AboutMe';
import AboutShow from '../components/about/AboutShow';
import AboutFit from '../components/about/AboutFit';
import AboutPsy from '../components/about/AboutPsy';
import AboutCTA from '../components/about/AboutCTA';
import AboutPhilosophy from '../components/about/AboutPhilosophy';
import AboutConnect from '../components/about/AboutConnect';

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <AboutPhilosophy />
      <AboutConnect />
      <AboutCTA />
      <AboutPsy />
      <AboutFit />
      <AboutMe />
      <AboutShow />
      <CTA />
    </>
  );
};

export default AboutUs;
