import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About({ mode, setMode }) {
  return (
    <div className="flex flex-col items-center justify-center transition duration-500 ease-out bg-neutral-100 dark:bg-black dark:text-white h-screen">
      <Navbar />
      <Footer />
      <main className="flex flex-wrap justify-around items-center font-Karma m-10 p-10">
        <div className="min-w-[400px] w-1/2 p-4 leading-loose text-justify text-xl">
          <p>
            Growing up, I always had an affinity for tech and computers. Coming
            from a background of continuous practice and performance I was
            immediately enthralled by the similarity in development in creating
            new products and experiences in a satisfyingly tangible manner.
            Committed to the idea of life-long learning, I am a full stack
            developer with a passion for Javascript, React, and all things web
            development. And as a follower of John Maeda’s laws of simplicity, I
            agree that less is more.
          </p>
          <p>Outisde of development, I enjoy playing chess and basketball.</p>
        </div>
        <div className="flex flex-wrap items-center justify-between max-w-2xl w-96 font-Karma ">
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-html5-plain colored icon "></i>
            <span className="text-sm">HTML</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-css3-plain colored icon"></i>
            <span className="text-sm">CSS</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-javascript-plain colored icon"></i>
            <span className="text-sm">JAVASCRIPT</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-typescript-plain colored icon"></i>
            <span className="text-sm">TYPESCRIPT</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-sass-original colored icon"></i>
            <span className="text-sm">SASS</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className=" text-5xl basis-1/5 devicon-tailwindcss-original-wordmark colored"></i>
            <span className="text-sm">TAILWIND</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-react-original colored icon"></i>
            <span className="text-sm">REACT</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-redux-original colored icon"></i>
            <span className="text-sm">REDUX</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-mongodb-plain colored icon"></i>
            <span className="text-sm">MONGODB</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-express-original colored icon express"></i>
            <span className="text-sm">EXPRESS</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-nodejs-plain colored icon"></i>
            <span className="text-sm">NODEJS</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-jest-plain colored icon"></i>
            <span className="text-sm">JEST</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-git-plain colored icon"></i>
            <span className="text-sm">GIT</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-webpack-plain colored icon"></i>
            <span className="text-sm">WEBPACK</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-heroku-plain colored icon"></i>
            <span className="text-sm">HEROKU</span>
          </div>
          <div className="flex flex-col m-3 w-16 text-center items-center justify-center gap-2">
            <i className="text-5xl basis-1/5 devicon-npm-original-wordmark colored icon"></i>
            <span className="text-sm">NPM</span>
          </div>
        </div>
      </main>
    </div>
  );
}
export default About;
