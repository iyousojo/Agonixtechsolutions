import React, { useRef } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { X } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    emailjs
      .sendForm(
        "service_hi0gx6q", // your EmailJS service ID
        "template_pjki628", // your EmailJS template ID
        formRef.current,
        "eh6tHKovHMJKsAZdN" // your EmailJS public key
      )
      .then(
        (result) => {
          toast.success("Message sent!");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message: " + (error?.text || "Unknown error"));
        }
      );
  };

  return (
    <section className="w-full py-16 px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 banner-bg banner-text min-h-screen flex items-center justify-center" id="contact">
      <Toaster />
      <div className="max-w-4xl w-full card-bg rounded-2xl shadow-2xl p-12 border border-blue-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-2 tracking-tight text-center drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
          Contact Me
        </h1>
        <p className="text-lg text-blue-600 dark:text-blue-300 mb-8 text-center max-w-xl mx-auto drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
          Feel free to connect with me through any of the channels below, or send me a message directly!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Info & Socials */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-700 dark:text-blue-300 drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]" size={28} />
              <span className="text-blue-700 dark:text-blue-200 break-all drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]">solomonjohnbull676@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-700 dark:text-blue-300 drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]" size={28} />
              <span className="text-blue-700 dark:text-blue-200 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]">+234 9155472765</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-700 dark:text-blue-300 drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]" size={28} />
              <span className="text-blue-700 dark:text-blue-200 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]">Edo state,  Benin City, Nigeria</span>
            </div>
            <div className="mt-2 mb-1 font-semibold text-blue-700 dark:text-blue-300 text-lg drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]">
              My socials <span role="img" aria-label="smile">😊</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://x.com/Argonixtech" target="_blank" rel="noopener noreferrer" aria-label="X">
                <X className="text-blue-700 dark:text-blue-300 hover:text-blue-500 transition-colors drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]" size={28} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-pink-600 dark:text-pink-400 hover:text-pink-500 transition-colors drop-shadow-[0_0_6px_rgba(236,72,153,0.7)]" size={28} />
              </a>
              <a href="https://www.linkedin.com/in/solomon-iyoubhebhe-8347682b1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="text-blue-700 dark:text-blue-300 hover:text-blue-500 transition-colors drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]" size={28} />
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <form ref={formRef} className="flex flex-col space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="px-5 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-200 shadow-sm transition"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="px-5 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-200 shadow-sm transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="px-5 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-200 shadow-sm transition resize-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold py-3 px-12 rounded-lg shadow-lg transition-all duration-200 transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
export { Contact };


