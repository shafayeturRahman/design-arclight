import { Link } from 'react-router-dom';
import connect1 from '/images/about/connect1.png';
import connect2 from '/images/about/connect2.png';

const AboutConnect = () => {
  return (
    <section className="bg-theme theme_bg py-12 md:py-20 text-white">
      <div className="container">
        <div className="flex flex-col items-start space-y-4 mb-12 md:mb-20 lg:mb-32">
          <div>
            <h5 className="border border-themeGray rounded-full py-3 px-4 text-center leading-none">
              About DesignArclight
            </h5>
          </div>

          <h1 className="text-4xl md:text-5xl capitalize font-theme font-medium !leading-tight">
            Yes, it's possible—and it can be your reality.
            <br />
            Imagine a website and brand that not only grabs attention but also
            connects deeply with your dream clients, making them return again &
            again.
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-3/5">
            <img src={connect1} alt="" className="w-full sm:w-1/2" />
            <div className="flex flex-col justify-center w-full sm:w-1/2 space-y-12">
              <p className="text-lg">
                With a strategic, user-focused approach, I blend stunning design
                with intentional branding to create a digital presence that not
                only looks good but works for you—driving engagement, building
                trust, and converting visitors into loyal customers. Let’s craft
                a website and brand that stands out, ranks higher, and attracts
                the right audience effortlessly
              </p>
              <div>
                <Link
                  to={`/contact`}
                  className="bg-themeMedium hover:bg-themeDark text-white w-full py-3 px-8 rounded-full"
                >
                  Let's Make It Happen
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <img src={connect2} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConnect;
