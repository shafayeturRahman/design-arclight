import { Link } from 'react-router-dom';

const projectsList = [
  {
    image: '/public/images/home/portfolio1.png',
    category: 'React',
    title: 'Beautiful Japan Girl',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque.',
    link: 'https://www.google.com',
  },
  {
    image: '/public/images/home/portfolio1.png',
    category: 'React',
    title: 'Beautiful Japan Girl',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque.',
    link: 'https://www.google.com',
  },
  {
    image: '/public/images/home/portfolio1.png',
    category: 'React',
    title: 'Beautiful Japan Girl',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque.',
    link: 'https://www.google.com',
  },
  {
    image: '/public/images/home/portfolio1.png',
    category: 'React',
    title: 'Beautiful Japan Girl',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque.',
    link: 'https://www.google.com',
  },
  {
    image: '/public/images/home/portfolio1.png',
    category: 'React',
    title: 'Beautiful Japan Girl',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque.',
    link: 'https://www.google.com',
  },
  {
    image: '/public/images/home/portfolio1.png',
    category: 'React',
    title: 'Beautiful Japan Girl',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque.',
    link: 'https://www.google.com',
  },
];

const Projects = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-4 -mt-12">
          <h5 className="border border-themeGray rounded-full py-3 px-4 text-center leading-none">
            A Glimpse of My Work
          </h5>
          <h1 className="text-4xl md:text-5xl !leading-[1.175] text-center capitalize font-theme font-medium max-w-[600px] mb-20">
            Where Every Frame Speaks Every Detail Inspires
          </h1>

          {/* projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
            {projectsList.map((project, i) => {
              const { image, category, title, desc, link } = project;
              return (
                <Link
                  to={link}
                  key={i}
                  className="group relative min-h-[450px] lg:min-h-[500px] xl:min-h-[600px] rounded-lg overflow-hidden flex flex-col justify-between items-center"
                >
                  {/* image */}
                  <div className="absolute inset-0 z-[-1]">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* category */}
                  <div className="flex justify-end w-full p-4">
                    <p className="border border-themeGray rounded-full py-2.5 px-5 text-center leading-none text-white text-sm">
                      {category}
                    </p>
                  </div>
                  {/* content */}
                  <div className="bg-white backdrop-blur-md bg-opacity-20 p-6 m-2 rounded-lg text-white">
                    <div className="flex justify-between items-center gap-4">
                      <div>
                        <h4 className="group-hover:text-theme text-xl font-semibold line-clamp-1">
                          {title}
                        </h4>
                        <p className="line-clamp-2 text-sm opacity-75 mt-2 font-light tracking-wide">
                          {desc}
                        </p>
                      </div>

                      <div className="bg-themeDark p-3 rounded-full">
                        <img
                          src="/public/images/common/button_arrow.png"
                          alt="arrow"
                          className="w-12"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <button className="mt-12 bg-themeDark hover:bg-opacity-90 hover:scale-90 text-white px-10 py-4 rounded-full leading-none duration-300">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
