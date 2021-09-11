import "./taskInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function TaskInput(props) {
  // State Variables
  const [important, setImportant] = useState(false);
  const [task, setTask] = useState({
    title: ``,
    dueDate: ``,
    location: ``,
    priority: `Low`,
    color: "#000000",
    description: ``,
  });
  const [allTasks, setAllTasks] = useState([]);

  // logic (fns)
  const changeImp = () => {
    let star = !important;
    setImportant(star);
    props.onChange(star);
    console.log(`change to ${star}`);
  };

  const handleChangeInput = (event) => {
    let temp = { ...task };
    let value = event.target.value;
    let name = event.target.name;
    temp[name] = value;
    setTask(temp);
  };

  const saveTask = () => {
    let temp = task;
    let taskArray = allTasks;
    temp.important = important;
    taskArray.push(temp);
    setAllTasks(taskArray);
    props.onSubmit(allTasks);
    console.log(taskArray);
  };

  // Effects

  // return
  return (
    <div className="form px-3 py-3">
      <div className="mb-3">
        <label htmlFor="titleInput" className="form-label">
          Title
        </label>
        <input
          name="title"
          value={task.title}
          onChange={handleChangeInput}
          id="titleInput"
          type="text"
          className="form-control"
        />
      </div>
      <div className="icons mb-3">
        <label htmlFor="iconImportant" className="form-label">
          Important
        </label>
        <br />
        <i id="iconImportant" className="far fa-star"></i>
        <FontAwesomeIcon
          onClick={changeImp}
          className="iconImportant"
          icon={[important ? "fas" : "far", "star"]}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dueDateInput" className="form-label">
          Due Date
        </label>
        <input
          name="dueDate"
          value={task.dueDate}
          onChange={handleChangeInput}
          id="dueDateInput"
          type="datetime-local"
          className="form-control"
        />
      </div>
      <div clas="mb-3">
        <label htmlFor="locationInput" className="form-label">
          Location
        </label>
        <input
          name="location"
          value={task.location}
          onChange={handleChangeInput}
          id="locationInput"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="priorityInput" className="form-label">
          Priority
        </label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleChangeInput}
          id="priorityInput"
          className="form-select"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="colorInput" className="form-label">
          Color
        </label>
        <input
          name="color"
          value={task.color}
          onChange={handleChangeInput}
          id="colorInput"
          type="color"
          className="form-control form-control-color"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descriptionInput" className="form-label">
          Description
        </label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChangeInput}
          id="descriptionInput"
          className="form-control"
        ></textarea>
      </div>
      <button
        type="submit"
        onClick={saveTask}
        className="btn btn-info"
        id="btnSave"
      >
        Save Task
      </button>
    </div>
  );
}

export default TaskInput;
