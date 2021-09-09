import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TaskInput from "./components/taskInput";
import React, { useState } from "react";

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
    // tasks
    console.log(`tasks recieved: ${tasks}`);
    setAllTasks(tasks);
  };

  // effects

  // return
  return (
    <div className="">
      <TaskInput
        onSubmit={handleTaskSubmit}
        onChange={handleImportant}
      ></TaskInput>
    </div>
  );
}

export default App;
