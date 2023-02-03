import "./App.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./contexts/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Scrap from "./pages/Scrap";

function App() {
  const { isSidebar, isNavbar, isAdmin, setIsAdmin, setisSidebar } =
    useStateContext();
  return (
    <div className="app">
      <BrowserRouter>
        {isSidebar && <Sidebar />}
        <div style={{ width: "100%" }}>
          <Navbar />
          <div className="mainSection">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/scrap" element={<Scrap />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
