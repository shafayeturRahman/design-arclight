import logo from '/public/images/common/logo.png';
import { Link } from 'react-router-dom';

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
  return (
    <div className="bg-theme py-2 text-white">
      <div className="container">
        <div className="flex justify-between items-center gap-4">
          {/* logo */}
          <div>
            <img src={logo} className="" />
          </div>

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
          <Link className="flex items-center hover:scale-90 duration-300 group">
            <span className="bg-themeMedium group-hover:bg-themeDark px-12 py-3 rounded-full">
              Inquiry
            </span>
            <span className="bg-themeMedium group-hover:bg-themeDark p-3 rounded-full">
              <img
                src="/public/images/common/button_arrow.png"
                alt="arrow down"
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
