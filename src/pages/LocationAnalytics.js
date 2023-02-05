import React from "react";
import "./LocationAnalytics.scss";
import { MdSettingsInputAntenna } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";

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
              <AiFillCar style={{ fontSize: "1.7rem" }} />
              <p className="count">0</p>
              <p className="poleTitle">
                Poles
                <br /> Passed
              </p>
            </div>
          </div>
          <div className="profile"></div>
        </div>
      </div>
      <div className="mapContainer">MAP</div>
    </div>
  );
};

export default LocationAnalytics;
