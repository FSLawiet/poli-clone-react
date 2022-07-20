import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const setMode = (e) => {
    setCurrentMode(e.target.checked ? "dark" : "light");
    localStorage.setItem("themeMode", e.target.value);
  };
  return (
    <StateContext.Provider
      value={{
        currentMode,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
