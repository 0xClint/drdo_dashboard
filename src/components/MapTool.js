import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const MapTool = ({ zoomAmount, cX, cY, scrollZoom }) => {
  return (
    <MapContainer
      //   center={[29.86263003518456, 77.89486832948207]}
      center={[cX, cY]}
      zoom={zoomAmount || 13}
      scrollWheelZoom={false || scrollZoom}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        border: "1px rgb(224, 224, 224) solid",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapTool;
