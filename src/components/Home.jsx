import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center transition duration-500 ease-out bg-blue-100 dark:bg-black dark:text-white h-screen w-screen overflow-hidden ">
      <div className="flex flex-col self-start m-10 gap-10 w-3/5 ">
        <h1 className="font-SpaceGrotesk text-8xl">
          Hi! <br /> I'm <b>Aminu</b>.<br />A front-end web developer.
        </h1>
        <p className="font-Karma text-2xl">
          Sometimes I create stuff. Other times I just code stuff.
        </p>
      </div>
      <div className="absolute top-1/3 right-1/3">
        <div className=" absolute bg-transparent w-80 h-80  top-0 rounded-full border-2 border-black dark:border-white animate-[spin_25s_linear_infinite]">
          <span className=" z-50 absolute top-0 transition-transform  translate-x-8 bg-blue-100 w-16 h-16 rounded-full border-2 border-black dark:bg-black dark:border-white"></span>
        </div>
        <div className=" absolute bg-transparent w-80 h-80  top-0 rounded-full  animate-[spin_20s_linear_infinite]">
          <span className="absolute bottom-0  transition-transform  translate-x-20 bg-blue-100 w-8 h-8 rounded-full border-2 border-black"></span>
        </div>
      </div>

      <Navbar active={"Home"} />
      <Footer />
    </div>
  );
}
export default Home;
