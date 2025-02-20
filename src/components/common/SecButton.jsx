import { Link } from 'react-router-dom';

const SecButton = ({ data }) => {
  return (
    <Link
      to={data?.link ? data.link : `/contact`}
      className={`bg-themeMedium hover:bg-themeDark hover:scale-90 duration-300 px-10 py-4 rounded-full leading-[1.2] capitalize text-center ${data?.classname}`}
    >
      {data?.label ? data.label : "Let's Collaborate"}
    </Link>
  );
};

export default SecButton;
