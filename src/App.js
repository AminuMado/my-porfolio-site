import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = React.useState("light");

  return (
    <BrowserRouter basename="/">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
          <Route
            path="/About"
            element={<About mode={mode} setMode={setMode} />}
          />
          <Route
            path="/Project"
            element={<Project mode={mode} setMode={setMode} />}
          />
          <Route
            path="/Contact"
            element={<Contact mode={mode} setMode={setMode} />}
          />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
