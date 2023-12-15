import React from "react";
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <iframe src={resume} title="Resume" width="60%" height="100%" />
    </div>
  );
};

export default Resume;
