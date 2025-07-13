import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/xwpqeldj', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('✅ Message sent successfully!');
      form.reset();
    } else {
      setStatus('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-pink-100 to-purple-200 text-center">
      <h2 className="text-4xl font-bold mb-6 underline text-gray-800">Contact Me</h2>
      <p className="mb-10 text-lg text-gray-700">Have a project or just want to say hi? Fill in the form below!</p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
        {status && <p className="text-green-700 mt-4">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
