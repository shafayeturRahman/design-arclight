import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/common/logo.png';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';

import Marquee from 'react-fast-marquee';

const instaData = [
  {
    image: '/images/common/insta1.png',
  },
  {
    image: '/images/common/insta1.png',
  },
  {
    image: '/images/common/insta1.png',
  },
  {
    image: '/images/common/insta1.png',
  },
  {
    image: '/images/common/insta1.png',
  },
  {
    image: '/images/common/insta1.png',
  },
  {
    image: '/images/common/insta1.png',
  },
  {
    image: '/images/common/insta1.png',
  },
  {
    image: '/images/common/insta1.png',
  },
  {
    image: '/images/common/insta1.png',
  },
];

const navData = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Services',
    link: '/services',
  },
  {
    label: 'Website in a Day',
    link: '/website-in-a-day',
  },
  {
    label: 'Portfolio',
    link: '/portfolio',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];

const socialData = [
  {
    link: '#',
    icon: <FaFacebookF />,
  },
  {
    link: '#',
    icon: <FaTwitter />,
  },
  {
    link: '#',
    icon: <FaInstagram />,
  },
  {
    link: '#',
    icon: <FaLinkedin />,
  },
];

const Insta = () => {
  return (
    <div className="mt-12">
      <Link to={`#`} className="flex justify-center items-center gap-4">
        <div className="text-lg p-2 border bg-themeLight rounded-full border-themeMedium">
          <FaInstagram />
        </div>
        <span>designarclight</span>
      </Link>
      <Marquee speed={30}>
        {instaData.map((item, i) => (
          <div key={i} className="flex justify-center items-center mx-2">
            <div className="">
              <img
                src={item.image}
                alt={`Insta image`}
                className="rounded w-full"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <Insta />
      <footer className="bg-theme theme_bg flex justify-center items-center text-white pt-12 md:pt-20 pb-6 md:pb-8">
        <div className="container">
          <div className="flex flex-wrap justify-between gap-y-12 gap-x-8">
            {/* first */}
            <div>
              <img src={logo} />
              <p className="max-w-[320px] mt-6 opacity-75">
                We create brands and websites you’ll love, designed to connect
                with your clients and work for you for years to come.
              </p>
            </div>
            {/* second */}
            <div className="flex flex-col gap-y-3">
              {navData.map((item, i) => (
                <Link
                  to={item.link}
                  key={i}
                  className="uppercase text-[#F4EFEB] opacity-60 font-theme hover:opacity-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {/* third */}
            <div>
              <h4 className="uppercase text-[#F4EFEB] opacity-60 font-theme">
                PHONE
              </h4>
              <p className="text-[#F6EFE9]">+880 1638 719578</p>
              <h4 className="uppercase text-[#F4EFEB] opacity-60 font-theme mt-6">
                Email
              </h4>
              <p className="text-[#F6EFE9]">hello@designarclight.com</p>
            </div>
          </div>

          {/* social */}
          <div className="flex justify-center items-center gap-4 my-12">
            {socialData.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="text-lg p-2 border rounded-full border-themeMedium hover:scale-110 duration-300 hover:bg-themeMedium"
              >
                {item.icon}
              </Link>
            ))}
          </div>

          {/* policy */}
          <div className="flex justify-center md:justify-end items-center gap-4">
            <p>© 2025 Designarclight, All right reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
