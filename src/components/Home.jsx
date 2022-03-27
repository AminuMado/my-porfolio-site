import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center transition duration-500 ease-out bg-slate-50 dark:bg-black dark:text-white h-screen 
    before:bg-green-400 before:h-80 before:w-screen before:absolute before:bottom-0 "
    >
      <Navbar />
      <div className="flex flex-col z-10 gap-10 justify-self-center">
        <h1 className="font-SpaceGrotesk text-8xl">
          Hi! <br /> I'm <b>Aminu</b>.<br />A front-end web developer.
        </h1>
        <p className="font-Karma text-2xl">
          Sometimes I create stuff. Other times I just code stuff.
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
