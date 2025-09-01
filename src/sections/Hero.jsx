// Importing a reusable Button component and a list of rotating words/images
import Button from '../component/Button';
import { words } from '../constants';

const Hero = () => {
  return (
    // Main section wrapping the hero area
    <section id="hero" className="relative overflow-hidden">
      {/* Background image absolutely positioned behind content */}
      <div className="absolute top-0 left-0 z-10">
        <img
          src="/images/bg.png"
          alt="Background graphic"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main hero layout: text + image */}
      <div className="hero-layout relative z-20 flex flex-col md:flex-row items-center justify-between gap-10 px-5 md:px-10">
        {/* Left side - hero text */}
        <header className="flex flex-col justify-center md:w-1/2 gap-7">
          {/* Dynamic hero heading with rotating words */}
          <div className="hero-text z-20">
            <h1 className="text-4xl md:text-6xl font-bold leading-snug">
              Shaping
              <span className="slide inline-block ml-2">
                <span className="wrapper">
                  {words.map(({ text, imgPath }) => (
                    <span
                      key={text}
                      className="flex items-center gap-2 md:gap-3 pb-2"
                    >
                      <img
                        src={imgPath}
                        alt={text}
                        className="xl:size-12 md:size-10 size-7 p-1 md:p-2 rounded-full bg-rose-500"
                      />
                      <span>{text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            {/* Extra heading lines */}
            <h1 className="text-4xl md:text-6xl font-bold leading-snug">
              into Real Projects
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold leading-snug">
              that Deliver Results
            </h1>
          </div>

          {/* Supporting description */}
          <p className="text-white-50 md:text-xl leading-relaxed relative z-20">
            Hi, I am{' '}
            <span className="italic font-medium text-rose-100">FSA</span>
            , a Developer and Entrepreneur, based in Nigeria. <br />
            I create beautiful, functional web apps that solve real-world
            problems.
            <br /> With a strong foundation in front-end development, I bring
            ideas to life through clean code and innovative design that engage
            users and drive profitability.
            <br /> Let's work together to build something amazing!
          </p>

          {/* CTA Button */}
          <Button
            className="md:w-80 md:h-16 w-60 h-12"
            id="button"
            text="Check out my work"
          />
        </header>

        {/* Right side - hero image */}
        <figure className="md:w-1/2 w-full">
          <div className="hero-layout-2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/hero-6.jpg"
              alt="Hero Banner"
              className="w-full h-full object-cover rounded-xl max-md:hidden"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
