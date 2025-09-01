'use client';

import { useState } from 'react';
import { myProjects } from '../constants';
import { motion } from 'framer-motion';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="work" className="sm:px-10 px-5 my-28">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sm:text-5xl text-3xl font-bold text-center 
          bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
          bg-clip-text text-transparent"
      >
        My Work
      </motion.h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-16 gap-10">
        {/* Project Card */}
        <motion.div
          key={currentProject.title}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br 
            from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-lg p-8 flex flex-col"
        >
          {/* Spotlight Image */}
          <div className="absolute inset-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Logo */}
          <div
            className="relative z-10 p-3 w-fit rounded-xl bg-white/10 backdrop-blur-md"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Text */}
          <div className="relative z-10 mt-6 text-white space-y-4">
            <h3 className="text-2xl font-semibold text-pink-300">
              {currentProject.title}
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {currentProject.desc}
            </p>
            <p className="text-gray-400">{currentProject.subdesc}</p>
          </div>

          {/* Tags & Link */}
          <div className="relative z-10 mt-6 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              {currentProject.tags.map((tag, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-lg p-2 bg-white/10 backdrop-blur-md flex justify-center items-center hover:scale-110 transition"
                >
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-indigo-300 hover:text-pink-400 transition"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>Live Site</span>
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="w-3 h-3"
              />
            </a>
          </div>

          {/* Navigation */}
          <div className="relative z-10 flex justify-between items-center mt-10">
            <button
              onClick={() => handleNavigation('previous')}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 active:scale-90 transition"
            >
              <img
                src="/assets/left-arrow.png"
                alt="left-arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              onClick={() => handleNavigation('next')}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 active:scale-90 transition"
            >
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </motion.div>

        {/* Secondary Section (replace with 3D canvas or custom content later) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center gap-6"
        >
          <img
            src="/images/fts-log.jpg"
            alt="logo"
            className="w-64 rounded-2xl shadow-lg hover:scale-105 transition"
          />
          <p className="text-gray-400 text-sm">
            📩 Copy my email to reach out!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
