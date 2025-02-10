import brand1 from '/public/images/common/brand1.png';

const brands = [brand1, brand1, brand1, brand1, brand1];

const Brands = () => {
  return (
    <section className="py-28 md:py-32">
      <div className="container max-w-[1000px]">
        <h2 className="text-3xl md:text-4xl text-center font-theme font-medium uppercase mb-6">
          Trusted by Creative Brands Worldwide
        </h2>
        <div className="flex justify-center items-center gap-4 lg:gap-12 flex-wrap lg:flex-nowrap">
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
