import { Link } from 'react-router-dom';
import bgImage from '/images/about/about_cta.png';

const AboutCTA = () => {
  return (
    <section
      className="relative z-10 py-20 md:py-32 bg-cover "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="flex flex-col gap-y-6 items-center text-center max-w-[1150px] bg-white rounded-xl p-4 md:p-10 xl:p-20 mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl !leading-[1.15] font-theme">
            Turn your brand, ideas & passion into a powerful online presence
            with standout branding & web design
          </h2>
          <p className="mb-4">
            Say goodbye to dull, lifeless websites—let’s build a brand that
            truly reflects YOU
          </p>
          <Link
            to={`/contact`}
            className="bg-themeMedium hover:bg-themeDark text-white hover:scale-90 duration-300 px-10 py-4 rounded-full leading-none"
          >
            Agreed! Let’s do this
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
