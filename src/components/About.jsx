import React from "react";
import Navbar from "./Navbar";
import Switcher from "../switcher";
import Footer from "./Footer";

function About({ mode, setMode }) {
  return (
    <div className="transition duration-1000 ease-out bg-slate-50 dark:bg-black h-screen">
      <Navbar />
      <Switcher setMode={setMode} />
      <Footer />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 z-10 "
      >
        <path
          fill={mode === "light" ? "#C5EFFC" : "#001429"}
          fillOpacity="1"
          d="M0,224L20,213.3C40,203,80,181,120,170.7C160,160,200,160,240,181.3C280,203,320,245,360,224C400,203,440,117,480,90.7C520,64,560,96,600,101.3C640,107,680,85,720,64C760,43,800,21,840,21.3C880,21,920,43,960,90.7C1000,139,1040,213,1080,240C1120,267,1160,245,1200,240C1240,235,1280,245,1320,213.3C1360,181,1400,107,1420,69.3L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
export default About;
