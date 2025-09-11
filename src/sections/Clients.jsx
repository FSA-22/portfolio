'use client';

import { clientReviews } from '../constants';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Clients = () => {
  return (
    <section className="sm:px-10 px-5 my-10">
      {/* Animated Title */}
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="sm:text-5xl text-3xl font-extrabold text-center 
                   bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 
                   bg-clip-text text-transparent"
      >
        Clients
      </motion.h3>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-14">
        {clientReviews.map(({ id, name, review, img, position }, index) => (
          <motion.div
            key={id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              rotate: [-0.5, 0.5, 0],
              transition: { duration: 0.4 },
            }}
            className="rounded-2xl p-6 md:p-10 col-span-1 
                       bg-gradient-to-br from-[#1e1e2f] via-[#29294a] to-[#1e1e2f]
                       shadow-xl shadow-indigo-900/30 
                       backdrop-blur-md border border-white/10"
          >
            {/* Review Text */}
            <p className="text-gray-100 font-light leading-relaxed italic">
              “{review}”
            </p>

            {/* Client Info */}
            <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-8">
              <div className="flex gap-3 items-center">
                <motion.img
                  src={img}
                  alt={name}
                  className="w-12 h-12 rounded-full border border-pink-500"
                  whileHover={{ scale: 1.15 }}
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-white">{name}</p>
                  <p className="text-indigo-300 md:text-base text-sm font-light">
                    {position}
                  </p>
                </div>
              </div>

              {/* Star Ratings */}
              <div className="flex self-end items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.img
                    key={i}
                    src="/assets/star.png"
                    alt="star-ratings"
                    className="w-5 h-5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.1 * i,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
