import React from "react";
import profilePhoto from "../assets/profilepicture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const About = () => {
  return (
    <div className="relative font-bungee h-screen flex justify-center items-center">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col mr-2">
          <span className="text-7xl">Salvador Buenadicha</span>
          <div className="flex items-center">
            <p className="text-base mr-2">
              Computer Science student at Virginia Tech
            </p>
            <a
              href="https://github.com/salvadorbu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={icon({ name: "github", style: "brands" })}
                className="pr-2"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/salvador-buenadicha-calvo-59b602241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={icon({ name: "linkedin", style: "brands" })}
              />
            </a>
          </div>
        </div>
        <img
          src={profilePhoto}
          alt="Profile"
          className="rounded-full w-42 h-42 object-cover"
        />
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col items-center">
        <img
          src={profilePhoto}
          alt="Profile"
          className="rounded-full w-42 h-42 object-cover mb-4"
        />
        <div className="text-center">
          <span className="text-xl block">Salvador Buenadicha</span>
          <div className="mt-2">
            <p className="text-sm">
              Computer Science student at Virginia Tech
            </p>
            <a
              href="https://github.com/salvadorbu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={icon({ name: "github", style: "brands" })}
                className="pr-2"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/salvador-buenadicha-calvo-59b602241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={icon({ name: "linkedin", style: "brands" })}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
