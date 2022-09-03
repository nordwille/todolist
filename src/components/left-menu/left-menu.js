import AccordionProjects from "./accordion-projects/accordion-projects";
import "./left-menu.css";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <div>
      <nav className="left-menu">
        <ul className="ulMenu">
          <li className="incoming">
            <Link to="/incoming">
              <i className="fa-solid fa-inbox">
                <i className="text">&nbsp;&nbsp;Входящие</i>
              </i>
            </Link>
          </li>

          <li className="today">
            <Link to="/today">
              <i className="fa-solid fa-calendar-day">
                <i className="text">&nbsp;&nbsp;Сегодня</i>
              </i>
            </Link>
          </li>

          <li className="forthcoming">
            <Link to="/forthcoming">
              <i className="fa-solid fa-calendar-days">
                <i className="text">&nbsp;&nbsp;Предстоящие</i>
              </i>
            </Link>
          </li>

          <li className="filter">
            <Link to="/filter">
              <i className="fa-solid fa-filter">
                <i className="text">&nbsp;&nbsp;Фильтры и метки</i>
              </i>
            </Link>
          </li>
        </ul>
        <AccordionProjects />
      </nav>
    </div>
  );
};

export default LeftMenu;
