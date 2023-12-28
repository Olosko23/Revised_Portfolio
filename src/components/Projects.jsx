import React from "react";
import GitHub from "../assets/GitHub.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "The Stream 254",
      description: "A standalone all inclusive live - TV streaming service...",
      imageUrl: GitHub,
      link: "https://thestream254.netlify.app/",
    },
    {
      id: 2,
      title: "F1 API",
      description:
        "A free API to retrieve season data such as races, standing, drivers and teams. Change the last url parameter from drivers to races or teams",
      imageUrl: GitHub,
      link: "https://f1-z1ad.onrender.com/api",
    },
    {
      id: 3,
      title: "Assist Africa",
      description:
        "A freelancing platform for virtual assistants connecting freelancers to clients all over Africa",
      imageUrl: GitHub,
      link: "https://beta-assist.netlify.app/",
    },
  ];

  return (
    <div className="py-10">
      <section className="max-w-5xl mx-auto px-3">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <p className="text-lg text-gray-800 text-center py-4 my-2">
            Explore some of the notable projects I've worked on below.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-300 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline block mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
