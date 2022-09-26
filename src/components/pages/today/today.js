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
      taskListToday.style.position = "relative";
    }
  };

  const taskToday = (function () {
    let nameOfTask;
    let descriptionOfTask;

    function createTaskToday() {
      nameOfTask = document.getElementById("input-today-list-name").value;
      descriptionOfTask = document.getElementById(
        "input-today-list-description"
      ).value;

      const list = document.querySelector(".list");
      if (nameOfTask || descriptionOfTask) {
        let br = document.createElement("br");

        let hr = document.createElement("hr");
        hr.style.width = "740px";

        let dateSpanName = document.createElement("li");
        dateSpanName.style.maxWidth = "760px";
        dateSpanName.style.fontFamily = "roboto";
        dateSpanName.style.fontFamily = "sans-serif";
        dateSpanName.style.listStyleType = "none";
        dateSpanName.style.fontSize = "24px";

        let closeButton = document.createElement("button");
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("class", "btn-close");
        closeButton.setAttribute("aria-label", "Close");
        closeButton.style.width = "30px";
        closeButton.style.height = "30px";
        closeButton.style.display = "flex";
        closeButton.style.padding = "0";
        closeButton.style.marginLeft = "760px";

        let dateSpanDescr = document.createElement("li");
        dateSpanDescr.style.maxWidth = "760px";
        dateSpanDescr.style.fontFamily = "roboto";
        dateSpanDescr.style.fontFamily = "sans-serif";
        dateSpanDescr.style.fontSize = "18px";
        dateSpanDescr.style.listStyleType = "none";

        dateSpanName.innerHTML = nameOfTask;
        list.appendChild(dateSpanName);
        list.appendChild(closeButton);
        list.appendChild(hr);
        dateSpanDescr.innerHTML = descriptionOfTask;
        list.appendChild(dateSpanDescr);

        list.appendChild(br);

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
