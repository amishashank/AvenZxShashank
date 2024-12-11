import React from "react";
import { FaJava, FaPython, FaDatabase, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiTailwindcss, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava className="text-red-500 text-4xl" /> },
  { name: "Python", icon: <FaPython className="text-blue-500 text-4xl" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700 text-4xl" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-600 text-4xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-400 text-4xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-blue-300 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-4xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-purple-500 text-4xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-lime-400"
            >
              {skill.icon}
              <p className="text-gray-700 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

