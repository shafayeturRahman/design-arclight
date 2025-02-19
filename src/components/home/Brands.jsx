import brand1 from '/images/common/brand1.png';
import brand2 from '/images/common/brand2.png';
import brand3 from '/images/common/brand3.png';
import brand4 from '/images/common/brand4.png';
import brand5 from '/images/common/brand5.png';

const brands = [brand1, brand2, brand3, brand4, brand5];

const Brands = () => {
  return (
    <section className="py-28 md:py-32">
      <div className="container max-w-[1000px]">
        <h2 className="text-3xl md:text-4xl text-center font-theme font-medium uppercase mb-20">
          Trusted by Creative Brands Worldwide
        </h2>
        <div className="flex justify-center items-center gap-4 lg:gap-12 flex-wrap xl:flex-nowrap">
          {brands.map((brand, i) => (
            <img
              key={i}
              src={brand}
              alt="brand"
              className="max-w-full h-auto object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
