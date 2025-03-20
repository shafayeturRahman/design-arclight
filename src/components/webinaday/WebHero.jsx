import abs1 from '/images/home/hero_abs1.png';
import abs2 from '/images/home/hero_abs2.png';
import abs3 from '/images/home/hero_abs3.png';
import abs4 from '/images/home/hero_abs4.png';
import SecButton from '../common/SecButton';
import { useEffect } from 'react';

const buttonData = {
  classname: `bg-[#567C8D]`,
};

const WebHero = () => {
  return (
    <section className="bg-theme theme_bg py-28 md:min-h-[80vh] flex justify-center items-center text-white relative z-10">
      <img
        src={abs1}
        className="absolute top-[20%] left-[5%] -z-[10] opacity-20 md:opacity-50"
      />
      <img
        src={abs2}
        className="absolute bottom-[35%] left-[20%] -z-[10] opacity-20 md:opacity-50"
      />
      <img
        src={abs3}
        className="absolute bottom-[20%] right-[15%] max-w-[150px] h-auto -z-[10] opacity-20 md:opacity-50"
      />
      <img
        src={abs4}
        className="absolute bottom-0 left-0 hidden md:block -z-[10]"
      />

      <div className="container max-w-[1200px]">
        <div className="flex flex-col justify-center items-center gap-4 -mt-12">
          <h5 className="wrapped_category text-sm">
            INTRODUCING: WEBSITE IN A DAY
          </h5>
          <h1 className="text-4xl md:text-6xl lg:text-[72px] text-center capitalize font-theme font-medium !leading-[1.175]">
            For fitness, health, and wellness professionals ready to elevate
            their brands online presence.
          </h1>
          <p className="max-w-xl opacity-75 text-lg text-center">
            A streamlined website experience packed with thoughtful designs,
            experience-backed strategies + a custom website that perfectly
            reflects your vision — launched in just one day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
            <SecButton data={buttonData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHero;
