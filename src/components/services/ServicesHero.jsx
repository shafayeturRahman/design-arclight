import { Link } from 'react-router-dom';
import bannerImage from '/images/services/service_hero.png';
import { useEffect } from 'react';

const ServicesHero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:min-h-[70vh] lg:h-[70vh] xl:h-[85vh]">
      <div className="w-full lg:w-2/5 h-[200px] lg:h-full">
        <img
          src={bannerImage}
          alt="banner Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-3/5 h-full p-4 lg:p-12 max-w-[600px] mx-auto mx lg:max-w-[800px] justify-center lg:items-start flex flex-col gap-y-4 text-center lg:text-start">
        <h1 className="text-3xl lg:text-6xl xl:text-7xl !leading-[1.13] capitalize font-theme font-light">
          Minimal, authentic branding & website design that
          <span className="font-medium"> truly</span> reflects YOU.
        </h1>

        <p className="max-w-[600px]">
          Your business is one of a kind—your website should be too. No
          cookie-cutter designs, just a brand that truly represents YOU.
        </p>

        <Link
          to={`/contact`}
          className="bg-theme hover:bg-themeDark hover:scale-90 duration-300 px-10 py-4 rounded-full leading-none text-white"
        >
          Let's Collaborate
        </Link>
      </div>
    </div>
  );
};

export default ServicesHero;
