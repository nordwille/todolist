import "./today.css";

const Today = () => {
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
      taskListToday.style.position = "fixed";
    }
  };

  const taskToday = (function () {
    let nameOfTask = null;
    let descriptionOfTask = null;

    function createTaskToday() {
      nameOfTask = document.getElementById("input-today-list-name").value;
      descriptionOfTask = document.getElementById(
        "input-today-list-description"
      ).value;
      let task1Name = document.getElementById("task1Name");
      let task1Descr = document.getElementById("task1Descr");
      if (nameOfTask || descriptionOfTask) {
        task1Name.innerHTML = nameOfTask;
        task1Descr.innerHTML = descriptionOfTask;
        document.getElementById("input-today-list-name").value = "";
        document.getElementById("input-today-list-description").value = "";
      }
    }
    return {
      createTaskToday: createTaskToday,
    };
  })();
  return (
    <div className="container">
      <div className="view-header">
        <h1>
          Сегодня <samp>{dateFormatingToday()}</samp>
        </h1>
      </div>
      <div className="view-content">
        <div className="allTaskToday">
          <p>
            <span id="task1Name"></span>
            <br></br>
            <span id="task1Descr"></span>
          </p>
        </div>

        <div className="add-Task">
          <i className="fa-solid fa-plus">
            <b onClick={showTaskListToday}>Добавить задачу на Сегодня</b>
          </i>
        </div>
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
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
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
              onClick={taskToday.createTaskToday}
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
      </div>
    </div>
  );
};

export default Today;
