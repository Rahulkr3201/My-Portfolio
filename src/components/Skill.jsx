import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaPython, FaCogs } from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import Heading from "./Heading";

const Skill = () => {
  const skills = [
    { name: "Data Structure and Algorithm", icon: <FaCogs /> },
    { name: "Object Oriented Programming", icon: <FaCogs /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C++", icon: <FaCogs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "Mongodb", icon: <DiMongodb /> },
    { name: "Mongoose", icon: <DiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Github", icon: <FaGitAlt /> },
  ];

  return (
    <div className="mb-3">
      <div>
        <Heading>Skills</Heading>
      </div>
      <div className="flex flex-wrap gap-y-4 gap-x-1 py-9 w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-green-700 text-white py-2 px-3 mx-1 rounded-lg shadow-md flex items-center gap-2 hover:bg-green-800 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <span>{skill.icon}</span>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
