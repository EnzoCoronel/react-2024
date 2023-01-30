import React, { createContext, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import { ThemeProvider } from "./components/ThemeProvider";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider>
      <Game />
    </ThemeProvider>
  );
}

export default App;
