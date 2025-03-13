import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import CTA from '../components/common/CTA';
import AboutMe from '../components/home/AboutMe';
import AboutShow from '../components/about/AboutShow';
import AboutFit from '../components/about/AboutFit';
import AboutPsy from '../components/about/AboutPsy';
import AboutCTA from '../components/about/AboutCTA';
import AboutPhilosophy from '../components/about/AboutPhilosophy';
import AboutConnect from '../components/about/AboutConnect';
import Wave from '../components/home/Wave';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <Wave />
      <CTA />
    </>
  );
};

export default AboutUs;
