import { Link } from 'react-router-dom';
import abs1 from '/images/home/hero_abs1.png';
import abs2 from '/images/home/hero_abs2.png';
import abs3 from '/images/home/hero_abs3.png';
import abs4 from '/images/home/hero_abs4.png';
import SecButton from '../common/SecButton';

const buttonData = {
  label: `Explore Our Work`,
};

const PortHero = () => {
  return (
    <section className="bg-theme theme_bg min-h-[100vh] md:min-h-[80vh] flex justify-center items-center text-white relative z-10">
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

      <div className="container max-w-[1200px]">
        <div className="flex flex-col justify-center items-center gap-4 -mt-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-center capitalize font-theme ">
            Build Your Brand, Tell Your Story, Leave a Legacy.
          </h1>
          <p className="max-w-[690px] opacity-75 text-lg text-center">
            At Design Arclight, we don’t just create designs—we build brands
            that connect, inspire, and convert. With a deep understanding of
            psychology, branding, and user experience, we craft purpose-driven
            designs that leave a lasting impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
            <SecButton data={buttonData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortHero;
