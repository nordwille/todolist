import "./left-menu.css";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <nav className="left-menu">
      <ul className="ulMenu">
        <li className="today">
          <div className="today-hover">
            <Link to="/today">
              <i className="fa-solid fa-calendar-day">
                <i className="text">&nbsp;&nbsp;Сегодня</i>
              </i>
            </Link>
          </div>
        </li>
        <li className="сalendar-list-item">
          <Link to="/calendar">
            <i className="fa-solid fa-calendar-days">
              <i className="text">&nbsp;&nbsp;Календарь</i>
            </i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftMenu;
