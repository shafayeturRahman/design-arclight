import React from 'react';

const Bloom = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 py-12 items-center">
      {/* left side */}
      <div className="relative w-full md:w-1/2">
        <img src="/public/images/home/bloom.png" alt="bloom" />
      </div>

      {/* right side */}
      <div className="p-8 2xl:p-36 relative w-full md:w-1/2 max-w-[950px]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-theme !leading-snug font-medium capitalize mb-4">
          Specializing in branding & websites for creative minds
        </h2>
        <p className="text-lg opacity-60 mb-4">
          Best known for our signature minimalistic style, DesignArclight is an
          independent design studio specializing in branding and website design.
          We take pride in being client-focused, collaborating with brands
          worldwide to create intentional and timeless designs. Blending
          creativity and strategy, we bring your vision to life.
        </p>
        <button className="bg-themeMedium text-white px-10 py-4 rounded-full leading-none mt-6">
          Let's Collaborate
        </button>
        <img
          src="/public/images/home/bloom-abs.png"
          alt="signature"
          className="absolute -bottom-20 right-0 xl:right-36 -z-10"
        />
      </div>
    </section>
  );
};

export default Bloom;
