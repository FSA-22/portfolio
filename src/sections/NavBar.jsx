import React, { useState } from 'react';
import { navLinks } from '../constants';

const NavItems = ({ closeIsOpen }) => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navLinks.map(({ id, href, name }) => (
        <li
          key={id}
          className="text-neutral-400 hover:text-white max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
        >
          <a
            href={href}
            className="text-lg md:text-base hover:text-white transition-colors"
            onClick={closeIsOpen}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const closeIsOpen = () => setIsOpen(false);

  return (
    <header className="text-white bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items py-5 mx-auto sm:px-10 px-5">
          <a
            href="/"
            className=" flex justify-center items-center gap-2 text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            <img
              src="/assets/FSA.jpg"
              alt="FSA Passport"
              className="h-6 w-6 object-contain rounded-full flex"
            />
            FSA
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 bg-neutral-950 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden flex justify-center items-center 
          ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <nav className="p-5">
          <NavItems closeIsOpen={closeIsOpen} />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
