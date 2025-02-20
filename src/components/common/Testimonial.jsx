import { useEffect, useState } from 'react';
import abs1 from '/images/common/test_abs1.png';
import abs2 from '/images/common/test_abs2.png';
import icon1 from '/images/common/test_icon1.png';
import icon2 from '/images/common/test_icon2.png';
import icon3 from '/images/common/test_icon3.png';
import arrow1 from '/images/common/test_icon_arrow1.png';
import arrow2 from '/images/common/test_icon_arrow2.png';

import reviewer1 from '/images/common/reviewer1.png';

const testimonials = [
  {
    text: 'Working with Redwood Rise has been an incredible experience. She’s incredibly insightful, supportive, and easy to connect with. In just a few sessions, the strategies she’s introduced have transformed how I approach my daily life, empowering me to take control and creating a newfound sense of calm and clarity.',
    author: 'SHAFAYETUR',
    designation: 'Leadership Coach',
    img: reviewer1,
  },
  {
    text: 'The website she designed not only looks incredible but also speaks directly to my ideal clients, making it easier for me to showcase my work and attract the right audience. I’ve received countless compliments on my new branding, and I finally feel confident in how my business is presented online.',
    author: 'INSIGHTFUL, FUN',
    designation: 'Leadership Coach',
    img: reviewer1,
  },
  {
    text: 'I felt truly heard and understood. The coaching sessions helped me build confidence and find a clear path forward in my journey.',
    author: 'FARZANA RAHMAN',
    designation: 'Leadership Coach',
    img: reviewer1,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="relative py-12 md:py-20 z-10">
      <img src={abs1} className="absolute top-[25%] left-[10%] -z-[10]" />
      <img
        src={abs2}
        className="absolute top-[10%] right-[5%] -z-[10] opacity-50"
      />

      <div className="container">
        {/* top contents */}
        <div className="flex flex-col items-center justify-center gap-y-6">
          <h5 className="rounded-full border border-themeGray px-4 py-3 text-center leading-none">
            From Concept to Relity
          </h5>
          <h1 className="font-theme text-4xl md:text-5xl font-medium capitalize !leading-[1.175]">
            We design. You grow
          </h1>
          <p className="opacity-65">Our process is as simple as possible.</p>
        </div>

        {/*  */}
        <div className="flex md:items-start flex-col md:flex-row text-center gap-y-12 md:gap-4 mt-12 max-w-[1000px] mx-auto">
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={icon1} />
            <h4 className="font-theme text-2xl font-bold -mb-4">Discovery</h4>
            <p>We dive deep to understand your brand.</p>
          </div>

          <img
            src={arrow1}
            className="max-w-[100px] xl:max-w-[200px] h-auto object-contain mt-2 hidden md:block"
          />
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={icon2} />
            <h4 className="font-theme text-2xl font-bold -mb-4">Design</h4>
            <p> Where creativity meets intention to craft stunning visuals.</p>
          </div>

          <img
            src={arrow2}
            className="max-w-[100px] xl:max-w-[200px] h-auto object-contain mt-8 hidden md:block"
          />
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={icon3} className="block" />
            <h4 className="font-theme text-2xl font-bold -mb-4">Delivery</h4>
            <p>Seamless implementation with a timeless touch.</p>
          </div>
        </div>
      </div>

      {/* testimonial */}
      <div className="container flex flex-col justify-center items-center mt-36">
        <h3 className="text-sm uppercase font-theme font-medium mb-6">
          Past Client Results
        </h3>
        <div className="relative w-full max-w-3xl min-h-36 mb-36 md:mb-12">
          {testimonials.map((testimonial, i) => (
            <p
              key={i}
              className={`absolute w-full text-lg text-gray-700 transition-all duration-500 transform text-center ${
                index === i ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              {testimonial.text}
            </p>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-12">
          {testimonials.map((testimonial, i) => {
            const { author, designation, img } = testimonial;
            return (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 origin-left flex gap-x-2 cursor-pointer ${
                  index === i ? 'opacity-100 scale-100' : 'opacity-50 scale-75'
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div className="flex flex-col items-start">
                  <h4 className="uppercase font-medium font-theme">{author}</h4>
                  <p className="text-xs uppercase opacity-90">{designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
