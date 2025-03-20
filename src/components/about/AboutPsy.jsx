import image from '/images/about/about_psy.png';
import rabbit from '/images/common/rabbit.png';

const AboutPsy = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-4 items-center">
      {/* left side */}
      <div className="relative w-full lg:w-1/2">
        <img src={image} alt="image" />
      </div>
      <div className="p-4 2xl:p-20 2xl:pr-36 relative w-full lg:w-1/2 max-w-[950px]">
        {/*  */}
        <div className="space-y-4 relative z-10">
          <img
            src={rabbit}
            alt=""
            className="absolute -z-10 right-[-5%] top-[5%]"
          />
          <p className="font-ephesis text-xl md:text-2xl lg:text-5xl">
            Creating designs from my soul to yours
          </p>
          <h4 className="font-medium text-2xl md:text-4xl lg:text-5xl">
            From Psychology Graduate to Brand & Web Designer
          </h4>
          <p className="opacity-75 leading-loose">
            Design Arclight was born from a simple yet powerful belief—great
            design isn’t just about aesthetics; it’s about connection, strategy,
            and psychology.
            <br />
            As a psychology graduate, I’ve always been fascinated by how people
            think, feel, and make decisions. Over time, I realized that branding
            and web design are deeply rooted in human behavior—how a brand is
            perceived, how trust is built, and what makes people take action.
            <br />
            What started as a passion for design slowly evolved into a
            full-fledged business. From experimenting with visuals to studying
            user experience, I merged my love for psychology and design to
            create brands and websites that are not just beautiful but impactful
            and strategic.
            <br />
            At Design Arclight, the mission is clear—to help businesses shine
            with branding and web experiences that leave a lasting impression.
            It’s not just about design; it’s about crafting identities, telling
            stories, and creating connections.{' '}
            <b>And this is just the beginning.</b>
          </p>

          <p className="text-xl md:text-2xl lg:text-3xl font-medium">
            that's my story. ready to share yours ?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPsy;
