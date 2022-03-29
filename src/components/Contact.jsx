import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact({ mode, setMode }) {
  return (
    <div className="flex flex-col items-center justify-center transition duration-500 ease-out bg-slate-50 dark:bg-black dark:text-white h-screen">
      <Navbar />
      <Footer />
      <main>
        <section>
          <h1>PING ME</h1>
          <p>
            Want to say "Hey!"? Got something you'd like to ask? Ask for my
            resume? Or see if we can build something amazing together? Ping me!
            I’d love to hear from you!
          </p>
          <p>Use the form below</p>.
          <p>Alternatively, shoot me an email at madoaminu@gmail.com</p>
        </section>
        <form>
          <div>
            <label htmlFor="name">Name *</label>
            <input id="name" type="text" name="name" required={true} />
          </div>
          <div>
            <label htmlFor="email">Email *</label>
            <input id="email" type="email" name="email" required={true} />
          </div>
          <div>
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" required={true}></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 z-10 "
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,32L26.7,64C53.3,96,107,160,160,181.3C213.3,203,267,181,320,192C373.3,203,427,245,480,261.3C533.3,277,587,267,640,256C693.3,245,747,235,800,240C853.3,245,907,267,960,261.3C1013.3,256,1067,224,1120,197.3C1173.3,171,1227,149,1280,144C1333.3,139,1387,149,1413,154.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
export default Contact;
