import React from 'react';

import image1 from '/images/about/about_show1.png';
import image2 from '/images/about/about_show2.png';
import image3 from '/images/about/about_show3.png';
import image4 from '/images/about/about_show4.png';
import image5 from '/images/about/about_show5.png';
import { Link } from 'react-router-dom';

const AboutShow = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col gap-y-4 md:gap-y-6">
          {/* row 1 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6">
            <div className="relative flex justify-center items-center text-center overflow-hidden rounded-xl min-h-[400px] lg:min-h-[600px] xl:min-h-[800px] w-full sm:w-[55%]">
              <img
                src={image1}
                alt=""
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
              <h4 className="uppercase font-theme text-white text-3xl font-medium">
                Modern & <br />
                Minimalism
              </h4>
            </div>
            <div className="relative flex justify-center items-center text-center overflow-hidden rounded-xl min-h-[400px] lg:min-h-[600px] xl:min-h-[800px] w-full sm:w-[45%]">
              <img
                src={image2}
                alt=""
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
              <h4 className="uppercase font-theme text-white text-3xl font-medium">
                Romantic & <br />
                Timeless
              </h4>
            </div>
          </div>

          {/* row 2 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6">
            <div className="relative flex justify-center items-center text-center overflow-hidden rounded-xl min-h-[400px] lg:min-h-[600px] xl:min-h-[800px] w-full sm:w-[45%]">
              <img
                src={image3}
                alt=""
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
              <h4 className="uppercase font-theme text-white text-3xl font-medium">
                Elegant & <br />
                Bold
              </h4>
            </div>
            <div className="relative flex justify-center items-center text-center overflow-hidden rounded-xl min-h-[400px] lg:min-h-[600px] xl:min-h-[800px] w-full sm:w-[55%]">
              <img
                src={image4}
                alt=""
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
              <h4 className="uppercase font-theme text-white text-3xl font-medium">
                Bold & <br />
                Editorial
              </h4>
            </div>
          </div>

          {/* row 3 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6">
            <div className="relative flex justify-center items-center text-center overflow-hidden rounded-xl min-h-[400px] lg:min-h-[600px] xl:min-h-[800px] w-full sm:w-[55%]">
              <img
                src={image5}
                alt=""
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
              <h4 className="uppercase font-theme text-white text-3xl font-medium">
                Calm & <br />
                Dreamy
              </h4>
            </div>
            <div className="relative flex flex-col justify-center items-center text-center overflow-hidden rounded-xl min-h-[400px] lg:min-h-[600px] xl:min-h-[800px] w-full sm:w-[45%]">
              <h4 className="uppercase font-theme text-theme text-3xl lg:text-5xl lg:leading-snug font-medium mb-6">
                all combined, separate, or somewhere in between My design style
                is...
              </h4>
              <Link
                to={`/contact`}
                className="bg-themeMedium hover:bg-themeDark text-white hover:scale-90 duration-300 px-10 py-4 rounded-full leading-none"
              >
                Are we business besties now?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShow;
