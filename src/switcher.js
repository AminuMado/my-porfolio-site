import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Switcher() {
  const [theme, setTheme] = React.useState("light");
  const [darkMode, setDarkMode] = React.useState(
    theme === "light" ? false : true
  );
  function toggleDarkMode(checked) {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setDarkMode(checked);
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

  return (
    <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={56} />
  );
}

export default Switcher;
