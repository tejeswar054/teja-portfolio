import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_q68zyo3',        // ✅ Your EmailJS service ID
      'template_cgonldd',       // ✅ Your template ID
      form.current,
      'mcy5Qt1dEBVfvZF1P'       // ✅ Your public key
    )
    .then((result) => {
      alert("✅ Message sent successfully!");
      form.current.reset();
    }, (error) => {
      alert("❌ Failed to send message. Please try again.");
      console.error(error);
    });
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-pink-100 to-purple-200 text-center">
      <h2 className="text-4xl font-bold mb-6 underline text-gray-800">Contact Me</h2>
      <p className="mb-10 text-lg text-gray-700">Have a project or just want to say hi? Fill in the form below!</p>

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
        <input
          type="text"
          name="name"                             // ✅ Match with {{name}} in EmailJS
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"                            // ✅ Match with {{email}} in EmailJS
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"                          // ✅ Match with {{message}} in EmailJS
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
      </form>
    </section>
  );
};

export default Contact;
