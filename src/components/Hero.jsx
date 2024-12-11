import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center"
    >
      <div className="text-center px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          Hi, I'm Shashank Pandey
        </h2>
        <p className="text-lg md:text-2xl mt-4 text-gray-300">
          Backend Developer | Java, Python & SQL Enthusiast
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="https://linkedin.com/in/amishashank"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transform hover:scale-105 transition-transform"
          >
            Connect on LinkedIn
          </a>
          <a
            href="#projects"
            className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transform hover:scale-105 transition-transform"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
