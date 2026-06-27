import React, { useState } from "react";
import { DATA } from "../constants";
import Navbar from "../components/Navbar";

const PortfolioCard = ({ item, onClick }) => (
  <div
    onClick={() => onClick(item)}
    className="cursor-pointer bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:-translate-y-2 transition"
  >
    <div className="aspect-[5/3] bg-white/10 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-6">
      <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
        {item.category}
      </span>

      <h3 className="text-xl font-bold mt-4">
        {item.title}
      </h3>

      <p className="text-gray-400 mt-2">
        {item.description}
      </p>
    </div>
  </div>
);

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const webProjects = DATA.portfolioProjects.filter(
    item => item.group === "web"
  );

  const dataProjects = DATA.portfolioProjects.filter(
    item => item.group === "data"
  );

  return (
    <div className="max-w-7xl mx-auto px-8">

      {/* Navbar */}
      <Navbar />

      {/* WEB & UI/UX */}
      <section id="web" className="py-16">
        <h2 className="text-5xl font-bold mb-4">
          Web And UI/UX Design
        </h2>

        <p className="text-gray-400 mb-10 leading-relaxed">
          Web and UI/UX projects designed to deliver intuitive, functional, and visually appealing user experiences.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {webProjects.map((item, i) => (
            <PortfolioCard
              key={i}
              item={item}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* DATA */}
      <section id="data" className="py-16">
        <h2 className="text-5xl font-bold mb-4">
          Data & Administration
        </h2>

        <p className="text-gray-400 mb-10 leading-relaxed">
          Data processing, reporting, documentation, and administration projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataProjects.map((item, i) => (
            <PortfolioCard
              key={i}
              item={item}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* MODAL POPUP DETAIL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

          <div className="bg-[#111] max-w-2xl w-full rounded-2xl p-6 relative">

            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />

            {/* Title */}
            <h2 className="text-2xl font-bold">
              {selectedProject.title}
            </h2>

            {/* Category */}
            <span className="inline-block mt-2 text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
              {selectedProject.category}
            </span>

            {/* Description */}
            <p className="text-gray-300 mt-4">
              {selectedProject.longDescription || selectedProject.longdescription}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.tools?.map((tool, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 px-2 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-6">
              {selectedProject.link?.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-blue-400/20 bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-purple-600/20 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:from-blue-600 hover:via-cyan-500 hover:to-indigo-600 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <span>{item.label}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H8M17 7V16"
                    />
                  </svg>
                </a>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Portfolio;
