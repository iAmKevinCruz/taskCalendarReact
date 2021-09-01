import "./taskInput.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React, {useState} from "react";

function TaskInput(){
    
    return(
        <div className="form px-3 py-3">
            <div className="mb-3">
                <label htmlFor="titleInput" className="form-label">Title</label>
                <input id="titleInput" type="text" className="form-control" />
            </div>
            <div className="icons mb-3">
                <label htmlFor="iconImportant" className="form-label">Important</label><br />
                <i id="iconImportant" className="far fa-star"></i>
                <FontAwesomeIcon className="iconImportant" icon={["far","star"]} />
                <FontAwesomeIcon className="iconImportant" icon={["fas","star"]} />
            </div>
            <div className="mb-3">
                <label htmlFor="dueDateInput" className="form-label">Due Date</label>
                <input id="dueDateInput" type="datetime-local" className="form-control" />
            </div>
            <div clas="mb-3">
                <label htmlFor="locationInput" className="form-label">Location</label>
                <input id="locationInput" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="priorityInput" className="form-label">Priority</label>
                <select name="priorityInput" id="priorityInput" className="form-select">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="colorInput" className="form-label">Color</label>
                <input id="colorInput" type="color" className="form-control form-control-color" />
            </div>
            <div className="mb-3">
                <label htmlFor="contactInput" className="form-label">Contact</label>
                <input id="contactInput" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="descriptionInput" className="form-label">Description</label>
                <textarea id="descriptionInput" className="form-control"></textarea>
            </div>
            <button className="btn btn-info" id="btnSave">Save Task</button>


        </div>
    )


}

export default TaskInput;