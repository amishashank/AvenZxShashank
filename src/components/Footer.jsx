import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.269c-.967 0-1.75-.784-1.75-1.75s.783-1.75 1.75-1.75c.966 0 1.75.783 1.75 1.75s-.784 1.75-1.75 1.75zm13.5 12.269h-3v-5.5c0-1.667-2-1.536-2 0v5.5h-3v-11h3v1.528c1.396-2.586 5-2.777 5 2.476v6.996z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/amishashank",
    },
    {
      name: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-900"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.839 1.236 1.911 1.236 3.221 0 4.61-2.807 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.22.694.825.577 4.765-1.585 8.2-6.081 8.2-11.383 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/amishashank",
    },
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.498 4.388c-.883.391-1.83.653-2.828.774 1.014-.608 1.794-1.57 2.162-2.724-.951.563-2.004.974-3.127 1.2a5.637 5.637 0 0 0-9.62 5.131c-4.684-.234-8.838-2.475-11.64-5.891-.484.828-.759 1.786-.759 2.809 0 1.94 1.008 3.655 2.537 4.656-.935-.029-1.815-.287-2.582-.716v.072c0 2.71 1.926 4.978 4.494 5.498-.47.128-.967.198-1.464.198-.358 0-.706-.035-1.046-.104.707 2.208 2.758 3.812 5.189 3.854-1.903 1.493-4.3 2.384-6.915 2.384-1.132 0-2.247-.068-3.338-.227 3.164 2.033 6.92 3.22 10.978 3.22 13.165 0 20.345-10.927 20.345-20.451 0-.31-.007-.62-.021-.93 1.395-.995 2.617-2.252 3.566-3.671z" />
        </svg>
      ),
      url: "https://twitter.com/amishashank",
    },
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-800"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22.67 0h-21.34c-.734 0-1.34.604-1.34 1.34v21.34c0 .736.606 1.34 1.34 1.34h11.708v-9.158h-3.094v-3.625h3.094v-2.688c0-4.309 2.527-6.688 6.686-6.688 1.938 0 3.608.144 4.091.207v3.163h-2.863c-2.125 0-2.563 1.018-2.563 2.505v3.027h4.366l-.567 3.625h-3.799v9.158h7.459c.734 0 1.34-.604 1.34-1.34v-21.34c0-.736-.606-1.34-1.34-1.34z" />
        </svg>
      ),
      url: "https://facebook.com/amishashank",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Shashank Pandey. All Rights Reserved.
        </p>
        <p className="text-xs mb-4">
          Made with <span className="text-red-500">❤️</span> using React & TailwindCSS.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white text-gray-800 rounded-full shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:text-white transition-transform transform hover:scale-110"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
