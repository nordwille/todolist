import "./forthcoming.css";
import { Calendar } from "../../calendar/calendar";

const Forthcoming = () => {
  return (
    <div className="content-forthcoming">
      <div className="calendar">
        <Calendar />
      </div>
    </div>
  );
};

export default Forthcoming;

/* function dateFormatingToday() {
    let date = new Date();
    const options = {
      year: "numeric",
      month: "long",
    };
    return date.toLocaleDateString("ru-RU", options);
  }*/

/*<div className="view-header">
        <h1>
          <button className="header-cal">{dateFormatingToday()}</button>
        </h1>
        <div className="forth-coming-cal-line">
          <div className="row">
            <button className="day col-1"></button>
            <button className="day col-1"></button>
            <button className="day col-1"></button>
            <button className="day col-1"></button>
            <button className="day col-1"></button>
            <button className="day col-1"></button>
            <button className="day col-1"></button>
          </div>
        </div>
      </div>*/
