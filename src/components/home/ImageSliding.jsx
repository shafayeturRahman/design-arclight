import Marquee from 'react-fast-marquee';

const images = [
  '/images/common/work1.png',
  '/images/common/work1.png',
  '/images/common/work1.png',
  '/images/common/work1.png',
  '/images/common/work1.png',
  '/images/common/work1.png',
  '/images/common/work1.png',
  '/images/common/work1.png',
  '/images/common/work1.png',
  '/images/common/work1.png',
];

const ImageSliding = () => {
  return (
    <div className="w-full bg-theme">
      <Marquee speed={30}>
        {images.map((item, index) => (
          <img
            src={item}
            alt={`Slide ${index + 1}`}
            key={index}
            className="rounded-lg shadow-lg w-full px-2"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default ImageSliding;
