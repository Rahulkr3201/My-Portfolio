import React from "react";
import Logo from "./Logo";
import Typewriter from "typewriter-effect";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
function Hero() {
  return (
    <>
      <div className="mt-12 mb-3 ">
        <Logo />

        <div className="">
          <motion.div
            className="mt-3 mb-3 text-4xl font-mono font-bold text-black dark:text-white  "
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Rahul Kumar")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .start();
              }}
            />
          </motion.div>
          <div className="font-mono  text-neutral-800 dark:text-slate-50">
            <motion.p
              className="text-2xl text-green-600 font-bold dark:text-green-500"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
            >
              Full Stack Developer
            </motion.p>
            <p className="text-md">📍Bengaluru</p>
            <a
              href="https://drive.google.com/drive/u/0/home"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              <motion.button
                class="flex font-mono text-lg bg-transparent hover:bg-green-500 text-green-500 font-bold hover:text-white py-2 px-4 mt-4 mb-4 border border-green-500 hover:border-transparent"
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <MdOutlineFileDownload className="flex m-auto mr-1" />
                Resume
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
