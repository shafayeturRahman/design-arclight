import { Link } from 'react-router-dom';

const ServiceShape = () => {
  return (
    <section className="relative z-10 py-12 md:py-20 lg:py-32 theme_bg_abstract">
      <div className="container max-w-[850px]">
        <div className="flex flex-col gap-y-6 items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium !leading-[1.25]">
            No room for dull or forgettable— your brand deserves to stand out.
          </h2>
          <p className="mb-4 max-w-[600px] lg:text-lg opacity-90">
            Your time is valuable, and you shouldn’t waste it trying to figure
            out your online presence. Focus on what you do best, and let me
            craft a website that truly represents your brand—captivating,
            seamless, and built to attract your ideal clients.
          </p>
          <Link
            to={`/contact`}
            className="bg-themeMedium hover:bg-themeDark hover:scale-90 duration-300 px-10 py-4 rounded-full leading-none text-white"
          >
            Shape Your Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceShape;
