const data = [
  `Perfect for small business owners, solopreneurs, and creatives who need a fast, professional website.`,
  `Ideal for those who already have their branding and content ready.`,
  `Best for businesses looking for a simple yet impactful online presence to attract clients quickly.`,
];

const WebServices = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container max-w-5xl">
        <div className="flex flex-col space-y-4 items-center">
          <h4 className="secondary_heading md:mb-6 font-medium">
            Who Is This Service For?
          </h4>

          <div className="mt-6 flex flex-col space-y-3 w-full !mb-12">
            {data.map((item, i) => (
              <div
                key={i}
                className="bg-theme py-5 w-full px-4 text-center text-white rounded-lg"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>

          <h4 className="secondary_heading  !font-light text-[22px] md:text-3xl lg:text-4xl">
            Need a stunning website in no time? <br />
            This service is designed for you!
          </h4>
        </div>
      </div>
    </section>
  );
};

export default WebServices;
