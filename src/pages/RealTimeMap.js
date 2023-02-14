import React from "react";
import MapTool from "../components/MapTool";
import "./RealTimeMap.scss";

const RealTimeMap = () => {
  return (
    <div className="realTimeMap">
      <div className="headinglocation">RealTime Map</div>
      <div className="mapSection">
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

export default RealTimeMap;
