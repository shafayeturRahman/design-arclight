import { useState } from 'react';
import logo from '/images/common/logo.svg';
import { Link, useLocation } from 'react-router-dom';

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
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <div className="bg-white text-theme font-bold flex justify-center items-center p-2 text-sm font-theme">
        <p>
          Now booking for{' '}
          {new Date(new Date().setMonth(new Date().getMonth())).toLocaleString(
            'default',
            { month: 'long' }
          )}{' '}
          2025
        </p>
      </div>
      {/* desktop navigation */}
      <div className="bg-theme theme_bg py-2 text-white">
        <div className="container">
          <div className="flex justify-between items-center gap-4">
            {/* logo */}
            <Link to={`/`} className="flex-grow">
              <img src={logo} className="max-w-[180px] sm:max-w-[220px]" />
            </Link>

            <div className="hidden lg:flex justify-between items-center flex-grow">
              {/* nav links */}
              <div>
                <ul className="flex gap-4 lg:gap-8">
                  {navData.map((item, i) => (
                    <li key={i}>
                      <Link to={item.link} className="hover:text-themeGray">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* contact */}
              <Link
                to={`/contact`}
                className="flex items-center hover:scale-90 duration-300 group"
              >
                <span className="bg-themeMedium group-hover:bg-themeDark px-12 py-3 rounded-full">
                  Inquiry
                </span>
                <span className="bg-themeMedium group-hover:bg-themeDark p-3 rounded-full">
                  <img src="/images/common/button_arrow.png" alt="arrow down" />
                </span>
              </Link>
            </div>

            {/* hamburger menu */}
            <div
              className="relative flex flex-col items-end hover:cursor-pointer group duration-500 lg:hidden z-10 h-5 w-20"
              onClick={() => setNavActive(true)}
            >
              <span className="block w-16 h-0.5 bg-white relative duration-500">
                <span className="absolute right-0 block h-full w-0 group-hover:w-full bg-gradient-to-r from-[#818df8] to-[#23d2ee] duration-500" />
              </span>
              <span className="block w-9 h-0.5 bg-white relative translate-y-2">
                <span className="absolute right-0 block h-full w-0 group-hover:w-full bg-gradient-to-r from-[#818df8] to-[#23d2ee] duration-500" />
              </span>
              <span className="block w-12 h-0.5 bg-white relative translate-y-4">
                <span className="absolute right-0 block h-full w-0 group-hover:w-full bg-gradient-to-r from-[#818df8] to-[#23d2ee] duration-500" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div className="block lg:hidden">
        <div
          className={`fixed py-12 inset-0 w-screen h-screen bg-theme z-[9999999999] duration-500 ${
            navActive ? 'nav-active' : 'nav-not-active'
          }`}
        >
          <div className="container">
            <div className="flex items-center justify-between gap-4">
              <Link to={`/`} onClick={() => setNavActive(false)}>
                <img src={logo} alt="logo" className="w-60 h-auto" />
              </Link>

              {/* close button */}
              <div
                className="relative flex flex-col items-end cursor-pointer group duration-500"
                onClick={() => setNavActive(false)}
              >
                <span className="block w-16 h-0.5 bg-[#8d8d8d] relative duration-500 rotate-45">
                  <span className="absolute right-0 block h-full w-0 group-hover:w-full bg-gradient-to-r from-[#818df8] to-[#23d2ee] duration-500" />
                </span>
                <span className="block w-16 h-0.5 bg-[#8d8d8d] relative  -rotate-45">
                  <span className="absolute right-0 block h-full w-0 group-hover:w-full bg-gradient-to-r from-[#818df8] to-[#23d2ee] duration-500 " />
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-12 sm:items-end mt-32 md:mt-0 text-themeGray text-opacity-50">
              {navData.map((link, i) => (
                <Link
                  to={link.link}
                  key={i}
                  className={`${
                    pathname === link.link && 'text-white'
                  } hover:text-white duration-300`}
                  onClick={() => setNavActive(false)}
                >
                  <h5 className="uppercase text-3xl sm:text-5xl md:text-7xl">
                    {link.label}
                  </h5>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
