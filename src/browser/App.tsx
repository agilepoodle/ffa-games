import React from "react";
import "./App.css";
import useConfig from "../components/useConfig";
import GameIndex from "./GameIndex";

export default function App() {
  const config = useConfig();
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const copyrightYear = (currentYear - startYear) > 0 ? `Copyright ${startYear} - ${currentYear}` : 'Copyright 2021';

  return (
    <div className="App">
      <div className="App-notch">&nbsp;</div>
      <header className="App-header App-header-container">
        <div className="App-title">
          <div>
            <img className="logo" src={config.app.public_url + '/espa.png'} alt='Club logo'/>
          </div>
          <div className="title">
            {config.app.title}</div>
          </div>
      </header>
      <div className="Game-container">
        <GameIndex />
      </div>
      <div className="footer">
        <span>{copyrightYear}</span>&nbsp;&minus;&nbsp;
        <span><a href="http://www.etelaespoonpallo.fi/" target="blank">Etelä-Espoon Pallo ry</a></span>&nbsp;&minus;&nbsp;
        <span>Data from <a href="http://www.palloliitto.fi" target="blank">Palloliitto</a></span>
      </div>
    </div>
  );
}
