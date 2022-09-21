import "./app.css";
import Header from "../header/header";
import LeftMenu from "../left-menu/left-menu";
import { Routes, Route } from "react-router-dom";
import Incoming from "../pages/incoming/incoming";
import Today from "../pages/today/today";
import Forthcoming from "../pages/forthcoming/forthcoming";
import Filter from "../pages/filter/filter";
import "../pages/view.css";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <div className="view-content">
        <Routes>
          <Route path="/incoming" element={<Incoming />} />
          <Route path="/today" element={<Today />} />
          <Route path="/forthcoming" element={<Forthcoming />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
