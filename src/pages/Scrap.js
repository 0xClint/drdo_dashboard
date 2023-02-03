import React from "react";
import "./Scrap.scss";

const Scrap = () => {
  return (
    <div className="scrap">
      <div className="headingScrap">Scrap the things you want! </div>
      <div className="scrapform">
        <h2>BASIC CONFIGURATION</h2>
        <div>
          <p className="title">Keyword</p>
          <input type="text" className="inputText titleInput" />
        </div>
        <div>
          <p className="title">Number of Pages</p>
          <input type="text" className="inputText titleInput" />
        </div>
        <button className="btn scrapbtn">Scrap</button>
      </div>
    </div>
  );
};

export default Scrap;
