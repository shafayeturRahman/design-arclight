import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section className="bg-theme text-white flex flex-col md:flex-row gap-4 items-center">
      {/* left side */}
      <div className="relative w-full md:w-1/2 z-10">
        <img src="/images/home/about.png" alt="me" />

        <img
          src="/images/home/about-abs2.png"
          alt="abstract"
          className="absolute -bottom-12 md:bottom-[20%] right-[80%] md:-right-10 scale-75 md:scale-100"
        />
      </div>

      {/* right side */}
      <div className="p-8 2xl:p-32 relative w-full md:w-1/2 max-w-[900px] z-10">
        <div className="relative z-10">
          <img
            src="/images/home/about-abs1.png"
            alt="abstract"
            className="absolute right-0 -top-10 md:-top-5 z-[-10] scale-75 md:scale-100"
          />
          <div className="z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl !leading-snug font-medium font-theme uppercase">
              Hi I’m Farzana
            </h2>
            <h4 className="text-3xl md:text-4xl lg:text-5xl !leading-snug mb-4 font-ephesis">
              Founder+Lead Designer
            </h4>
          </div>
        </div>

        <p className="text-lg opacity-60 z-10 mb-12">
          A psychology graduate turned designer with a passion for creativity
          and an endless love for great design. I design timeless brands and
          websites that connect with your audience and bring your vision to
          life. With experience across fashion, wellness, and lifestyle and
          beyond, I help businesses craft authentic, standout identities built
          to grow and last. Let’s create a brand that tells your story and sets
          you apart. Ready to elevate your business?
        </p>
        <Link
          to={`/contact`}
          className="bg-themeMedium hover:bg-themeDark text-white hover:scale-90 duration-300 px-10 py-4 rounded-full leading-none"
        >
          Let's Collaborate
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
