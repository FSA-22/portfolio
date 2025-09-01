'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingMessage = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = 'Welcome Here';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        // Delay before completing
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="loading-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#23222e] text-rose-400"
        role="alert"
        aria-live="assertive"
      >
        {/* Typing Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-4 text-4xl font-mono font-bold"
        >
          {text}
          <span className="animate-blink" aria-hidden="true">
            |
          </span>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="w-[200px] h-[2px] rounded relative overflow-hidden origin-left"
        >
          <div className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 shadow-md animate-loading-bar"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingMessage;
