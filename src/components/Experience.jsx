import React from "react";
import Heading from "../components/Heading";
import Card from "./Card";

const Experience = () => {
  return (
    <div className="mt-7">
      <Heading>Experience</Heading>
      <div className="flex justify-center items-center">
        <Card
          projectName="Mpower"
          position="Full Stack Developer (April 24 - Aug 24)"
          description={
            <>
              <ul>
                <li className="flex items-center ">
                  During my internship at mPower, I worked as a Full Stack
                  Developer, leveraging Next.js, Java, and AWS to build scalable
                  web applications. I contributed to developing core features,
                  optimized backend processes, and collaborated closely with the
                  team to enhance user experiences, demonstrating my skills in
                  modern web technologies and cloud integration.
                </li>
              </ul>
            </>
          }
          liveSiteLink="https://platform.mpowerngo.com"
        />
      </div>
    </div>
  );
};

export default Experience;
