import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const images = [
  '/public/images/common/work1.png',
  '/public/images/common/work1.png',
  '/public/images/common/work1.png',
  '/public/images/common/work1.png',
  '/public/images/common/work1.png',
  '/public/images/common/work1.png',
  '/public/images/common/work1.png',
  '/public/images/common/work1.png',
  '/public/images/common/work1.png',
  '/public/images/common/work1.png',
];

const ImageSliding = () => {
  return (
    <div className="w-full bg-theme">
      <Swiper
        slidesPerView={2} // Default for mobile
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          576: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-lg shadow-lg w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSliding;
