// src/App.js

import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4e73df] to-[#1f3c71] flex flex-col items-center">
      {/* Navigation Bar */}
      <header className="w-full bg-[#2e4372] text-white py-6 fixed top-0 z-50 shadow-md">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-semibold">Kifayat Muaz</div>
          <ul className="flex space-x-8 list-none m-0 p-0">
            <li>
              <a href="#about" className="hover:text-[#ffcc00] transition-all">
                About Me
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#ffcc00] transition-all"
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
        className="flex flex-col items-center justify-center mt-24 p-8 bg-[#2e4372] rounded-xl shadow-lg max-w-3xl mx-auto my-12"
      >
        <img
          src="./profile.jpg"
          alt="Kifayat Muaz"
          className="w-48 h-48 rounded-full mb-6 border-4 border-[#ffcc00] shadow-lg transform transition-all duration-300 hover:scale-110 object-cover"
        />
        <h1 className="text-3xl font-bold text-white mb-4">Kifayat Muaz</h1>
        <p className="text-lg text-gray-200 mb-4 text-center leading-relaxed">
          I am Kifayat Muaz, a passionate researcher in International Relations.
          My work revolves around analyzing global politics, exploring
          diplomacy, and fostering international cooperation. Through my
          research, I aim to contribute to a deeper understanding of global
          dynamics and policy-making.
        </p>
        <p className="text-lg text-gray-200 mb-6 text-center leading-relaxed">
          With a keen interest in geopolitics and technology’s role in
          international affairs, I bring a unique perspective to the field. Join
          me on this journey to explore and address the challenges of our
          interconnected world.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#1da1f2] text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#0077b5] text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#333] text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#2e4372] py-12 px-6 max-w-3xl mx-auto my-12 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl text-center font-bold text-white mb-8">
          Contact Me
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-white text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffcc00] shadow-sm"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-white text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffcc00] shadow-sm"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-white text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffcc00] shadow-sm"
            rows="6"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 rounded-lg bg-[#ffcc00] text-[#333] font-semibold text-lg transition-transform duration-300 hover:bg-[#ffbb33] hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#2e4372] text-white py-4 text-center mt-auto">
        <p>&copy; 2025 Kifayat Muaz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
