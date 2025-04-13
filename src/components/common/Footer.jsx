import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/common/logo.png';
import rabbit from '/images/common/footer_abs.png';
import { FaBehance, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import InstaFeed from './InstaFeed';
import Wave from '../home/Wave';

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
    link: 'https://www.instagram.com/design.arclight/',
    icon: <FaInstagram />,
  },
  {
    link: 'https://www.linkedin.com/in/farzana-uiux/',
    icon: <FaLinkedin />,
  },
  {
    link: 'https://www.behance.net/designarclight',
    icon: <FaBehance />,
  },
  {
    link: 'https://x.com/Farzana87508488',
    icon: <FaTwitter />,
  },
];

const Footer = () => {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Add event listener for link clicks
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', handleScrollToTop);
    });

    // Cleanup event listener on component unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []);

  return (
    <>
      <InstaFeed />
      <footer className="bg-theme theme_bg  text-white pt-12 md:pt-20 pb-6 md:pb-8">
        <div className="container">
          <div className="flex flex-wrap justify-between gap-y-12 gap-x-8">
            {/* first */}
            <div>
              <img src={logo} />
              <p className="max-w-[320px] mt-6 opacity-75">
                We create brands and websites you'll love, designed to connect
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
        </div>
        <Wave />
        <div className="container relative">
          <img
            src={rabbit}
            className="absolute opacity-20 md:opacity-50 bottom-[3%] left-[5%]"
          />
          {/* social */}
          <div className="flex justify-center items-center gap-4 mb-12">
            {socialData.map((item, i) => (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={item.link}
                key={i}
                className="text-lg p-2 border rounded-full border-themeMedium hover:scale-110 duration-300 hover:bg-themeMedium"
              >
                {item.icon}
              </Link>
            ))}
          </div>

          {/* policy */}
          <div className="flex justify-center items-center gap-4">
            <p>
              © {new Date().getFullYear()} Designarclight, All right reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
