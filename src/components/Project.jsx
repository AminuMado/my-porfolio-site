import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Project({ mode, setMode }) {
  return (
    <div className="flex flex-col items-center justify-center transition duration-500 ease-out bg-slate-50 dark:bg-black dark:text-white h-screen overflow-auto p-20">
      <Navbar active={"Project"} />
      <Footer />
      <main className="font-Karma m-10  p-10 flex flex-col items-center h-full text-xl">
        <p>
          Day to day I spend most of my time learning and building stuff,here's
          some of the stuff I've done personally recently.
        </p>
        <div className="flex  flex-wrap p-5 m-5 gap-5 justify-center">
          <article className="min-w-[400px] basis-1/4 border-2 p-12 -ml-1 -mt-1 flex flex-col items-start gap-4">
            <h2 className="text-2xl underline font-Karma">Cv-Creator</h2>
            <div className="project-list-item-description">
              An app that allows the user to input their information,
              experiences and education. The site then format it into a CV.
            </div>
            <Link to="/Project/1" className="mt-auto ">
              <button
                className="border-2 p-2 mt-auto cursor-pointer transition-colors duration-500 rounded-md
              active:scale-95 hover:bg-blue-200   dark:text-white dark:hover:bg-blue-900"
              >
                About the project
              </button>
            </Link>
          </article>
          <article className="min-w-[400px] basis-1/4 border-2 p-12 -ml-1 -mt-1 flex flex-col items-start gap-4">
            <h2 className="text-2xl underline">Retro Js Shop</h2>
            <div className="project-list-item-description">
              A sneakers shop where the user can browse through catalog of retro
              jordans 1s, and have dynamic interaction with cart management.
            </div>

            <Link to="/Project/2" className="mt-auto ">
              <button
                className="border-2 p-2 mt-auto cursor-pointer transition-colors duration-500 rounded-md
              active:scale-95 hover:bg-blue-200   dark:text-white dark:hover:bg-blue-900"
              >
                About the project
              </button>
            </Link>
          </article>
          <article className="min-w-[400px] basis-1/4 border-2 p-12 -ml-1 -mt-1 flex flex-col items-start gap-4">
            <h2 className="text-2xl underline">Social Media Clone</h2>
            <div className="project-list-item-description">
              A fullstack app that clones a social media app functionality....
              Coming Soon
            </div>
            <Link to="/Project/3" className="mt-auto ">
              <button
                className="border-2 p-2 mt-auto cursor-pointer transition-colors duration-500 rounded-md
              active:scale-95 hover:bg-blue-200   dark:text-white dark:hover:bg-blue-900"
              >
                About the project
              </button>
            </Link>
          </article>
        </div>
      </main>
    </div>
  );
}
export default Project;
