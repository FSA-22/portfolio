import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

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

      alert('Your message sent successfully');

      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);

      console.log(error);

      alert('Something went wrong!');
    }
  };

  return (
    <section className="sm:px-10 px-5 my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="max-w-xl relative z-10 sm:px-10 px-5 md:mt-10 xl:mt-30 mt-5">
          <h3 className="sm:text-3xl text-2xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
            Contact Me
          </h3>
          <p className="text-[13px] md:text-[14px] sm:text-[14px] text-white mt-2">
            Whether you are looking to build a new website, improve your
            existing platforms, or bring a unique project to life , I'm here to
            help, please contact me here, i will be super glad to deliver an
            attractive product.
          </p>

          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col space-y-5"
          >
            <label htmlFor="" className="space-y-3">
              <span className="text-lg text-white">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-black/80 px-5 py-2 sm:min-h-14 min-h-12 text-amber-100 rounded-lg placeholder:text-gray-500 text-base shadow-gray-950 shadow-xl focus:outline-none"
                placeholder="Jane Doe"
                required
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="text-lg text-white">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-black/80 px-5 py-2 sm:min-h-14 min-h-12 rounded-lg text-amber-100 placeholder:text-gray-500 text-base shadow-gray-950 shadow-xl focus:outline-none"
                placeholder="janedoe@gmail.com"
                required
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="text-lg text-white">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/80 px-5 py-2 min-h-14 rounded-lg text-amber-100 placeholder:text-gray-500 text-base shadow-gray-950 shadow-xl focus:outline-none"
                placeholder="Hi, I like to engage your...."
                required
              />
            </label>

            <button
              className="bg-gray-800/80 px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending' : 'Send Message'}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="w-2.5 h-2.5 object-contain invert brightness-0"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
