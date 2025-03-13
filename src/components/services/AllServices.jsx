import { FaCheck } from 'react-icons/fa6';
import image1 from '/images/services/service1.png';
import image2 from '/images/services/service2.png';
import image3 from '/images/services/service3.png';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    image: image1,
    title: 'A deeply immersive experience',
    category: 'Custom Branding Design',
    desc: 'Bring the heart of your brand to life with a fully custom branding experience.It’s time to elevate your business, create a lasting impact, and showcase your vision with branding that’s as authentic and unique as you. Ready for a brand transformation?',
    price: '1200',
    includes: [
      'Pre-Discovery Questionnaire',
      'Discovery Session',
      'Strategy Development',
      'Moodboard',
      'Colour Palette  + Typhography',
      'Logo Design (primary, secondary & sub mark)',
      'Brand style guide',
    ],
    timeline: '2 Weeks',
  },
  {
    image: image2,
    title: 'A finely crafted, bespoke web experience',
    category: 'Custom Website Design',
    desc: 'Your ideal buyer forms an opinion about your brand in just 2 seconds—make those moments unforgettable. It should be an inviting space where your dream clients want to stay, explore, and connect. Create a digital home that speaks, resonates, and converts at first glance.',
    price: '3600',
    includes: [
      'Fully bespoke designs that reflect your  brand identity',
      'Unique layouts built from scratch, no templates.',
      'Optimized for all devices: desktop, tablet, and mobile.',
      'Intuitive navigation and layouts designed for optimal user experience.',
      'Integration of specific functionality like booking forms or portfolio galleries.',
      'Website Development on WordPress, Webflow, Framer, Custom Coding',
    ],
    timeline: '2 Weeks',
  },
  {
    image: image3,
    title: 'A VIP Day experience',
    category: 'Website in a day',
    desc: `Imagine having a website that perfectly represents your brand and connects with your audience, crafted with precision and delivered faster than you thought possible with the Website in a Day experience, you’ll get just that without the expensive price tag.`,

    requirements: `you must have all copy, images and content beforehand.`,
    price: '1800',
    includes: [
      '4 Page Website: Home Page, About, Offers/Services, Contact',
      'Responsive design (adaptable for all devices: desktop, laptop, tablet, smartphone)',
      'Social media integration',
      'SEO basics',
      'Tailored website training & walkthrough video',
      '30 days of free post launch tech support',
      'Website Development on WordPress,Custom Coding',
    ],
    timeline: '1 DAY',
  },
];

const Service = ({ item, index }) => {
  const {
    image,
    title,
    category,
    desc,
    price,
    includes,
    timeline,
    requirements,
  } = item;

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-4 relative ${
        index % 2 === 1 && 'lg:flex-row-reverse'
      }`}
    >
      <div className="w-full lg:w-1/2 h-[250px] lg:h-full lg:sticky top-0">
        <img
          src={image}
          alt="banner Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-4 lg:max-w-[800px] p-4 2xl:p-12">
        <h4 className="font-medium text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-theme capitalize -mb-2 !leading-[1.25]">
          {title}
        </h4>
        <p className="text-lg font-semibold">{category}</p>
        <p className="opacity-75 !my-8 !leading-relaxed">{desc}</p>
        <b className="uppercase text-lg">Package Start at ${price}</b>

        <div className="my-6 bg-theme w-full h-0.5" />
        <b className="uppercase !mb-3">SEE WHAT'S INCLUDED</b>

        <ul className="flex flex-col gap-y-2.5 font-theme">
          {includes.map((it, j) => (
            <li className="flex items-center gap-x-4" key={j}>
              <FaCheck className="rounded-full bg-theme p-1.5 text-[24px] text-white" />
              <span>{it}</span>
            </li>
          ))}
        </ul>

        <p className="text-theme font-semibold !mb-6">
          *Payment plans Available
        </p>

        <div className="flex flex-col items-start justify-between gap-y-4 mt-16 max-w-[350px]">
          <Link
            to={`/contact`}
            className="rounded-full border border-[#577C8E] bg-[#577C8E] px-16 py-3.5 font-theme sm:text-lg leading-none text-white duration-300 hover:scale-90 hover:bg-theme w-full text-center"
          >
            Count Me In!
          </Link>

          <span className="rounded-full border-2 border-[#577C8E] bg-[#3a51663c] px-16 py-3.5 font-theme sm:text-lg leading-none text-white w-full text-center">
            Timeline: {timeline}
          </span>
        </div>
      </div>
    </div>
  );
};

const AllServices = () => {
  return (
    <div className="pt-12 md:pt-20">
      <div className="container">
        <div className="flex flex-col items-center space-y-4 mx-auto">
          <h4 className="uppercase text-2xl md:text-3xl lg:text-4xl font-medium">
            Services at a glance
          </h4>
          <ul className="flex gap-x-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-20 text-nowrap font-theme text-xl !mt-7 flex-wrap justify-center items-center">
            <li>Branding</li>
            <li>Custom Website</li>
            <li>Website In a day</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mt-12 lg:mt-20">
        {servicesData.map((item, i) => {
          return <Service key={i} item={item} index={i} />;
        })}
      </div>
    </div>
  );
};

export default AllServices;
