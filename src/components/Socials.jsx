import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "./Heading";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import discord from "../assets/discord.png";
import telegram from "../assets/telegram.svg";
import linkedin from "../assets/linkedin.svg";
import leetcode from "../assets/leetcode.png";
import Email from "../assets/Email.webp";

function Socials() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const socialsList = [
    {
      name: "twitter",
      img: twitter,
      url: "https://twitter.com/rahulkr3201",
    },
    {
      name: "linkedin",
      img: linkedin,
      url: "https://www.linkedin.com/in/rahul-kumar-4a3a09286/",
    },
    {
      name: "github",
      img: github,
      url: "https://github.com/rahulkr3201",
    },
    {
      name: "telegram",
      img: telegram,
      url: "https://t.me/rahulkr3201",
    },
    {
      name: "leetcode",
      img: leetcode,
      url: "https://leetcode.com/rahulkr3201/",
    },
    {
      name: "instagram",
      img: instagram,
      url: "https://www.instagram.com/rahulkumar_3200/",
    },
    {
      name: "Mail",
      img: Email,
      url: "mailto:rahulofficial3200@gmail.com",
    },
  ];

  return (
    <motion.div className="mt-2 mb-3 border-t-2 border-neutral-700 dark:border-gray-200 dark:text-white">
      <Heading>Get in Touch</Heading>
      <div className="m-4 ml-0">
        <ul
          ref={ref}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4"
        >
          {socialsList.map((item) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 20 }} // Initial state for animation
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Animation when in view
              transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 1.1 }}
              className="flex items-center justify-center p-1 md:p-2"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl"
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Socials;
