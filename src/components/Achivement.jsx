import React from "react";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa"; // React icon for achievements
import Heading from "../components/Heading";
import Card from "./Card";

const Achivement = () => {
  return (
    <div className="mt-7">
      <Heading>Achievements</Heading>
      <div className="flex justify-center items-center mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <Card
            description={
              <>
                <ul>
                  <li className="flex items-center space-x-2">
                    <span>
                      <FaTrophy className="text-yellow-500 text-xl" />I secured
                      3rd place in the 'I Love Hackathon' Bangalore edition,
                      competing against 923 teams. The event focused on Web3 and
                      blockchain technologies, and my team demonstrated strong
                      skills and innovative solutions to achieve this
                      recognition.
                    </span>
                  </li>
                </ul>
              </>
            }
            // codeLink="https://github.com/Rahulkr3201/RWA.git"
            // liveSiteLink="https://platform.mpowerngo.com"
          />
          <Card
            description={
              <>
                <ul>
                  <li className="flex items-center space-x-2">
                    <span className="">
                      IIT Madras Hackathon Acknowledged by judges for
                      exceptional teamwork and problem-solving skills in
                      developing an ESG AI-based train model.
                    </span>
                  </li>
                </ul>
              </>
            }
            // codeLink="https://github.com/Rahulkr3201/RWA.git"
            // liveSiteLink="https://platform.mpowerngo.com"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Achivement;
