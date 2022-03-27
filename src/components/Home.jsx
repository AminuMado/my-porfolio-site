import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { MyComponent } from "./Backround";
function Home({ mode }) {
  return (
    <div
      className="transition duration-500 ease-out bg-slate-50 dark:bg-black dark:text-white h-screen 
    before:bg-green-400 before:h-80 before:w-screen before:absolute before:bottom-0"
    >
      <Navbar />
      <Footer />
    </div>
  );
}
export default Home;
