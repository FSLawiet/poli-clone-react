import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import "./Navbar.css";

function Navbar() {
  const { setMode, currentMode } = useStateContext();

  return (
    <nav>
      <div className="dark-mode-toggle">
        <input
          type="checkbox"
          id="toggle"
          checked={currentMode === "dark" ? true : false}
          onChange={setMode}
        />
        <label htmlFor="toggle"></label>
      </div>
    </nav>
  );
}

export default Navbar;
