import { Link } from 'react-router-dom';
import image from '/images/services/service_banner.png';

const ServiceCTA = () => {
  return (
    <section className="bg_theme theme_bg py-12 md:py-20 xl:py-32 text-white">
      <div className="container">
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 xl:gap-32 text-center md:text-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-theme font-light !leading-[1.35] mb-4">
            Turning your ideas, passion, and business into powerful branding &
            websites that captivate and convert your dream clients into loyal
            customers.
          </h1>

          <div className="space-y-4 md:space-y-8 leading-normal sm:text-lg md:text-xl xl:text-2xl xl:leading-relaxed opacity-75">
            <p>
              I've seen way too many incredible brands vanish into the
              noise—blending in when they should be turning heads. Stale
              websites, lifeless designs, and that "meh" factor?
            </p>
            <p>
              Not on my watch. Every brand has a soul, a fire, a presence that
              demands to be seen.
            </p>
            <p>
              I'm here to bring that to life and make it shine like a neon sign
              in a sea of beige.
            </p>
          </div>
        </div>
        {/* button */}
        <div className="my-12 flex justify-center items-center">
          <Link
            to={`/contact`}
            className="capitalize rounded-full border border-[#C7D9E5] bg-[#C7D9E5] hover:border-themeDark px-8 py-4 font-theme text-theme hover:text-white duration-300 hover:scale-90 hover:bg-themeDark text-center leading-normal"
          >
            Let's become business besties & make it happen
          </Link>
        </div>
        {/* image */}
        <div className="w-full min-h-[200px] md:min-h-[400px] xl:min-h-[400px]">
          <img
            src={image}
            alt="Branding Example"
            className="max-w-full rounded-lg object-cover w-full h-full"
          />
        </div>{' '}
      </div>
    </section>
  );
};

export default ServiceCTA;
