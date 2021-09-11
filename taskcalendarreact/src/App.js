import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TaskInput from "./components/taskInput";
import React, { useEffect, useState } from "react";
import TaskDisplay from "./components/taskDisplay";

library.add(fas, far);

function App() {
  // state variables
  const [important, setImportant] = useState(false);
  const [allTasks, setAllTasks] = useState([]);

  // logic
  const handleImportant = (imp) => {
    console.log(`Change Importance to ${imp}`);
    setImportant(imp);
  };

  const handleTaskSubmit = (tasks) => {
    // test
    console.log(`tasks recieved: ${tasks}`);
    setAllTasks(tasks);
    console.log(allTasks);

    return;
  };

  // effects
  useEffect(() => {
    console.log(`The App Tasks are: ${allTasks}`);
    document.title = `test ${important}`;
  });

  // return
  return (
    <div className="container-fluid">
      <div className="task-display">
        {/* <TaskDisplay /> */}
        {allTasks.map((task, index) => (
          <TaskDisplay key={index} data={task} />
        ))}
      </div>
      <div className="task-inputs">
        <TaskInput
          onSubmit={handleTaskSubmit}
          onChange={handleImportant}
        ></TaskInput>
      </div>
    </div>
  );
}

export default App;
