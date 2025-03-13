import hero1 from '/images/about/hero1.png';
import hero2 from '/images/about/hero3.png';
import hero_main from '/images/about/hero_main.png';
import heroAbs1 from '/images/about/hero_abs1.png';
import heroAbs2 from '/images/about/hero_abs2.png';

const AboutHero = () => {
  return (
    <section className="relative py-12 md:py-20 z-10">
      <div className="relative container">
        <img
          src={heroAbs1}
          alt=""
          className="absolute left-[15%] top-[25%] -z-10"
        />
        <img
          src={heroAbs2}
          alt=""
          className="absolute right-[15%] top-[25%] -z-10"
        />
        <div className="flex flex-col items-center justify-center max-w-[600px] gap-4 mx-auto text-center">
          <h1 className="text-center font-theme text-4xl font-medium capitalize !leading-[1.175] md:text-5xl lg:text-6xl">
            Behind the Brand My Story & Vision
          </h1>
          <p className="opacity-75">
            Every brand has a story, and this is mine. With a passion for
            crafting unique digital experiences, I create custom websites that
            don’t just look good—they connect, inspire, and convert. My approach
            blends strategy, creativity, and innovation to bring your vision to
            life. Let’s build something remarkable together.
          </p>
        </div>

        <div className="flex items-center gap-4 md:gap-12 lg:gap-20 relative mt-12">
          <div>
            <img src={hero1} alt="" />
          </div>
          <div>
            <img src={hero_main} alt="" />
          </div>
          <div>
            <img src={hero2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
