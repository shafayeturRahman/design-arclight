import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-rose-500 rounded-full cursor-pointer z-[1000] text-xl text-white p-3 ${
        visible ? 'block' : 'hidden'
      }`}
      id="backToTopButton"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
