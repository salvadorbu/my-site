import React from "react";

import quickReadImage from "../assets/quickread.png";

const projects = [
  {
    id: 1,
    title: "QuickRead",
    description:
      "A fast multithreaded pattern searching tool for large text or database files. I leveraged mmap from the Linux API to avoid loading the entire \
    file into memory, and implemented the Boyer-Moore string search algorithm. Multiple threads are used to speedup the file\
     search, though this mainly just beneficial for files stored in SSDs.",
    imageUrl: quickReadImage,
    link: "https://github.com/salvadorbu/quickread",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    imageUrl: "url-to-image",
    link: "link-to-project",
  },
];

const Projects = () => {
  return (
    <div className="projects-container" style={{ padding: "20px" }}>
      <h1 className="text-5xl text-periwinkle text-center">My Projects</h1>
      <div
        className="projects-grid"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              width: "350px",
              margin: "40px",
              padding: "20px",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              borderRadius: "15px",
              backgroundColor: "#9edbf6",
            }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <a href={project.link} style={{ fontFamily: 'mono', fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
            <p style={{ fontFamily: 'mono', fontWeight: 'bold' }}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
