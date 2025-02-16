import ContactForm from '../components/ContactForm';
import HeroOne from '../components/common/HeroOne';
import ImageSliding from '../components/home/ImageSliding';

const Contact = () => {
  return (
    <section>
      <HeroOne />
      <ImageSliding />
      <div className="py-12 md:py-20">
        {/* topbar content */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h5 className="rounded-full border border-themeGray px-4 py-3 text-center leading-none">
            Booking
          </h5>
          <h1 className="max-w-[600px] text-center font-theme text-4xl font-medium capitalize !leading-[1.175] md:text-5xl">
            Fill out the form below & let's get to know each other!
          </h1>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
