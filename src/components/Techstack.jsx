import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "./Heading";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/js.svg";
import typescript from "../assets/ts.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.svg";
import appwrite from "../assets/appwrite.svg";
import node from "../assets/nodejs.png";
import mongoDb from "../assets/mongoDb.png";
import express from "../assets/express.png";
import nextjs from "../assets/nextjs.png";
import git from "../assets/git.png";
import aws from "../assets/aws.png";
import mysql from "../assets/mysql.png";
import Github from "../assets/github.png";

function Techstack() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "react", img: react },
    { name: "node", img: node },
    { name: "express", img: express },
    { name: "redux", img: redux },
    { name: "html", img: html },
    { name: "css", img: css },
    { name: "mongoDb", img: mongoDb },
    { name: "tailwind", img: tailwind },
    { name: "nextjs", img: nextjs },
    { name: "git", img: git },
    { name: "Github", img: Github },
  ];

  return (
    <div className="mt-3 mb-3">
      <Heading>Tech Stack</Heading>
      <div className="m-4 ml-0">
        <ul
          ref={ref}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4"
        >
          {skills.map((item) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 1.1 }}
              className="flex items-center justify-center p-1 md:p-2"
            >
              <div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 md:w-12 rounded-lg"
                />
                <p className="text-black dark:text-white">{item.name}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Techstack;
