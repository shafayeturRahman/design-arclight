import abs1 from '/images/common/test_abs1.png';
import abs2 from '/images/common/test_abs2.png';
import icon1 from '/images/common/test_icon1.png';
import icon2 from '/images/common/test_icon2.png';
import icon3 from '/images/common/test_icon3.png';
import arrow1 from '/images/common/test_icon_arrow1.png';
import arrow2 from '/images/common/test_icon_arrow2.png';

const Testimonial = () => {
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
    </section>
  );
};

export default Testimonial;
