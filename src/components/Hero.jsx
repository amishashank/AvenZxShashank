import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm Shashank Pandey</h2>
        <p className="text-xl mt-4">Backend Developer | Java, Python & SQL Enthusiast</p>
        <a
          href="https://linkedin.com/in/amishashank"
          className="mt-6 inline-block bg-teal-500 text-white py-3 px-6 rounded hover:bg-teal-600"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
