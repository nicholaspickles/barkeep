import React from "react";
import "./App.css";
import GlobalFonts from "./fonts/fonts";

import Main from "./components/MainComponent";

const App = () => {
  return (
    <div>
      <GlobalFonts />
      <Main />
    </div>
  );
};

export default App;
