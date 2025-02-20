import { Link } from 'react-router-dom';
import bgImage from '/images/common/cta_2_bg.png';

const CTA2 = () => {
  return (
    <section
      className="relative my-12 z-10 py-20 md:py-32 bg-cover text-white min-h-[70vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container ">
        <div className="flex flex-col gap-y-6 items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-theme !leading-[1.25]">
            The best time to elevate your brand and website is right now—
            because your future clients are already searching for you today.
          </h2>
          <p className="mb-4 max-w-[1000px] sm:text-lg">
            In today’s fast-paced world, being a successful entrepreneur in the
            fitness, health, and wellness industry isn’t just about passion –
            it’s about standing out with a professional online presence that
            screams credibility and trust. Let me handle your website – the tool
            that will elevate your brand and attract your dream clients – while
            you focus on doing what you love most: changing lives and
            transforming your clients’ journeys.
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

export default CTA2;
