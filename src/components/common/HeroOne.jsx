import { Link } from 'react-router-dom';
import abs1 from '/images/home/hero_abs1.png';
import abs2 from '/images/home/hero_abs2.png';
import abs3 from '/images/home/hero_abs3.png';
import abs4 from '/images/home/hero_abs4.png';

const HeroOne = () => {
  return (
    <section className="bg-theme theme_bg min-h-screen md:min-h-[80vh] flex justify-center items-center text-white relative z-10">
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
          <h1 className="text-4xl md:text-6xl lg:text-[80px] text-center capitalize font-theme font-medium">
            Ready to turn your vision into a soulful, thriving brand?
          </h1>
          <p className="max-w-[680px] opacity-75 text-lg text-center">
            Let's create something magical together! I'm so excited to meet you!
            <br />
            Please fill out the form below if you would like to work with me, or
            if you have any questions about my services.
            <br />I will get back to you within 48 business hours.
          </p>

          <div className="flex items-center mt-6">
            <Link
              to={`/portfolio`}
              className="bg-themeMedium hover:bg-themeDark hover:scale-90 duration-300 px-10 py-4 rounded-full leading-none"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
