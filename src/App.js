import React from "react";
// Import Styles
import "./styles/app.scss";
// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
// Importt Utils
import data from "./util";

function App() {
  return (
    <div className="App">
      <h1>Vybe</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
