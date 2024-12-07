import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 bg-gradient-to-r from-blue-300 to-blue-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
        <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
          <img
            src="/shashank/public/images/shashank.jpg" // Replace with your avatar/image
            alt="Shashank Pandey"
            className="rounded-full w-32 h-32 mb-6 shadow-lg"
          />
          <p className="text-gray-700 text-lg sm:text-base md:text-xl mx-auto">
            Enthusiastic fresher with a strong foundation in Java, Spring Boot,
            Hibernate, and MySQL. Skilled in developing REST APIs, backend
            systems, and working with frontend technologies like HTML, CSS, and
            JavaScript. Seeking an entry-level backend developer or software
            developer position to apply my skills and contribute to impactful
            software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
