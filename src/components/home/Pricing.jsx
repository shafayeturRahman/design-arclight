import { FaCheck } from 'react-icons/fa6';
import abs1 from '/public/images/home/pricing_abs1.png';
import abs2 from '/public/images/home/pricing_abs2.png';
import abs3 from '/public/images/home/pricing_abs3.png';
import { Link } from 'react-router-dom';

const pricingData = [
  {
    title: 'Branding',
    price: '1200',
    desc: "You're ready to uncover your brand's essence, transform your story into its core, and create a strategic identity that resonates with your audience—moving beyond DIY logos to elevate your business.",
    list: [
      'Pre-Discovery Questionnaire',
      'Discovery Session',
      'Strategy Development',
      'Moodboard',
      'Colour Palette  + Typhography',
      'Logo Design (primary, secondary & sub mark)',
      'Brand style guide',
    ],
  },

  {
    title: 'Custom Website',
    price: '3600',
    desc: 'It takes 2 seconds for your ideal buyer to form an opinion about your brand. Make them count with an online home that feels like a place your dream customers actually want to hang out.',
    list: [
      'Fully bespoke designs that reflect your  brand identity',
      'Unique layouts built from scratch, no templates.',
      'Optimized for all devices: desktop, tablet, and mobile.',
      'Intuitive navigation and layouts designed for optimal user experience.',
      'Integration of specific functionality like booking forms or portfolio galleries.',
      'Website Development on WordPress, Webflow, Framer, Custom Coding',
      'Social Media Integration',
    ],
  },
];

const Pricing = () => {
  return (
    <section className="relative py-20">
      <img src={abs1} className="absolute left-[25%] top-[16%]" />
      <div className="container">
        {/* topbar content */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h5 className="rounded-full border border-themeGray px-4 py-3 text-center leading-none">
            From Concept to Relity
          </h5>
          <h1 className="mb-20 max-w-[600px] text-center font-theme text-4xl font-medium capitalize !leading-[1.175] md:text-5xl">
            Solutions as <span className="font-bold">Unique</span> as your{' '}
            <span className="font-bold">Business</span>
          </h1>
        </div>

        {/* pricings */}
        <div>
          <div className="grid grid-cols-1 gap-y-4 text-white lg:grid-cols-2 lg:gap-x-4 lg:gap-y-0 mb-4">
            {pricingData.map((item, i) => {
              const { title, desc, price, list } = item;
              return (
                <div className="rounded-xl bg-themeDark p-4 lg:p-8" key={i}>
                  {/* topbar */}
                  <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h4 className="flex justify-start gap-2 font-theme text-3xl sm:text-4xl font-bold">
                      {title}{' '}
                      <span className="mt-2 font-primary text-sm font-normal">
                        /From ${price}
                      </span>
                    </h4>
                    <span className="rounded-full bg-themeLight px-3 py-1.5 font-theme text-sm font-semibold text-theme">
                      2 Spot/month
                    </span>
                  </div>

                  <p className="min-h-[70px] opacity-75">{desc}</p>

                  {/* list */}
                  <div className="mt-6 rounded-lg bg-theme p-2 lg:p-6 xl:p-8">
                    <ul className="flex flex-col gap-y-4 font-theme">
                      {list.map((l, j) => (
                        <li className="flex items-center gap-x-4" key={j}>
                          <FaCheck className="rounded-full bg-white p-1.5 text-[24px] text-theme" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* buttons */}
                  <div className="flex flex-col items-center justify-between gap-4 sm:flex-row mt-12">
                    <Link
                      to={`/contact`}
                      className="rounded-full border border-themeLight bg-themeLight px-16 py-3.5 font-theme sm:text-lg leading-none text-theme duration-300 hover:scale-90 hover:bg-themeMedium hover:text-white"
                    >
                      Count Me In!
                    </Link>

                    <span className="rounded-full border border-[#c7d9e56b] bg-[#3a516680] px-16 py-3.5 font-theme sm:text-lg leading-none text-white">
                      Timeline- 2 Weeks
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* special */}
          <div>
            <div className="rounded-xl bg-themeLight text-theme p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-10 xl:gap-12">
              <div>
                {/* topbar */}
                <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <h4 className="flex justify-start gap-2 font-theme text-3xl sm:text-4xl font-bold">
                    Website In a Day{' '}
                    <span className="mt-2 font-primary text-sm font-normal">
                      /From $1800
                    </span>
                  </h4>
                  <span className="rounded-full bg-theme px-3 py-1.5 font-theme text-sm font-semibold text-white">
                    4 Spot/month
                  </span>
                </div>

                <p className="opacity-75 mb-4">
                  Imagine having a website that perfectly represents your brand
                  and connects with your audience, crafted with precision and
                  delivered faster than you thought possible With the Website in
                  a Day experience, you’ll get just that without the expensive
                  price tag.
                </p>

                <p className="font-bold">
                  Requirements: You must have all copy, images and content
                  beforehand.
                </p>

                {/* buttons */}
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row mt-12">
                  <Link
                    to={`/contact`}
                    className="rounded-full border border-themeDark bg-themeDark px-16 py-3.5 font-theme sm:text-lg leading-none text-white duration-300 hover:scale-90 hover:bg-theme"
                  >
                    Count Me In!
                  </Link>

                  <span className="rounded-full border border-[#c7d9e56b] bg-[#3a516680] px-16 py-3.5 font-theme sm:text-lg leading-none text-white">
                    Shape Your Story
                  </span>
                </div>
              </div>

              {/* list */}
              <div>
                <div className="rounded-lg bg-white text-themeDark p-2 lg:p-6">
                  <p className="text-2xl font-semibold mb-5">
                    A perfect fit for you if:
                  </p>
                  <ul className="flex flex-col gap-y-4 font-theme">
                    <li className="flex items-center gap-x-4">
                      <FaCheck className="rounded-full bg-theme p-1.5 text-[24px] text-white" />
                      <span>You have everything ready to go</span>
                    </li>
                    <li className="flex items-center gap-x-4">
                      <FaCheck className="rounded-full bg-theme p-1.5 text-[24px] text-white" />
                      <span>
                        You already have a pretty good idea of who you're
                        targeting
                      </span>
                    </li>
                    <li className="flex items-center gap-x-4">
                      <FaCheck className="rounded-full bg-theme p-1.5 text-[24px] text-white" />
                      <span>
                        Got your branding sorted but need help launching your
                        website
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-white text-themeDark p-2 lg:p-6 mt-4">
                  <ul className="flex flex-col gap-y-4 font-theme">
                    <li className="flex items-center gap-x-4">
                      <FaCheck className="rounded-full bg-theme p-1.5 text-[24px] text-white" />
                      <span>
                        4 Page Website: Home Page, About, Offers/Services,
                        Contact
                      </span>
                    </li>
                    <li className="flex items-center gap-x-4">
                      <FaCheck className="rounded-full bg-theme p-1.5 text-[24px] text-white" />
                      <span>Responsive Design</span>
                    </li>
                    <li className="flex items-center gap-x-4">
                      <FaCheck className="rounded-full bg-theme p-1.5 text-[24px] text-white" />
                      <span>
                        Website Development on WordPress,Custom Coding
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
