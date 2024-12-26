import React from "react";
import Heading from "./Heading";
function AboutMe() {
  return (
    <>
      <div className="mt-2 mb-3 ">
        <Heading textsize="text-l ">About Me</Heading>
        <p className="mt-2 mb-4 lg:mr-20 md:mr-0 mr-0 text-gray-800 dark:text-gray-200">
          I'm a third-year{" "}
          <span className="font-bold text-green-500">Engineering student</span>{" "}
          and a passionate{" "}
          <span className="font-bold text-green-500 ">
            Full-Stack Developer
          </span>{" "}
          specializing in building responsive web applications. Always exploring
          new technologies to enhance my skills, I'm currently open to work and
          eager to bring my creativity and expertise to the next project.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
