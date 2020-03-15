import React, { useState } from "react";

export const TaskCreator = props => {
    const [newTaskName, setNewTaskName] = useState("");

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const createNewTask = () => {
        if (newTaskName !== "") {
            props.callback(newTaskName);
        } else {
            alert("You can not create a task without a name");
        }
        setNewTaskName("");
    };

    return (
        <div className="mx-3 my-3 d-flex align-items-center flex-row form-row">
            <div className="col-10">
                <input
                    type="text"
                    name="taskName"
                    className="form-control"
                    value={newTaskName}
                    onChange={updateNewTaskValue}
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            createNewTask();
                        }
                    }}
                />
            </div>
            <div className="col">
                <button
                    className="btn btn-primary mt-1"
                    onClick={createNewTask}
                >
                    Add
                </button>
            </div>
        </div>
    );
};
