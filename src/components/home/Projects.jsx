import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/staticPortfolioData';

const Projects = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container">
        <div className="-mt-12 flex flex-col items-center justify-center gap-4">
          <h5 className="rounded-full border border-themeGray px-4 py-3 text-center leading-none">
            A Glimpse of My Work
          </h5>
          <h1 className="mb-20 max-w-[600px] text-center font-theme text-4xl font-medium capitalize !leading-[1.175] md:text-5xl">
            Where Every Frame Speaks Every Detail Inspires
          </h1>

          {/* projects */}
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {portfolioData.slice(0, 6).map((project, i) => {
              const { showImage, categories, title, desc, id } = project;
              return (
                <Link
                  to={`/portfolio/${id}`}
                  key={i}
                  className="group relative flex min-h-[450px] flex-col items-center justify-between overflow-hidden rounded-lg lg:min-h-[500px] xl:min-h-[600px]"
                >
                  {/* image */}
                  <div className="absolute inset-0">
                    <img
                      src={showImage}
                      alt={title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* category */}
                  <div className="z-10 flex w-full justify-end p-4">
                    {categories.map((cat, j) => (
                      <p className="rounded-full border border-themeGray px-5 py-2.5 text-center text-sm leading-none text-white capitalize">
                        {cat.replace(/-/g, ' ')}
                      </p>
                    ))}
                  </div>
                  {/* content */}
                  <div className="m-2 rounded-lg bg-white bg-opacity-20 p-6 text-white backdrop-blur-md">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="line-clamp-1 text-xl font-semibold group-hover:text-themeDark">
                          {title}
                        </h4>
                        <p className="mt-2 line-clamp-2 text-sm font-light tracking-wide opacity-75">
                          {desc}
                        </p>
                      </div>

                      <div>
                        <div className="rounded-full bg-themeDark min-w-10 h-10 p-2 flex items-center justify-center">
                          <img
                            src="/images/common/button_arrow.png"
                            alt="arrow"
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <Link
            to={`/portfolio`}
            className="mt-12 rounded-full bg-themeDark px-10 py-4 leading-none text-white duration-300 hover:scale-90 hover:bg-opacity-90"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
