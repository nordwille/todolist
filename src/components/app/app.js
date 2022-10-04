import "./app.css";
import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../header/header";
import LeftMenu from "../left-menu/left-menu";
import { Routes, Route } from "react-router-dom";
import Today from "../pages/today/today";
import "../pages/view.css";
import { Calendar } from "../pages/calendar/calendar";

function App() {
  const url = "http://localhost:5000";
  const [events, setEvents] = useState([]);
  const yesterday = moment().clone().add(-1, "day").format("X");
  const tomorrow = moment().clone().add(1, "day").format("X");

  useEffect(() => {
    let reqUrl = `${url}/events?date_gte=${yesterday}&date_lte=${tomorrow}`;
    fetch(reqUrl).then((res) => {
      res.json().then((res) => {
        setEvents(res);
      });
    });
  }, []);
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <section className="view-content">
        <Routes>
          <Route path="/today" element={<Today events={events} url={url} />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
