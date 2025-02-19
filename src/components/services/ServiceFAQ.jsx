import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const faqData = [
  {
    isActive: true,
    ques: `What services do you offer?`,
    ans: `At Design Arclight, we specialize in branding, web design, and “Website in a day”. Our services include logo design, brand identity, website design & development, UI/UX design, and brand strategy to help businesses stand out.`,
  },
  {
    isActive: false,
    ques: `What’s your design process like?`,
    ans: `Our process is strategic and collaborative:Discovery – Understanding your brand, vision, and goals.Strategy & Moodboarding – Defining the brand direction.Design & Refinement – Creating visuals and refining based on feedback.Finalization & Delivery – Delivering high-quality assets or launching your website.`,
  },
  {
    isActive: false,
    ques: `How long does a project take?`,
    ans: `Timelines vary based on the project scope. Branding & website design projects typically take 2-4 weeks. A detailed timeline is provided after our initial consultation.`,
  },
  {
    isActive: false,
    ques: `Do you offer revisions?`,
    ans: `Yes! We offer a set number of revisions based on your package to ensure the design aligns perfectly with your vision. Additional revisions may incur extra charges.`,
  },
  {
    ques: `Will I own the final design?`,
    ans: `Yes! Once the project is complete and the final payment is made, you receive full ownership of the design assets. We provide all necessary files and guidelines for your future use.`,
  },
  {
    ques: `Is the deposit refundable?`,
    ans: `No, the deposit is non-refundable. This is because we dedicate time, research, and creative effort into every project from the moment you book. The deposit secures your project slot and ensures commitment from both sides.`,
  },
  {
    isActive: false,
    ques: `What platform do you use for web design?`,
    ans: `We build websites using Next.js, WordPress, Webflow, or Shopify, depending on your needs. Each platform offers flexibility, scalability, and a seamless user experience.`,
  },
  {
    isActive: false,
    ques: `Do you offer payment plans?`,
    ans: `Getting started is simple! Fill out our inquiry form or send us a message to discuss your project. Once we align on goals, we’ll send a proposal and start the creative process!`,
  },
  {
    isActive: false,
    ques: `How do I get started?`,
    ans: `Yes! We understand that branding and web design are big investments, so we offer flexible payment plans to make it easier for you. Payment is typically broken into two or three installments, depending on the project scope. Full details will be provided in your proposal.`,
  },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen && 'active'
      } shadow dark:shadow-none bg-theme dark:bg-[#1E2735] rounded-lg mt-6`}
    >
      <a
        href="#!"
        className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
        onClick={toggleFaq}
      >
        <span>{faq.ques}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </a>
      <div className={`${isOpen ? 'block' : 'hidden'} p-4 lg:p-6 pt-0`}>
        <p className="opacity-50">{faq.ans}</p>
      </div>
    </div>
  );
};

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-[#577C8E] text-white py-12 md:py-20 lg:py-32">
      <div className="container">
        {/* topbar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-start gap-4">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h5 className="border border-white text-white rounded-full py-3 px-4 text-center leading-none w-32">
              FAQ Section
            </h5>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium font-theme max-w-96">
              Frequently Asked Questions
            </h3>
          </div>

          <Link
            to={`/contact`}
            className="flex items-center hover:scale-90 duration-300 group text-white font-theme"
          >
            <span className="bg-theme group-hover:bg-themeDark px-12 py-3 rounded-full">
              Contact Us
            </span>
            <span className="bg-theme group-hover:bg-themeDark p-3 rounded-full">
              <img src="/images/common/button_arrow.png" alt="arrow down" />
            </span>
          </Link>
        </div>

        {/* faqs */}
        <div className="grid grid-cols-12 gap-0 md:gap-6">
          <div className="col-span-12 md:col-span-6">
            {faqData.slice(0, 5).map((faq, i) => (
              <FaqItem faq={faq} key={i} />
            ))}
          </div>
          <div className="col-span-12 md:col-span-6">
            {faqData.slice(5, 9).map((faq, i) => (
              <FaqItem faq={faq} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
