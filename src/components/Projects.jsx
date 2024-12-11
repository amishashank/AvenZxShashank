import React from "react";

const projects = [
  {
    title: "Movie Rest API",
    description: "A backend API to manage movie details using Spring Boot.",
    technologies: ["Spring Boot", "Java", "MySQL"],
    link: "https://github.com/amishashank/movie-rest-api",
  },
  {
    title: "Diabetes Prediction App",
    description: "A machine learning-based web app to predict diabetes risk.",
    technologies: ["Python", "Flask", "ML"],
    link: "https://github.com/amishashank/diabetes-prediction",
  },
  {
    title: "AvenZxShashank",
    description: "A collaborative project showcasing innovative solutions in web development.",
    technologies: ["JavaScript", "React", "Node.js"],
    link: "https://github.com/amishashank/AvenZxShashank",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="mt-4 text-sm text-teal-600">
                {project.technologies.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-teal-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
