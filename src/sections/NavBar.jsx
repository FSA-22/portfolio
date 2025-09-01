import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants';

const NavItems = ({ closeIsOpen }) => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navLinks.map(({ id, href, name }) => (
        <motion.li
          key={id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-rose-300 hover:text-white py-2 max-sm:px-5 
            max-sm:w-full max-sm:rounded-xl transition-colors"
        >
          <a
            href={href}
            onClick={closeIsOpen}
            className="text-lg md:text-base transition-all duration-300
              bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent 
              hover:from-pink-400 hover:to-rose-500"
          >
            {name}
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const closeIsOpen = () => setIsOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 z-30 backdrop-blur-md bg-neutral-900/70">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 px-5 sm:px-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <img
              src="/assets/FSA.jpg"
              alt="FSA picture profile"
              className="h-8 w-8 object-cover rounded-full"
            />
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              FSA
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-rose-300 hover:text-white focus:outline-none transition"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle"
              className="w-7 h-7"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute left-0 right-0 bg-neutral-950/95 backdrop-blur-md z-20 sm:hidden"
          >
            <nav className="p-5 flex justify-center">
              <NavItems closeIsOpen={closeIsOpen} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
