import React from "react";
import "./LocationAnalytics.scss";
import { MdSettingsInputAntenna } from "react-icons/md";
import { GiHumanTarget } from "react-icons/gi";
import MapTool from "../components/MapTool";

const LocationAnalytics = () => {
  return (
    <div className="locationAnalytics">
      <div className="headinglocation">Location Analytics</div>
      <div className="mapAnalytics">
        <div className="leftMap">
          <div className="mapImg">
            <img
              src={require("../assets/map1.png")}
              width={450}
              style={{ borderRadius: "10px" }}
            />
          </div>

          <div className="mapContent">
            Cautley Bhawan Iit Roorkee Roorkee, Uttarakhand PinCode: 247667
          </div>
        </div>
        <div className="rightMap">
          <div className="polls">
            <div className="device">
              <MdSettingsInputAntenna style={{ fontSize: "1.7rem" }} />
              <p className="count">1</p>
              <p className="poleTitle">
                Poles
                <br /> installed
              </p>
            </div>
            <div className="device">
              <GiHumanTarget style={{ fontSize: "1.8rem" }} />
              <p className="count">0</p>
              <p className="poleTitle">
                Enemy
                <br /> Passed
              </p>
            </div>
          </div>
          <div className="profile"></div>
        </div>
      </div>
      <div className="mapContainer">
        <MapTool
          cX={29.86263003518456}
          cY={77.89486832948207}
          zoomAmount={25}
          scrollZoom={true}
        />
      </div>
    </div>
  );
};

export default LocationAnalytics;
