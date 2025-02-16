import React from 'react';

const fitData = [
  'You’re a service-based entrepreneur',
  'You’re an established business that’s out-growing your brand',
  'You feel that you’re too busy to be DIY’ing design right now',
  'You’re not too busy to stick to a timeline and stay in touch',
  'You’re proud of your business, but not of your branding & website',
  'You’re ready to level up and start attracting bigger ticket clients',
  'You’re comfortable granting creative freedom and trusting the process',
];

const notFitData = [
  'You’re not clear on your service offerings yet',
  'You’re not sure who you target audience is',
  'You’re unable to commit to sticking to our process and timeline',
  'You find it difficult to hand over creative control',
];

const AboutFit = () => {
  return (
    <section className="py-12 md:py-20 font-theme">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20">
          <div>
            <h4 className="font-medium text-2xl md:text-4xl lg:text-5xl">
              We're a great fit for one another if:
            </h4>
            <ul className="space-y-3 mt-6">
              {fitData.map((item, i) => (
                <li
                  key={i}
                  className="bg-themeLight rounded-xl py-3.5 px-4 font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/*  */}
          <div>
            <h4 className="font-medium text-2xl md:text-4xl lg:text-5xl">
              We may not be the best fit if:
            </h4>
            <ul className="space-y-3 mt-6">
              {notFitData.map((item, i) => (
                <li
                  key={i}
                  className="bg-themeLight rounded-xl py-3.5 px-4 font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFit;
