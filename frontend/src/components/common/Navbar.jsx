import { FaArrowDown } from 'react-icons/fa';
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
            <h1 className="text-xl font-bold">Logo</h1>
          </div>

          {/* nav links */}
          <div>
            <ul className="flex gap-4">
              {navData.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <Link className="flex items-center">
            <span className="bg-themeMedium px-12 py-3 rounded-full">
              Inquiry
            </span>
            <span className="bg-themeMedium p-3 rounded-full">
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
