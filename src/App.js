import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import View from "./components/View";

import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { currentMode } = useStateContext();
  return (
    <main className={currentMode}>
      <Navbar />
      <Sidebar />
      <View />
    </main>
  );
}

export default App;
