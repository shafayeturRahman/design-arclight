import user from '/images/about/about_psy.png';
import rabbit from '/images/home/about-abs1.png';

const WebIncludes = () => {
  return (
    <section className="relative py-12 md:py-20 font-theme z-10">
      <img
        src={rabbit}
        className="absolute top-[25%] right-[10%] -z-[10] opacity-75"
      />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
          <div>
            <img src={user} className="w-full h-full object-cover rounded-xl" />
          </div>

          {/*  */}
          <div className="space-y-4 flex justify-center flex-col">
            <h4 className="secondary_heading max-w-xl md:mb-6 font-medium">
              What's Included in Your “Website in a Day"?
            </h4>
            <ul className="leading-loose list-disc text-lg md:text-xl space-y-4 pl-5">
              <li>Custom-designed website tailored to your brand.</li>
              <li>Fully responsive design (mobile, tablet, and desktop).</li>
              <li>
                Up to 5 pages (e.g., Home, About, Services, Portfolio, Contact).
              </li>
              <li>Basic SEO setup for better visibility.</li>
              <li>
                Integration of essential tools (e.g., contact forms, analytics).
              </li>
              <li>Launch-ready website within 24 hours.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebIncludes;
