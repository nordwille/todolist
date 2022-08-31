import AccordionProjects from "./accordion-projects/accordion-projects";
import "./left-menu.css";

const LeftMenu = () => {
  return (
    <nav className="left-menu">
      <ul className="ulMenu">
        <li className="incoming">
          <a href="//https">
            <i className="fa-solid fa-inbox">
              <i>&nbsp;&nbsp;Входящие</i>
            </i>
          </a>
        </li>

        <li className="today">
          <a href="//https">
            <i className="fa-solid fa-calendar-day">
              <i>&nbsp;&nbsp;Сегодня</i>
            </i>
          </a>
        </li>

        <li className="forthcoming">
          <a href="//https">
            <i className="fa-solid fa-calendar-days">
              <i>&nbsp;&nbsp;Предстоящие</i>
            </i>
          </a>
        </li>

        <li className="filter">
          <a href="//https">
            <i className="fa-solid fa-filter">
              <i>&nbsp;&nbsp;Фильтры и метки</i>
            </i>
          </a>
        </li>
      </ul>
      <AccordionProjects />
    </nav>
  );
};

export default LeftMenu;
