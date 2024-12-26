import React from "react";
import Heading from "./Heading";

const Skill = () => {
  const skills = [
    "Data Structure and Algorithm",
    "Object Oriented Programming",
    "JavaScript",
    "Python",
    "C++",
    "React.js",
    "Tailwind Css",
    "Node.js",
    "Express.js",
    "Mongodb",
    "Mongoose",
    "Git",
    "Github",
  ];

  return (
    <div className="mb-3 ">
      <div>
        {" "}
        <Heading>Skills</Heading>
      </div>
      <div className="flex flex-wrap gap-y-4 gap-x-1 py-9 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-green-700 text-white py-2 px-3 mx-1 rounded-lg shadow-md hover:bg-green-800 transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
