import { useEffect } from 'react';
import AllServices from '../components/services/AllServices';
import ServiceCTA from '../components/services/ServiceCTA';
import ServiceFAQ from '../components/services/ServiceFAQ';
import ServiceShape from '../components/services/ServiceShape';
import ServicesHero from '../components/services/ServicesHero';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ServicesHero />
      <AllServices />
      <ServiceCTA />
      <ServiceShape />
      <ServiceFAQ />
    </>
  );
};

export default Services;
