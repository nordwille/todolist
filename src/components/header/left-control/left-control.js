import "./left-control.css";
import SearchPanel from "./search-panel/search-panel";
import { Link } from "react-router-dom";

const LeftControl = () => {
  function showLeftMenu() {
    const leftMenu = document.querySelector(".left-menu");
    const viewContent = document.querySelector(".view-content");
    if (leftMenu.style.display === "block") {
      leftMenu.style.display = "none";
      viewContent.style.paddingLeft = "150px";
      viewContent.style.paddingRight = "150px";
    } else {
      leftMenu.style.display = "block";
      viewContent.style.paddingLeft = "75px";
      viewContent.style.paddingRight = "75px";
    }
  }
  return (
    <div className="left-control">
      <nav className="burger-menu-button" onClick={showLeftMenu}>
        <i className="fa-solid fa-bars"></i>
      </nav>

      <Link to="/today">
        <nav className="home-button">
          <i className="fa-solid fa-house"></i>
        </nav>
      </Link>

      <SearchPanel />
    </div>
  );
};

export default LeftControl;
