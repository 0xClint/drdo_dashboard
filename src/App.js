import "./App.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./contexts/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Scrap from "./pages/Scrap";
import LocationAnalytics from "./pages/LocationAnalytics";
import RealTimeMap from "./pages/RealTimeMap";

function App() {
  const { isSidebar, isNavbar, isAdmin, setIsAdmin, setisSidebar } =
    useStateContext();
  return (
    <div className="app">
      <BrowserRouter>
        {isSidebar && (
          <div style={{ position: "static" }}>
            <Sidebar />
          </div>
        )}
        <div style={{ width: "100%" }}>
          <Navbar />
          <div className="mainSection">
            <Routes>
              <Route path="/" element={<Overview />} />
              {/* <Route path="/scrap" element={<Scrap />} /> */}
              <Route path="/location" element={<LocationAnalytics />} />
              <Route path="/realtimemap" element={<RealTimeMap />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
