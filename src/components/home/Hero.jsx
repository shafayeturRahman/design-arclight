import { Link } from 'react-router-dom';
import abs1 from '/public/images/home/hero_abs1.png';
import abs2 from '/public/images/home/hero_abs2.png';
import abs3 from '/public/images/home/hero_abs3.png';
import abs4 from '/public/images/home/hero_abs4.png';

const Hero = () => {
  return (
    <section className="bg-theme min-h-[50vh] md:min-h-[80vh] flex justify-center items-center text-white relative z-10">
      <img
        src={abs1}
        className="absolute top-[20%] left-[5%] -z-[10] opacity-50"
      />
      <img
        src={abs2}
        className="absolute bottom-[35%] left-[20%] -z-[10] opacity-50"
      />
      <img
        src={abs3}
        className="absolute bottom-[20%] right-[15%] max-w-[150px] h-auto -z-[10] opacity-50"
      />
      <img
        src={abs4}
        className="absolute bottom-0 left-0 hidden md:block -z-[10]"
      />

      <div className="container max-w-[1000px]">
        <div className="flex flex-col justify-center items-center gap-4 -mt-12">
          <h5 className="border border-themeGray rounded-full py-3 px-4 text-center leading-none">
            Branding and Website Design
          </h5>
          <h1 className="text-4xl md:text-6xl lg:text-[80px] text-center capitalize font-theme font-medium">
            Transforming brands with{' '}
            <span className="font-light">minimalistic</span> &{' '}
            <span className="font-light">intentional</span> design that
            resonates.
          </h1>
          <p className="max-w-[600px] opacity-75 text-lg text-center">
            We create brands and websites you’ll love, designed to connect with
            your clients and work for you for years to come.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
            <Link
              to={`/contact`}
              className="bg-themeMedium hover:bg-themeDark hover:scale-90 duration-300 px-10 py-4 rounded-full leading-none"
            >
              Let's Collaborate
            </Link>
            <Link
              to={`/contact`}
              className="bg-white hover:bg-themeMedium text-themeMedium hover:text-white px-10 py-4 rounded-full leading-none hover:scale-90 duration-300"
            >
              Book a free call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
