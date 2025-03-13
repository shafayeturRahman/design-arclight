import { Link } from 'react-router-dom';
import image from '/images/about/about_philosophy.png';

const AboutPhilosophy = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="flex flex-col justify-center items-center space-y-4 mb-12">
          <h5 className="border border-themeGray rounded-full py-3 px-4 text-center leading-none">
            Design Arclight Philosophy
          </h5>
          <h1 className="text-4xl md:text-5xl text-center capitalize font-theme font-medium">
            Our Philosophy in Every Project
          </h1>
        </div>

        <div className="bg-themeMedium rounded-xl overflow-hidden flex flex-col md:flex-row gap-4">
          <div className="flex flex-col justify-between p-4 md:p-10 text-white w-full md:w-[55%]">
            <h4 className="text-2xl md:text-3xl lg:text-4xl !leading-[1.35] font-theme">
              Crafting Meaningful Experiences Aligned with Your Goals Through
              Purpose, Collaboration, and Precision
            </h4>

            <div>
              <p className="opacity-75 mb-8 !leading-relaxed text-lg mt-6">
                My philosophy is rooted in three pillars: Purpose-Driven Design,
                where every brand's unique story is translated into a visual
                identity that resonates; Collaborative Creativity, ensuring
                designs are shaped through understanding your vision and
                audience; and Precision Meets Passion, where meticulous
                attention to detail ensures every element is both beautiful and
                effective.
              </p>
              {/* contact */}
              <Link
                to={`/contact`}
                className="flex items-center hover:scale-90 origin-left duration-300 "
              >
                <span className="bg-themeDark px-12 py-3 rounded-full whitespace-nowrap text-sm sm:text-base">
                  Let's Create Together
                </span>
                <span className="bg-themeDark p-3 rounded-full">
                  <img src="/images/common/button_arrow.png" alt="arrow down" />
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[45%]">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
