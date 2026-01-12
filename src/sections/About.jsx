import Globe from 'react-globe.gl';
import Button from '../component/Button';
import { useState } from 'react';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('simeonstat@gmail.com');

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="sm:px-10 px-5 my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-neutral-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                Hi, I’m Fowotade Simeon Adekunle{' '}
              </p>
              <p className="text-[#afb0b6] text-base">
                I am a Frontend Engineer specializing in building scalable,
                high-performance web applications with modern JavaScript
                frameworks. Over the past few years, I have progressed from
                foundational frontend development into delivering
                production-ready interfaces, collaborating closely with product,
                design, and backend teams to ship real-world solutions. I focus
                on writing clean, maintainable code, implementing thoughtful
                UI/UX patterns, and optimizing applications for performance,
                accessibility, and scalability.{' '}
              </p>
              <ul className="text-[#afb0b6] text-base">
                <li>
                  Enoverlab (Internship) — Collaborated with product managers
                  and designers to build Flowpal, a small-business management
                  web application. Contributed to feature development, UI
                  consistency, and component reusability within a team-based
                  environment.
                </li>
                <li>
                  TCU (Frontend Team Co-Lead) — co-led a frontend team building
                  BizEase, an inventory and operations management platform using
                  Next.js. Responsible for architectural decisions, code
                  reviews, and ensuring alignment between product requirements
                  and frontend implementation
                </li>
                <li>
                  Automussh Tech Global — Frontend Engineer Actively developing
                  company product, contributing to feature implementation, UI
                  architecture, and performance optimization. I work with modern
                  frontend tooling to ensure responsive design, smooth user
                  interactions, and maintainable component structures aligned
                  with product growth.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300  bg-neutral-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                Tech Stack
              </p>
              <p className="text-[#afb0b6] text-base">
                I work primarily within the modern JavaScript ecosystem, with a
                strong focus on frameworks and tools that support scalable,
                production-grade applications. Core: JavaScript (ES6+),
                TypeScript, React, Next.js Styling & UI: Tailwind CSS,
                responsive design systems, component-driven development State &
                Data: React Hook Form, Zod, RESTful APIs 3D & Motion: Three.js,
                WebGL-based interactions Tooling: Git, collaborative workflows,
                performance optimization, accessibility best practices I
                prioritize clarity, performance, and long-term maintainability
                over short-term implementations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-black-300  bg-neutral-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              {/* <Globe
                height={326}
                width={326}
                backgroundColor="rgb(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showGraticules
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              /> */}
            </div>
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                Working Remotely, Globally{' '}
              </p>
              <p className="text-[#afb0b6] text-base">
                I am based in Nigeria and work comfortably across multiple time
                zones. I have experience collaborating with distributed teams
                and adapting to async workflows while maintaining strong
                communication and delivery standards. I am open to remote roles,
                contract work, and long-term opportunities where product quality
                and engineering discipline are valued.{' '}
              </p>
              <div className="bg-gray-950">
                <a href="#contact" className="w-fit">
                  <Button
                    name="Contact Me"
                    isBeam
                    containerClass="w-full mt-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full border border-black-300  bg-neutral-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                What Drives Me
              </p>
              <p className="text-[#afb0b6] text-base">
                I enjoy solving complex problems through thoughtful engineering
                and clean interfaces. Building products that users rely on
                motivates me, and I’m particularly energized by turning ideas
                into measurable business value through well-executed frontend
                systems. (This reads more mature and professional than{' '}
                <span className="italic tracking-wide">
                  “making money energizes me,” while still implying impact and
                  value.)
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-black-300  bg-neutral-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="text-[#afb0b6] text-base text-center">
                Reach out directly
              </p>
              <div
                className="cursor-pointer flex justify-center items-center gap-2"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
                  simeonstat@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
