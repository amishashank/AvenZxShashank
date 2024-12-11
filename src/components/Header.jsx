import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-8 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-6xl font-bold bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text">AvenZ<span className="text-rose-600">x</span>Shashank</h1>
        <nav>
          <ul className="flex space-x-6 text-2xl">
            <li><a href="#about" className="hover:text-emerald-800 hover:text-3xl">About</a></li>
            <li><a href="#skills" className="hover:text-emerald-800 hover:text-3xl">Skills</a></li>
            <li><a href="#projects" className="hover:text-emerald-800 hover:text-3xl">Projects</a></li>
            <li><a href="#contact" className="hover:text-emerald-800 hover:text-3xl">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
