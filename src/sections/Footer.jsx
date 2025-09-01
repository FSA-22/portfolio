'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://github.com/FSA-22?tab=repositories',
      img: '/assets/github.svg',
      alt: 'GitHub',
      label: 'Visit my GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/simeon-fowotade-29a2531b8/',
      img: '/assets/linkedln.png',
      alt: 'LinkedIn',
      label: 'Connect on LinkedIn',
    },
    {
      href: 'https://x.com/FowotadeSimeon?t=jW55aE72DZVfBkLxXct0VQ&s=03',
      img: '/assets/twitter.svg',
      alt: 'Twitter (X)',
      label: 'Follow me on Twitter',
    },
  ];

  return (
    <motion.footer
      className="sm:px-10 px-5 pt-10 xl:pt-20 pb-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-neutral-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Terms + Privacy */}
      <motion.div
        className="text-neutral-400 flex gap-3 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a href="#" className="hover:text-white transition-colors">
          Terms & Conditions
        </a>
        <span>|</span>
        <a href="#" className="hover:text-white transition-colors">
          Privacy Policy
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-10 h-10 rounded-full flex justify-center items-center bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            <img src={social.img} alt={social.alt} className="w-1/2 h-1/2" />
          </a>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.p
        className="text-neutral-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        &copy; {new Date().getFullYear()} FSA. All Rights Reserved
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
