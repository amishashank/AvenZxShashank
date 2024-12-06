import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4">Feel free to reach out to me for collaborations or opportunities!</p>
        <a
          href="mailto:your-email@example.com"
          className="mt-6 inline-block bg-teal-500 py-3 px-6 rounded hover:bg-teal-600"
        >
          Send an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
