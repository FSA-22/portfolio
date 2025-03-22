import Globe from "react-globe.gl";
import Button from "../component/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("simeonstat@gmail.com");

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
                Hi, I'm Fowotade Simeon Adekunle
              </p>
              <p className="text-[#afb0b6] text-base">
                I am a Frontend Software Developer and have consistently
                improved my development skills over a year plus, working on
                several projects.
              </p>
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
                I currently focused on few stacks, Nextjs, javascripts,
                typescripts, threejs and more...
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-black-300  bg-neutral-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgb(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showGraticules
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                I work remotely across most timezones
              </p>
              <p className="text-[#afb0b6] text-base">
                I'm based in Nigeria and i'm available for remote jobs.
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
                My passion
              </p>
              <p className="text-[#afb0b6] text-base">
                I love solving problems, building products excits me, in the
                world of software engineering I like to make a melodious sound.
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
              <p className="text-[#afb0b6] text-base text-center">Copy my Email</p>
              <div
                className="cursor-pointer flex justify-center items-center gap-2"
                onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
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
