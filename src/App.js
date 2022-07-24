import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import View from "./components/view/View";

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
