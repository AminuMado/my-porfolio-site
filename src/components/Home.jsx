import React from "react";
import Navbar from "./Navbar";
import Switcher from "../switcher";
import Footer from "./Footer";

function Home({ mode, setMode }) {
  return (
    <div className="transition duration-1000 ease-out bg-slate-50 dark:bg-black h-screen">
      <Navbar />
      <Switcher setMode={setMode} />
      <Footer />

      {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="absolute bottom-0 z-10 "
  >
    <path
      fill="#000000"
      fillOpacity="1"
      d="M0,224L20,213.3C40,203,80,181,120,170.7C160,160,200,160,240,181.3C280,203,320,245,360,224C400,203,440,117,480,90.7C520,64,560,96,600,101.3C640,107,680,85,720,64C760,43,800,21,840,21.3C880,21,920,43,960,90.7C1000,139,1040,213,1080,240C1120,267,1160,245,1200,240C1240,235,1280,245,1320,213.3C1360,181,1400,107,1420,69.3L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
    ></path>
  </svg> */}

      {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="absolute bottom-0 z-10"
  >
    <path
      fill="#a2d9ff"
      fillOpacity="1"
      d="M0,192L34.3,186.7C68.6,181,137,171,206,170.7C274.3,171,343,181,411,176C480,171,549,149,617,160C685.7,171,754,213,823,202.7C891.4,192,960,128,1029,90.7C1097.1,53,1166,43,1234,48C1302.9,53,1371,75,1406,85.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
    ></path>
  </svg> */}

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