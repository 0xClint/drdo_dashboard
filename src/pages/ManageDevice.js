import React from "react";
import "./ManageDevice.scss";
import { DataGrid } from "@mui/x-data-grid";

const data = [
  {
    id: "1000",
    latitude: "27.24",
    longitude: "92.63",
    location: "Govind Bhawan",
    health: "Good",
  },
  {
    id: "1000",
    latitude: "27.24",
    longitude: "92.63",
    location: "Govind Bhawan",
    health: "Good",
  },
  {
    id: "1000",
    latitude: "27.24",
    longitude: "92.63",
    location: "Govind Bhawan",
    health: "Good",
  },
];
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
  },
  {
    field: "latitude",
    headerName: "Latitude",
    width: 250,
  },
  {
    field: "longitude",
    headerName: "Longitude",
    width: 250,
  },
  {
    field: "location",
    headerName: "Location",
    width: 250,
  },
  {
    field: "health",
    headerName: "Health",
    width: 200,
  },
];

const ManageDevice = () => {
  return (
    <div className="manageDevice">
      <div className="headinglocation">Manage Device</div>

      <div
        className="dataGridContainer"
        style={{ height: 400, width: "100%", backgroundColor: "#ffffff" }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          //   components={{ Toolbar: GridToolbar }}
        ></DataGrid>
      </div>
    </div>
  );
};

export default ManageDevice;
