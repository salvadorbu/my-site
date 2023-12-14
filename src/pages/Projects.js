import React from "react";

import quickReadImage from "../assets/quickread.png";
import eyeTrackImage from "../assets/eyetracker.png";
import discordBotImage from "../assets/discord_bot.png";
import courseCurveImage from "../assets/coursecurve.png";

const projects = [
  {
    id: 1,
    title: "QuickRead",
    description:
      "A fast multithreaded pattern searching tool for large text or database files. I leveraged mmap from the Linux API to avoid loading the entire \
    file into memory, and implemented the Boyer-Moore string search algorithm. Multiple threads are used to speedup the file\
     search, though this feature mainly provides benefits with files stored in SSDs.",
    imageUrl: quickReadImage,
    link: "https://github.com/salvadorbu/quickread",
  },
  {
    id: 2,
    title: "CourseCurve",
    description:
      "An accessible course scheduling website that gives students the optimal class sections for a course they want to take. The student inputs \
    the class they want to take and the frontend, designed in React JS, will display a table with a list of CRNs (course IDs) for the top rated courses they want to take. \
    The rating calculations are made in the SpringBoot backend, which take into account professor ratings, institutional data (i.e. GPAs), and building locations. ",
    imageUrl: courseCurveImage,
    link: "https://github.com/salvadorbu/CourseScheduler",
  },
  {
    id: 3,
    title: "Browser Eye Tracker",
    description:
      "An accessibility project that read positional data from the tobii eye tracker engine. After calibrating the coordinates, the program determines which html element is closest to where the user is looking and encloses the element with a red outline. The user can also select buttons and check boxes by closing their eyes for half a second. This was part of an effort to navigate a robot's control panel without having to use a keyboard or mouse.",
    imageUrl: eyeTrackImage,
    link: "https://github.com/salvadorbu/robot-script",
  },
  {
    id: 4,
    title: "Canvas Discord Bot",
    description:
      "A hackathon project where we created a discord bot that was integrated with Canvas (a commonly used learning management system for universitites). After registering your school information with the bot, it has the ability to display pending assignments and submit files.",
    imageUrl: discordBotImage,
    link: "https://github.com/salvadorbu/Hackviolet",
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
            <a
              className="text-backblue hover:text-sky-600"
              href={project.link}
              style={{
                fontFamily: "futura",
                fontWeight: "bold",
                fontSize: "24px",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
            <p style={{ fontFamily: "futura", fontWeight: "bold" }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
