import { createContext } from "react";

let activetheme = localStorage.getItem("theme");
console.log(activetheme);

export const ThemeContext = createContext({ theme: activetheme, toggleTheme: () => { } })