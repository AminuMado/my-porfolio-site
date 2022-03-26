import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Project({ mode, setMode }) {
  return (
    <div className="transition duration-1000 ease-out bg-slate-50 dark:bg-black h-screen">
      <Navbar />
      <Footer />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 z-10"
      >
        <path
          fill={mode === "light" ? "#C5EFFC" : "#001429"}
          fillOpacity="1"
          d="M0,192L34.3,186.7C68.6,181,137,171,206,170.7C274.3,171,343,181,411,176C480,171,549,149,617,160C685.7,171,754,213,823,202.7C891.4,192,960,128,1029,90.7C1097.1,53,1166,43,1234,48C1302.9,53,1371,75,1406,85.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
export default Project;
