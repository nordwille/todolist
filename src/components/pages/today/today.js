import { type } from "@testing-library/user-event/dist/type";
import "./today.css";

const Today = () => {
  function dateFormatingInToday() {
    let date = new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("ru-RU", options);
  }
  let dateFormatingToday = dateFormatingInToday();

  return (
    <div className="container">
      <div className="view-header">
        <h1>
          Сегодня <samp>{dateFormatingToday}</samp>
        </h1>
      </div>
      <div className="view-content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, rem
          laboriosam cupiditate voluptatibus vel qui doloribus asperiores
          aliquam dolor, eius tempore quos nesciunt repudiandae et,
          exercitationem architecto. Nam, reiciendis facere.
        </p>
      </div>
    </div>
  );
};

export default Today;
