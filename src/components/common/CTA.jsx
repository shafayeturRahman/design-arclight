import { Link } from 'react-router-dom';
import bgImage from '/images/common/cta-bg.png';

const CTA = () => {
  return (
    <section
      className="relative my-12 z-10 py-20 md:py-32 bg-cover text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container max-w-[650px]">
        <div className="flex flex-col gap-y-6 items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-theme">
            See if Design Arclight is right for you. (It totally is)
          </h2>
          <p className="mb-4 max-w-[550px]">
            Get a guided tour through DesignArclight, and find out how We can
            change the way you source design, forever.
          </p>
          <Link
            to={`/contact`}
            className="bg-themeMedium hover:bg-themeDark hover:scale-90 duration-300 px-10 py-4 rounded-full leading-none"
          >
            Shape Your Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
