// src/App.js

import React from "react";
import "./index.css";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#2a4365] to-[#4e73df] min-h-screen flex flex-col text-white">
      {/* Header Section */}
      <header className="bg-[#1a365d] py-6 shadow-lg">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-8">
          <div className="text-3xl font-extrabold">Kifayat Muaz</div>
          <ul className="flex space-x-8">
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
        </nav>
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
        <div className="flex space-x-6 mt-6">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-[#1da1f2] text-white shadow-xl hover:bg-[#0d8bc5] transition-all"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-[#0077b5] text-white shadow-xl hover:bg-[#005a8d] transition-all"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-[#333] text-white shadow-xl hover:bg-[#555] transition-all"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
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
