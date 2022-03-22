import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Switcher() {
  const [theme, setTheme] = React.useState("light");
  const [darkMode, setDarkMode] = React.useState(
    theme === "light" ? false : true
  );
  function toggleDarkMode(checked) {
    setTheme(altTheme);
    setDarkMode(checked);
  }

  const altTheme = theme === "light" ? "dark" : "light";

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(altTheme);
    root.classList.add(theme);
  }, [theme, altTheme, darkMode]);
  return (
    <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={56} />
  );
}

export default Switcher;
