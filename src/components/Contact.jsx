import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";  // Fixed the import
import { FaInstagram } from "react-icons/fa";
import { CONTACT } from "../constants";
import { motion } from "motion/react";
import { useState } from "react";
import emailjs from 'emailjs-com'; // Import emailjs for form handling

const Info = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_tyhyrv5',  // Replace with your EmailJS service ID
        'template_dyem2aj',  // Replace with your EmailJS template ID
        e.target,
        'g2019g8Nov6N7CRlm'      // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Show confirmation message
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold text-white-800"
      >
        Contact Form
      </motion.h2>

      {/* Contact Form */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="space-y-6 mt-10"
      >
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-lg text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg text-gray-600">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject and Add Your Email"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <div className="text-center text-green-600 mt-6">
            <p>Thank you for contacting me! I'll get back to you soon.</p>
          </div>
        )}
      </motion.div>

      {/* Social Media Links */}
      <div className="m-8 flex items-center justify-center gap-6 text-3xl text-gray-700">
        <a
          href="https://www.linkedin.com/in/nakul-j/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-700 transition duration-300 ease-in-out"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nakul139"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-800 transition duration-300 ease-in-out"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-blue-400 transition duration-300 ease-in-out"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/nakul.jainnn/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition duration-300 ease-in-out"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Info;
