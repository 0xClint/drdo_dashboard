import React from "react";
import "./Overview.scss";
import { TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";

const colors = ["#ACD5FF", "#A8FF9A", "#FAFFDC", "#FFA2A2"];

const Overview = () => {
  return (
    <div className="overview">
      <div className="headingOverview">Hello, Welcome back!</div>
      <div className="overviewCardContainer">
        <div className="card" style={{ backgroundColor: colors[0] }}>
          <div className="circle"></div>
          <h2>10</h2>
          <p className="title">Title</p>
          {/* <p className="subTitle">subtitle</p> */}
        </div>
        <div className="card" style={{ backgroundColor: colors[1] }}>
          <div className="circle"></div>
          <h2>10</h2>
          <p className="title">Title</p>
          {/* <p className="subTitle">subtitle</p> */}
        </div>
        <div className="card" style={{ backgroundColor: colors[2] }}>
          <div className="circle"></div>
          <h2>10</h2>
          <p className="title">Title</p>
          {/* <p className="subTitle">subtitle</p> */}
        </div>
        <div className="card" style={{ backgroundColor: colors[3] }}>
          <div className="circle"></div>
          <h2>10</h2>
          <p className="title">Title</p>
          {/* <p className="subTitle">subtitle</p> */}
        </div>
      </div>
      <div className="trafficePoles">
        <h2 className="heading">Top 5 Traffic Poles</h2>
        <div className="analyseContainer">
          <div className="analyseCard">
            <h2>Regoin Area</h2>
            <div className="coordinateContainer">
              <div className="leftCoordinate">
                <TbWorldLatitude className="icons" />
                <p>longitude</p>
              </div>
              <div className="lineBreak"></div>
              <div className="rightCoordinate">
                <TbWorldLongitude className="icons" />
                <p>latitude</p>
              </div>
            </div>
          </div>
          <div className="analyseCard">
            <h2>Regoin Area</h2>
            <div className="coordinateContainer">
              <div className="leftCoordinate">
                <TbWorldLatitude className="icons" />
                <p>longitude</p>
              </div>
              <div className="lineBreak"></div>
              <div className="rightCoordinate">
                <TbWorldLongitude className="icons" />
                <p>latitude</p>
              </div>
            </div>
            <p className="region">Regoin Area</p>
          </div>
          <div className="analyseCard">
            <h2>Regoin Area</h2>
            <div className="coordinateContainer">
              <div className="leftCoordinate">
                <TbWorldLatitude className="icons" />
                <p>longitude</p>
              </div>
              <div className="lineBreak"></div>
              <div className="rightCoordinate">
                <TbWorldLongitude className="icons" />
                <p>latitude</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
