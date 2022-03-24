import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className=" flex justify-center gap-5 m-2 p-1 absolute bottom-0 right-0">
      <FontAwesomeIcon
        icon={faGithub}
        size="2x"
        className="cursor-pointer transition-all duration-500
        active:scale-110 hover:text-gray-400 dark:hover:text-gray-400  dark:text-white"
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        size="2x"
        className="cursor-pointer transition-all duration-500
        active:scale-110 hover:text-blue-600 dark:hover:text-green-600 dark:text-white"
      />
      <FontAwesomeIcon
        icon={faEnvelope}
        size="2x"
        className=" cursor-pointer transition-all duration-500 
        active:scale-110  hover:text-blue-600 dark:hover:text-amber-700  dark:text-white"
      />
    </div>
  );
}

export default Footer;
