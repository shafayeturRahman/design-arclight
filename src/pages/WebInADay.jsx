import React, { useEffect } from 'react';
import CTA2 from '../components/common/CTA2';
import WebHero from '../components/webinaday/WebHero';
import WebPoints from '../components/webinaday/WebPoints';
import WebIncludes from '../components/webinaday/WebIncludes';
import WebServices from '../components/webinaday/WebServices';
import WebFAQ from '../components/webinaday/WebFAQ';
import ImageSliding from '../components/home/ImageSliding';
import AboutMe from '../components/home/AboutMe';
import Testimonial from '../components/common/Testimonial';

const WebInADay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <WebHero />
      <ImageSliding />
      <WebPoints />
      <WebIncludes />
      <WebServices />
      <AboutMe />
      <WebFAQ />
      <Testimonial />
      <CTA2 />
    </>
  );
};

export default WebInADay;
