import React, { useState } from "react";

const Contact = () => {
  const [showJobForm, setShowJobForm] = useState(false);
  const [showFreelanceForm, setShowFreelanceForm] = useState(false);

  const [formDataJob, setFormDataJob] = useState({
    name: "",
    email: "",
    position: "",
    resume: null,
    message: "",
  });

  const [formDataFreelance, setFormDataFreelance] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    projectDetails: "",
  });

  const handleChangeJob = (e) => {
    const { name, value } = e.target;
    setFormDataJob((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeFreelance = (e) => {
    const { name, value } = e.target;
    setFormDataFreelance((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormDataJob((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();
    alert("Job Inquiry Sent! I'll get back to you soon.");
    setFormDataJob({ name: "", email: "", position: "", resume: null, message: "" });
    setShowJobForm(false);
  };

  const handleSubmitFreelance = (e) => {
    e.preventDefault();
    alert("Freelance Proposal Sent! Looking forward to collaborating.");
    setFormDataFreelance({ name: "", email: "", projectType: "", budget: "", projectDetails: "" });
    setShowFreelanceForm(false);
  };

  const closeModal = () => {
    setShowJobForm(false);
    setShowFreelanceForm(false);
  };

  return (
    <section id="contact" className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="mt-4">I'm looking for job opportunities, as well as freelance projects. Please reach out if you'd like to connect!</p>

        {/* Buttons to show the forms */}
        <div className="mt-8 space-x-4">
          <button
            onClick={() => { setShowJobForm(true); setShowFreelanceForm(false); }}
            className="bg-teal-500 py-3 px-6 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Job Inquiry
          </button>
          <button
            onClick={() => { setShowFreelanceForm(true); setShowJobForm(false); }}
            className="bg-teal-500 py-3 px-6 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Freelance Project
          </button>
        </div>

        {/* Modal for Job Inquiry Form */}
        {showJobForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-black p-6 rounded-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-black font-bold text-xl"
              >
                X
              </button>
              <h3 className="text-2xl font-semibold mb-4">Job Inquiry</h3>
              <form onSubmit={handleSubmitJob} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-left">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formDataJob.name}
                    onChange={handleChangeJob}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-left">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formDataJob.email}
                    onChange={handleChangeJob}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-left">Position</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formDataJob.position}
                    onChange={handleChangeJob}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-left">Resume</label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-left">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formDataJob.message}
                    onChange={handleChangeJob}
                    rows="4"
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full bg-teal-500 py-3 px-6 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  Submit Job Inquiry
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Modal for Freelance Project Form */}
        {showFreelanceForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-black p-6 rounded-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-black font-bold text-xl"
              >
                X
              </button>
              <h3 className="text-2xl font-semibold mb-4">Freelance Project</h3>
              <form onSubmit={handleSubmitFreelance} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-left">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formDataFreelance.name}
                    onChange={handleChangeFreelance}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-left">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formDataFreelance.email}
                    onChange={handleChangeFreelance}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-left">Project Type</label>
                  <input
                    type="text"
                    id="projectType"
                    name="projectType"
                    value={formDataFreelance.projectType}
                    onChange={handleChangeFreelance}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-left">Budget</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formDataFreelance.budget}
                    onChange={handleChangeFreelance}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="projectDetails" className="block text-left">Project Details</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formDataFreelance.projectDetails}
                    onChange={handleChangeFreelance}
                    rows="5"
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full bg-teal-500 py-3 px-6 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  Submit Freelance Proposal
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

