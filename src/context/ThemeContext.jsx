import { createContext, useEffect, useState } from "react";

// create context object

export const ThemeContext = createContext();

// create provider for context object
// provider - a component that provides the context to its children (wrapper)
//context - a way to pass data through the component tree without having to pass props down manually at every level

export function ThemeProvider({ children }) {
  // two ways to update the context value
  // 1. using useState
  // 2. using useReducer - better for more complex state management

  const [mode, setMode] = useState("dark");

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
