import { useState } from "react/cjs/react.development";
import "./taskDisplay.css";

const TaskDisplay = (props) => {
  const [data, setData] = useState(props.data);

  return (
    <div
      id=""
      className="currentTask mb-3 py-1 px-1"
      //   style="border: 2px solid ${task.color};"
    >
      <div className="left">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            {/* ${impCheck(task)} */}
            <h6 onClick={() => console.log(`test data ` + data.title)}>
              {props.data.title}
            </h6>
          </div>
          <label className="dueDate">Due Date</label>
        </div>
        <label>Description blah blah blah</label>
        <hr className="divider" />
        <div className="d-flex prio justify-content-between secondaryInfo">
          <label className="text-secondary">
            Priority: <span className="taskPriority ${prio}">Priority</span>
          </label>
          <label className="text-secondary">Location: Location</label>
        </div>
      </div>
    </div>
  );
};

export default TaskDisplay;
