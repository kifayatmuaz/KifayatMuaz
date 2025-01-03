// src/App.js

import React, { useState } from "react";
import "./index.css";

// Add your social media links
const socialLinks = {
  linkedin: "https://www.linkedin.com/in/kanjudmuabbaz/",
  github: "https://github.com/kanjudmuabbaz",
  Facebook: "https://facebook.com/kanjud.muabbaz",
  instagram: "https://www.instagram.com/this.is.meowbaaz",
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-br from-[#2a4365] to-[#4e73df] min-h-screen flex flex-col text-white">
      {/* Header Section with Hamburger Menu */}
      <header className="bg-[#1a365d] py-6 shadow-lg relative">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-8">
          <div className="text-3xl font-extrabold">Kifayat Muaz</div>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#about"
                className="text-lg hover:text-[#ffcc00] transition-all"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg hover:text-[#ffcc00] transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Hamburger icon */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <button className="text-3xl">
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`absolute top-20 left-0 right-0 bg-[#1a365d] p-6 ${
            isMenuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <ul className="flex flex-col space-y-6">
            <li>
              <a
                href="#about"
                className="text-lg hover:text-[#ffcc00] transition-all"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg hover:text-[#ffcc00] transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col items-center justify-center py-16 bg-[#1a365d] max-w-4xl mx-auto mt-16 px-8 rounded-2xl shadow-2xl"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
          <img
            src="./profile.jpg"
            alt="Kifayat Muaz"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">Kifayat Muaz</h1>
        <p className="text-xl mb-6 text-center text-gray-300 leading-relaxed">
          I am Kifayat Muaz, an avid researcher specializing in International
          Relations. I delve into the intricacies of global politics, diplomacy,
          and international cooperation.
        </p>
        <p className="text-lg text-center text-gray-300 leading-relaxed mb-8">
          My focus is on geopolitics and the evolving role of technology in
          shaping international dynamics. Join me in uncovering the challenges
          that define our interconnected world.
        </p>

        {/* Social Links */}
        <div className="mt-8">
          <ul className="mt-4 flex justify-center space-x-6">
            {/* LinkedIn Icon */}
            <li>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-3xl transition-all duration-300 transform hover:scale-105"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            {/* GitHub Icon */}
            <li>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 text-3xl transition-all duration-300 transform hover:scale-105"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            {/* Facebook Icon */}
            <li>
              <a
                href={socialLinks.Facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 text-3xl transition-all duration-300 transform hover:scale-105"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            {/* Instagram Icon */}
            <li>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 text-3xl transition-all duration-300 transform hover:scale-105"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-8 bg-[#1a365d] max-w-4xl mx-auto rounded-2xl shadow-xl my-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-[#334e68] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffcc00] shadow-md"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-[#334e68] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffcc00] shadow-md"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-[#334e68] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffcc00] shadow-md"
            rows="6"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 rounded-lg bg-[#ffcc00] text-[#333] font-semibold text-lg hover:bg-[#ffbb33] transition-all"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-white py-6 text-center mt-auto">
        <p>&copy; 2025 Kifayat Muaz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
