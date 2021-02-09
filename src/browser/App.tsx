import React from "react";
import "./App.css";
import useConfig from "../components/useConfig";
import GameIndex from "./GameIndex";

export default function App() {
  const config = useConfig();
  return (
    <div className="App">
      <div className="App-notch">&nbsp;</div>
      <header className="App-header App-header-container">
        <div className="App-title">{config.app.title}</div>
      </header>
      <div className="Info-container">
        <span>Seuraavat pelit, joita <a href="https://www.etelaespoonpallo.fi/">EsPan</a> joukkueet pelaavat.</span>
      </div>
      <div className="Game-container">
        <GameIndex />
      </div>
    </div>
  );
}
