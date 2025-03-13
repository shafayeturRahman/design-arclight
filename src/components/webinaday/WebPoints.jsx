import SecButton from '../common/SecButton';

const data = [
  {
    title: `APPLY FOR THE SERVICE`,
    desc: `Begin by filling out my application to work with me on the “Website in a Day“ experience. I want to make sure I’m the right fit for what your needs are.`,
  },
  {
    title: `Discovery & Preparation`,
    desc: `We’ll gather your content, branding assets, and goals during a strategy call to prepare for the big day.`,
  },
  {
    title: `Planning & Strategy`,
    desc: `Map out your website’s structure with a clear sitemap and wireframe`,
  },
  {
    title: `Design Day`,
    desc: `Build your custom website, styled to match your brand, with all your content added. You’ll review the site, and we’ll make final adjustments to ensure perfection.`,
  },
  {
    title: `Launch & Support`,
    desc: `Your website goes live, and we provide training and 7 days of post-launch support.`,
  },
];

const buttonData = {
  classname: `bg-[#C7D9E5]`,
  label: `let's become business besties & make it happen`,
};

const WebPoints = () => {
  return (
    <section className="py-12 md:py-20 bg-white text-themeDark">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <h5 className="wrapped_category">The Process</h5>
          <h1 className="secondary_heading max-w-xl font-medium mb-3 mt-2">
            Your dream website, designed & launched in just one day!
          </h1>
          <p className="max-w-xl opacity-75 sm:text-lg">
            Steps You Need to Prepare for "Website in a Day"
          </p>
        </div>

        {/*  */}
        {data.map((item, i) => (
          <div className="border-t border-black p-2.5 min-h-[120px]" key={i}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="min-w-[30%]">
                <h6>Step 0{i + 1}</h6>
                <h4 className="font-bold text-lg md:text-xl uppercase">
                  {item.title}
                </h4>
              </div>

              <div>
                <p className="lg:text-lg">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-6 flex justify-center hover:text-white">
          <SecButton data={buttonData} className={`!bg-[#C7D9E5]`}/>
        </div>
      </div>
    </section>
  );
};

export default WebPoints;
