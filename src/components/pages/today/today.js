import "./today.css";
import moment from "moment/moment";

const Today = ({ events, url }) => {
  function dateFormatingToday() {
    let date = new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("ru-RU", options);
  }

  const closeTaskListToday = () => {
    const taskListToday = document.querySelector(".task-list-today");
    const addTask = document.querySelector(".add-Task");
    taskListToday.style.display = "none";
    addTask.style.display = "flex";
  };

  const showTaskListToday = () => {
    const taskListToday = document.querySelector(".task-list-today");
    const addTask = document.querySelector(".add-Task");
    if (taskListToday.style.display === "block") {
      taskListToday.style.display = "none";
      addTask.style.display = "flex";
    } else {
      addTask.style.display = "none";
      taskListToday.style.display = "block";
      taskListToday.style.position = "relative";
    }
  };

  const addTask = () => {
    let nameOfTask = document.getElementById("input-today-list-name").value;
    let descriptionOfTask = document.getElementById(
      "input-today-list-description"
    ).value;

    fetch(`${url}/events`, {
      method: "POST",
      body: JSON.stringify({
        title: nameOfTask,
        description: descriptionOfTask,
        date: moment().format("X"),
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <>
      <div className="container">
        <div className="view-header">
          <h1>
            Сегодня <samp>{dateFormatingToday()}</samp>
          </h1>
        </div>
        <div className="add-Task">
          <i className="fa-solid fa-plus">
            <b onClick={showTaskListToday}>Добавить задачу на Сегодня</b>
          </i>
        </div>
        <div className="all-task-today">
          <div className="list"></div>
          <div className="task-list-today">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control"
                id="input-today-list-name"
                placeholder="Название задачи"
              ></input>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Описание задачи
              </label>
              <textarea
                className="form-control"
                id="input-today-list-description"
                rows="3"
              ></textarea>
            </div>
            <div className="button-create-task-today">
              <button
                onClick={addTask}
                type="button"
                className="btn btn-success"
              >
                Добавить
              </button>

              <button
                onClick={closeTaskListToday}
                type="button"
                className="btn btn-danger"
              >
                Отменить
              </button>
            </div>
          </div>
          <ul className="list-column">
            {events.map((event) => (
              <li>{event.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Today;
