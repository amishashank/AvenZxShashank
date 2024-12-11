import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="w-48 h-48 bg-purple-400 opacity-20 rounded-full blur-3xl absolute top-24 left-16"></div>
        <div className="w-64 h-64 bg-blue-300 opacity-15 rounded-full blur-3xl absolute top-36 right-24"></div>
        <div className="w-56 h-56 bg-indigo-400 opacity-25 rounded-full blur-3xl absolute bottom-12 left-36"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>

        {/* Content Box */}
        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto bg-slate-300">
          {/* Profile Image */}
          <img
            src="/images/shashank.jpg" // Ensure this image is in the public/images folder
            alt="Shashank Pandey"
            className="rounded-full w-40 h-40 mb-6 shadow-lg border-4 border-blue-400"
          />

          {/* Introduction */}
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed mx-auto ">
            I'm Shashank Pandey, an aspiring software developer with a strong passion for learning and building impactful applications. I'm currently honing my skills in Java, Spring Boot, and related technologies, eager to contribute to innovative projects.
          </p>

          {/* Skills & Expertise */}
          <div className="flex flex-wrap justify-center items-center mt-4">
            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full mr-2 mb-2">Java</span>
            <span className="bg-indigo-100 text-indigo-500 px-3 py-1 rounded-full mr-2 mb-2">Spring Boot</span>
            <span className="bg-purple-100 text-purple-500 px-3 py-1 rounded-full mr-2 mb-2">Hibernate</span>
            <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full mr-2 mb-2">MySQL</span>
            <span className="bg-yellow-100 text-yellow-500 px-3 py-1 rounded-full mr-2 mb-2">RESTful APIs</span>
          </div>

          {/* Career Goals */}
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed mt-4">
            I'm actively seeking opportunities to learn and grow within the software development field. I'm driven to contribute to meaningful projects and build a successful career as a skilled and impactful software engineer.
          </p>

          {/* Call to Action */}
          <a href="/projects" className="text-blue-500 hover:underline mt-4">
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
