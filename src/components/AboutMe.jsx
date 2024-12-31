import React from "react";
import Heading from "./Heading";
<<<<<<< HEAD
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa";
=======
>>>>>>> b123eddcb553d506188939fb7bd4fa8b89165b65

function AboutMe() {
  return (
    <>
      <div className="mt-3 mb-3 border-b-2 border-white">
        <div className="mt-2 mb-3">
          <Heading textsize="text-lg">About Me</Heading>
          <p className="mt-2 mb-4 lg:mr-20 md:mr-0 mr-0 text-gray-800 dark:text-gray-200">
<<<<<<< HEAD
            <FaUserGraduate className="text-green-500 text-xl" />
=======
>>>>>>> b123eddcb553d506188939fb7bd4fa8b89165b65
            I'm a third-year{" "}
            <span className="font-bold text-green-500">
              Engineering student
            </span>{" "}
            and a passionate{" "}
            <span className="font-bold text-green-500">
              Full-Stack Developer
            </span>{" "}
            specializing in building responsive web applications. Always
            exploring new technologies to enhance my skills, I'm currently open
            to work and eager to bring my creativity and expertise to the next
            project.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
