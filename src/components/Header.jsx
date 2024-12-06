import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AvenZ<span className="text-yellow-400">x</span>Shashank</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-teal-400">About</a></li>
            <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
