import React from "react";
import Heading from "../components/Heading";
import Card from "./Card";

function Projects() {
  return (
    <div className="mt-7">
      <Heading>Projects</Heading>
         <Card
        projectName="  Real Estate Tokenization Platform(Collaborative Project)"
        techStack="Vite + React.js + Tailwind Css + Mongodb + Solitude + Node.js + React redux + Framer motion"
        description={
          <>
            <ul>
              <li className="flex items-center ">
                Developed an innovative solution to revolutionize the real
                estate industry by enabling Web3 tokenization of real-world
                assets. Key achievements include:
                <br /> – Dynamic Smart Contracts: Enabled flexible and secure
                real estate transactions.
                <br /> – Chatbot Integration: Enhanced user experience with
                real-time assistance.
                <br /> – AI/ML Models: Predicted property prices to provide
                market insights. <br />– MetaMask Integration: Ensured secure,
                transparent blockchain transactions.
              </li>
            </ul>
          </>
        }
        codeLink="https://github.com/Rahulkr3201/RWA.git"
        // liveSiteLink="https://movieflix-c6d1b.web.app/"
      />
      <Card
        projectName="DevTinder"
        techStack="Node.js + Express + MongoDB + Vite + React.js + Tailwind Css + Framer motion + Vercel"
        description={
          <>
            <ul>
              <li className="flex items-center ">
                DevTinder is a modern dating web application designed to help
                users create profiles, explore a dynamic feed of potential
                matches, and build meaningful connections. Users can send and
                accept connection requests, express interest, or ignore profiles
                seamlessly. The platform allows profile updates, fosters
                interactions through intuitive features, and ensures a secure,
                user-friendly experience. Built with a robust tech stack,
                DevTinder combines functionality and privacy to redefine online
                dating.
              </li>
            </ul>
          </>
        }
        codeLink="https://github.com/Rahulkr3201/love-front-deploy"
        // codeLink="https://github.com/Rahulkr3201/luv-back-deploy"
        liveSiteLink="https://love-front-deploy-6ytr.vercel.app/"
      />
      <Card
        projectName="MovieFlix"
        techStack="Vite + React.js + Tailwind Css + Google Firebase "
        description={
          <>
            <ul>
              <li className="flex items-center ">
                MovieFlix is an advanced web application that enhances your
                movie discovery experience. Users can log in or sign up to
                access personalized features, including a powerful GPT-based
                search for finding movies effortlessly. The platform supports
                multi-language search, allowing users to explore movie
                recommendations in their preferred language.
              </li>
            </ul>
          </>
        }
        codeLink="https://github.com/Rahulkr3201/MovieFlix-app"
        liveSiteLink="https://movieflix-c6d1b.web.app/"
      />
   
    </div>
  );
}

export default Projects;
