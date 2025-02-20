import { Link } from 'react-router-dom';

const MainButton = ({ data }) => {
  return (
    <Link
      to={data?.link ? data.link : `/contact`}
      className={`flex items-center hover:scale-90 duration-300 group text-white font-theme ${data?.classname}`}
    >
      <span className="bg-theme group-hover:bg-themeDark px-12 py-3 rounded-full">
        {data?.label ? data.label : 'Contact Us'}
      </span>
      <span className="bg-theme group-hover:bg-themeDark p-3 rounded-full">
        <img src="/images/common/button_arrow.png" alt="arrow down" />
      </span>
    </Link>
  );
};

export default MainButton;
