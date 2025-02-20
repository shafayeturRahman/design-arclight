import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MainButton from '../common/MainButton';

const WebFAQ = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="container">
        {/* topbar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-start gap-4">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h5 className="wrapped_category w-32">FAQ Section</h5>

            <h3 className="secondary_heading max-w-96 md:text-start">
              Frequently Asked Questions
            </h3>
          </div>

          <MainButton />
        </div>

        {/* faqs */}
        <FaqItems />
      </div>
    </section>
  );
};

export default WebFAQ;

const FaqItems = () => {
  const [isOpen, setIsOpen] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleFaq = (index) => {
    setIsOpen((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div className="grid md:grid-cols-2 md:gap-x-4 !leading-[1.75] mt-12">
      <div>
        {/* item 1 */}
        <div className="p-2">
          <div className="bg-white rounded-lg">
            <div
              className="p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer font-theme font-medium text-lg space-x-4"
              onClick={() => toggleFaq(0)}
            >
              <span>What’s included in the "Website in a Day" package?</span>
              {isOpen[0] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <AnimatePresence>
              {isOpen[0] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="p-4 lg:p-6 pt-2 lg:pt-0 opacity-75">
                    "Website in a Day" is a fast-track web design service where
                    I design and develop a fully functional, high-converting
                    website for your business in just one day. You’ll get a
                    stunning, responsive, and custom-branded website that aligns
                    with your business goals.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* item 2 */}
        <div className="p-2">
          <div className="bg-white rounded-lg">
            <div
              className="p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer font-theme font-medium text-lg space-x-4"
              onClick={() => toggleFaq(1)}
            >
              <span>Who is this service for?</span>
              {isOpen[1] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <AnimatePresence>
              {isOpen[1] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="p-4 lg:p-6 pt-2 lg:pt-0 opacity-75">
                    <p>This service is perfect for:</p>
                    <ul className="list-disc pl-4">
                      <li>
                        Small business owners who need a professional website
                        quickly.
                      </li>
                      <li>Entrepreneurs launching a new product or service.</li>
                      <li>
                        Coaches, consultants, and creatives looking for a sleek
                        online presence.
                      </li>
                      <li>
                        Anyone who wants a stunning, hassle-free website in just
                        one day.
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* item 3 */}
        <div className="p-2">
          <div className="bg-white rounded-lg">
            <div
              className="p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer font-theme font-medium text-lg space-x-4"
              onClick={() => toggleFaq(2)}
            >
              <span>What’s included in the "Website in a Day" package?</span>
              {isOpen[2] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <AnimatePresence>
              {isOpen[2] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="p-4 lg:p-6 pt-2 lg:pt-0 opacity-75">
                    <p>The package includes:</p>
                    <ul className="pl-4">
                      <li>
                        ✅ A 5-page website (Home, About, Services, Portfolio,
                        Contact)
                      </li>
                      <li>✅ A custom design tailored to your brand</li>
                      <li>✅ Mobile-responsive layout</li>
                      <li>✅ Basic SEO optimization</li>
                      <li>✅ Speed optimization</li>
                      <li>✅ Integration with social media & contact forms</li>
                      <li>✅ Email opt-in (if needed)</li>
                      <li>✅ One round of minor revisions</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* item 5 */}
        <div className="p-2">
          <div className="bg-white rounded-lg">
            <div
              className="p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer font-theme font-medium text-lg space-x-4"
              onClick={() => toggleFaq(4)}
            >
              <span>How does the "Website in a Day" process work?</span>
              {isOpen[4] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <AnimatePresence>
              {isOpen[4] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="p-4 lg:p-6 pt-2 lg:pt-0 opacity-75">
                    <p>Pre-Work (Before the Design Day)</p>
                    <ul className="list-disc pl-4">
                      <li>You complete a pre-design questionnaire.</li>
                      <li>
                        You provide your brand assets (logo, fonts, colors, and
                        images).
                      </li>
                      <li>
                        You submit your website copy (text for all pages).
                      </li>
                      <li>
                        We schedule a quick strategy call to finalize details.
                      </li>
                    </ul>

                    <p>The Design Day (Your Website is Built!)</p>
                    <ul className="list-disc pl-4">
                      <li> I start designing at 9 AM (your time zone).</li>
                      <li>You get updates throughout the day.</li>
                      <li>
                        We have a mid-day review session to adjust anything.
                      </li>
                      <li>By the end of the day, your website is complete!</li>
                    </ul>

                    <p> Post-Launch (After the Design Day)</p>
                    <ul className="list-disc pl-4">
                      <li> You get a 7-day support period for minor tweaks.</li>
                      <li>
                        I provide a short tutorial on how to manage your site.
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div>
        {/* item 4 */}
        <div className="p-2">
          <div className="bg-white rounded-lg">
            <div
              className="p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer font-theme font-medium text-lg space-x-4"
              onClick={() => toggleFaq(3)}
            >
              <span>What’s NOT included?</span>
              {isOpen[3] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <AnimatePresence>
              {isOpen[3] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="p-4 lg:p-6 pt-2 lg:pt-0 opacity-75">
                    <p>The package includes:</p>
                    <ul className="pl-4">
                      <li>
                        🚫 Custom development or advanced features like
                        memberships, e-commerce, or complex integrations.
                      </li>
                      <li>
                        🚫 Copywriting (you need to provide your content before
                        the design day).
                      </li>
                      <li>
                        🚫 Ongoing website maintenance (offered separately if
                        needed).
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* item 6 */}
        <div className="p-2">
          <div className="bg-white rounded-lg">
            <div
              className="p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer font-theme font-medium text-lg space-x-4"
              onClick={() => toggleFaq(5)}
            >
              <span>What do I need to prepare before the design day?</span>
              {isOpen[5] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <AnimatePresence>
              {isOpen[5] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="p-4 lg:p-6 pt-2 lg:pt-0 opacity-75">
                    <p>To ensure a smooth process, please provide:</p>
                    <ul className="pl-4">
                      <li>
                        ✔ Your logo and branding details (colours, fonts,
                        images)
                      </li>
                      <li>✔ Website copy (text for all pages)</li>
                      <li>✔ Any inspiration or references for design style</li>
                      <li>
                        ✔ Domain & hosting access (or I can help you set it up)
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* item 7 */}
        <div className="p-2">
          <div className="bg-white rounded-lg">
            <div
              className="p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer font-theme font-medium text-lg space-x-4"
              onClick={() => toggleFaq(6)}
            >
              <span>Do you offer payment plans?</span>
              {isOpen[6] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <AnimatePresence>
              {isOpen[6] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="p-4 lg:p-6 pt-2 lg:pt-0 opacity-75">
                    Yes, you can pay 50% upfront to secure your spot, and the
                    remaining 50% on the design day before the final delivery.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* item 8 */}
        <div className="p-2">
          <div className="bg-white rounded-lg">
            <div
              className="p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer font-theme font-medium text-lg space-x-4"
              onClick={() => toggleFaq(7)}
            >
              <span>What payment methods do you accept?</span>
              {isOpen[7] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <AnimatePresence>
              {isOpen[7] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="p-4 lg:p-6 pt-2 lg:pt-0 opacity-75">
                    I accept Payoneer, Wise, Xoom or direct bank transfer.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* item 9 */}
        <div className="p-2">
          <div className="bg-white rounded-lg">
            <div
              className="p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer font-theme font-medium text-lg space-x-4"
              onClick={() => toggleFaq(8)}
            >
              <span>How do I book my "Website in a Day"?</span>
              {isOpen[8] ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <AnimatePresence>
              {isOpen[8] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="p-4 lg:p-6 pt-2 lg:pt-0 opacity-75">
                    To book your day, click here (insert booking link) and
                    schedule your spot! Limited slots available each month.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
