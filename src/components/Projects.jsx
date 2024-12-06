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
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
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
