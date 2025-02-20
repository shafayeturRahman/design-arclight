import React, { useEffect } from 'react';
import PortHero from '../components/portfolio/PortHero';
import ImageSliding from '../components/home/ImageSliding';
import Testimonial from '../components/common/Testimonial';
import CTA from '../components/common/CTA';
import PortProjects from '../components/portfolio/PortProjects';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PortHero />
      <ImageSliding />
      <PortProjects />
      <Testimonial />
      <CTA />
    </>
  );
};

export default Portfolio;
