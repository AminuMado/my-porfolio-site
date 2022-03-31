import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Switcher from "./switcher";

function App() {
  const [mode, setMode] = React.useState("light");

  return (
    <div>
      <Switcher setMode={setMode} />

      <BrowserRouter basename="/">
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
            <Route
              path="/About"
              element={
                <>
                  <About mode={mode} setMode={setMode} />
                </>
              }
            />
            <Route
              path="/Project"
              element={<Project mode={mode} setMode={setMode} />}
            />
            <Route
              path="/Project/1"
              element={
                <>
                  <h1>Project 1</h1>
                </>
              }
            />
            <Route
              path="/Project/2"
              element={
                <>
                  <h1>Project 2</h1>
                </>
              }
            />
            <Route
              path="/Project/3"
              element={
                <>
                  <h1>Project 3</h1>
                </>
              }
            />
            <Route
              path="/Contact"
              element={<Contact mode={mode} setMode={setMode} />}
            />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
