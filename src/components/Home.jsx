import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home({ mode, setMode }) {
  return (
    <div className="transition duration-1000 ease-out bg-slate-50 dark:bg-black h-screen">
      <Navbar />

      <Footer />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 z-10 "
      >
        <path
          fill={mode === "light" ? "#C5EFFC" : "#001429"}
          fillOpacity="0.5"
          d="M0,128L34.3,133.3C68.6,139,137,149,206,128C274.3,107,343,53,411,48C480,43,549,85,617,90.7C685.7,96,754,64,823,74.7C891.4,85,960,139,1029,144C1097.1,149,1166,107,1234,101.3C1302.9,96,1371,128,1406,144L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
export default Home;
