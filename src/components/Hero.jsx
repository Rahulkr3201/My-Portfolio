import React from "react";
import Logo from "./Logo";
import Typewriter from "typewriter-effect";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="mt-12 mb-6 text-center">
      <Logo />

      <motion.div
        className="mt-3 mb-3 text-4xl font-mono font-bold text-black dark:text-white"
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

      <motion.div
        className="font-mono text-neutral-800 dark:text-slate-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.p
          className="text-2xl text-green-600 font-bold dark:text-green-500"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Full Stack Developer
        </motion.p>
        <p className="text-md">📍 Bengaluru</p>

        <a
          href="https://drive.google.com/file/d/1xz9oq8cIsj8LI9ueKD9fPh6MkBrL_cDA/view?usp=drive_link"
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-primary"
        >
          <motion.button
            className="flex items-center justify-center font-mono text-lg bg-transparent hover:bg-green-500 text-green-500 font-bold hover:text-white py-2 px-4 mt-4 mb-4 border border-green-500 hover:border-transparent rounded"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
<<<<<<< HEAD
            <MdOutlineFileDownload className="mr-2" />
            Resume
          </motion.button>
        </a>
      </motion.div>
    </div>
=======
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
              href="https://drive.google.com/file/d/1xz9oq8cIsj8LI9ueKD9fPh6MkBrL_cDA/view?usp=drive_link"
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
>>>>>>> b123eddcb553d506188939fb7bd4fa8b89165b65
  );
}

export default Hero;
