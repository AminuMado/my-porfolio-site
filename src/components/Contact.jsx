import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact({ mode, setMode }) {
  return (
    <div className="flex flex-col items-center justify-center transition duration-500 ease-out bg-slate-50 dark:bg-black dark:text-white h-screen overflow-auto">
      <Navbar />
      <Footer />
      <main className="font-Karma m-10 p-10 h-3/4">
        <section>
          <h1 className="text-6xl">PING ME</h1>
          <p className="text-2xl leading-loose">
            Want to say "Hey!"? Got something you'd like to ask? <br />
            Ask for my resume? Or see if we can build something amazing
            together? <br />
            Ping me! I’d love to hear from you!
          </p>
        </section>

        <form className="flex flex-col text-2xl gap-5 ">
          <div className="flex flex-col">
            <label htmlFor="name">Name *</label>
            <input
              className="p-3 border-2 border-gray-400 rounded-md dark:bg-zinc-900 transition-all duration-500  focus:border-red-800 outline-none"
              id="name"
              type="text"
              name="name"
              required={true}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email">Email *</label>
            <input
              className="p-3 border-2 border-gray-400 rounded-md dark:bg-zinc-900 transition-all duration-500 focus:border-blue-800 outline-none"
              id="email"
              type="email"
              name="email"
              required={true}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="message">Message *</label>
            <textarea
              className="p-3 border-2 border-gray-400 rounded-md max-h-52 dark:bg-zinc-900 transition-all duration-500 focus:border-green-500 outline-none"
              id="message"
              name="message"
              required={true}
            ></textarea>
          </div>
          <button
            className="border-2 p-2 mt-auto cursor-pointer transition-colors duration-500 rounded-md
            active:scale-95 hover:bg-blue-200   dark:text-white dark:hover:bg-blue-900"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
export default Contact;
