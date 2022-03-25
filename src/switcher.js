import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useSound from "use-sound";
import lightModeSfx from "./Assets/lightMode.mp3";
import darkModeSfx from "./Assets/darkMode.mp3";

function Switcher({ setMode }) {
  const [theme, setTheme] = React.useState("light");
  const [darkMode, setDarkMode] = React.useState(
    theme === "light" ? false : true
  );
  function toggleDarkMode(checked) {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setDarkMode(checked);
    setMode(theme === "light" ? "dark" : "light");
  }

  React.useEffect(() => {
    const root = window.document.documentElement;
    switch (theme) {
      case "light":
        root.classList.remove("dark");
        root.classList.add("light");
        break;
      case "dark":
        root.classList.remove("light");
        root.classList.add("dark");
        break;
      default:
        break;
    }
  }, [theme, darkMode]);

  // Sounds Section

  const [playOn] = useSound(lightModeSfx, { volume: 0.35 });
  const [playOff] = useSound(darkModeSfx, { volume: 0.25 });

  return (
    <DarkModeSwitch
      checked={darkMode}
      onChange={toggleDarkMode}
      size={56}
      onMouseUp={() => {
        darkMode ? playOn() : playOff();
      }}
    />
  );
}

export default Switcher;
