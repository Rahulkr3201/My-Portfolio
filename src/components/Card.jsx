import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
const Card = ({
  projectName,
  techStack = "",
  position = "",
  description = "",
  liveSiteLink = "",
  codeLink = "",
}) => {
  return (
    <div className="card shadow-md hover:shadow-lg mt-4 bg-neutral-500  bg-opacity-10 dark:bg-opacity-30 rounded-xl lg:mr-[250px] ">
      <div className="card-header p-4">
        <h2 className="text-2xl font-bold text-green-500  font-mono ">
          {projectName}
        </h2>
        {techStack && (
          <div className="text-gray-800 dark:text-gray-200 flex items-center mt-1">
            <p>{"[ " + techStack + " ]"}</p>
          </div>
        )}
        {position && (
          <div className="text-gray-800 dark:text-gray-200 flex items-center mt-1">
            <p>{position}</p>
          </div>
        )}
      </div>
      <div className="card-body p-4 pt-0">
        <p className="text-black dark:text-white">{description}</p>
      </div>
      <div className="card-footer flex justify-between p-4">
        {liveSiteLink && (
          <a
            href={liveSiteLink}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            <button class="flex bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              <CiGlobe className="flex m-auto mr-1" />
              Live
            </button>
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-secondary"
          >
            <button class="flex bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              <FaGithub className="flex m-auto mr-1" />
              Code
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
