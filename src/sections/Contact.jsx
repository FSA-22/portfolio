'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success/error message

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        'service_goa35yn',
        'template_jexs67e',
        {
          from_name: form.name,
          to_name: 'FSA',
          from_email: form.email,
          to_email: 'simeonstat@gmail.com',
          message: form.message,
        },
        '5D6oo0cwN8cmpmcqm',
      );

      setLoading(false);
      setStatus({
        type: 'success',
        text: '✅ Your message was sent successfully!',
      });

      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setLoading(false);
      console.error(error);
      setStatus({
        type: 'error',
        text: '❌ Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section
      id="contact"
      className="sm:px-10 px-5 py-20 relative overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/assets/terminal.png"
        alt="terminal-background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:text-4xl text-2xl font-bold text-center 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
            bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-center mt-4 text-sm sm:text-base"
        >
          Have an idea, a project, or just want to say hi? Fill out the form
          below — I’d love to hear from you.
        </motion.p>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col space-y-6"
        >
          {/* Full Name */}
          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium">Full Name</label>
            <input
              type="text"
              aria-label="Full Name"
              autoComplete="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full bg-black/50 px-4 py-3 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="janedoe@gmail.com"
              className="w-full bg-black/50 px-4 py-3 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Hi, I’d like to work with you on..."
              className="w-full bg-black/50 px-4 py-3 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              required
            />
          </div>

          {/* Status Message */}
          {status && (
            <p
              className={`text-sm ${
                status.type === 'success' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {status.text}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-lg text-white font-medium shadow-lg hover:opacity-90 active:scale-95 transition flex items-center justify-center gap-2"
          >
            {loading ? 'Sending...' : 'Send Message'}
            <img
              src="/assets/arrow-up.png"
              alt="arrow-up"
              className="w-3 h-3 object-contain invert"
            />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
