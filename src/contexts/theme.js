import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
