import React, { useState } from "react";
import { TaskRow } from "./components/TaskRow";
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";
// import './App.css';Creator/ import './App.cssCreator

function App() {
    const [username, setUsername] = useState("Leandro");
    const [taskItems, setTaskItems] = useState([
        { name: "Task one", done: false },
        { name: "Task two", done: false },
        { name: "Task three", done: true },
        { name: "Task false", done: false }
    ]);
    const [showCompleted, setShowCompleted] = useState(true);

    const createNewTask = taskName => {
        if (!taskItems.find(t => t.name === taskName)) {
            setTaskItems([...taskItems, { name: taskName, done: false }]);
        } else {
            alert("That task already exist");
        }
    };

    const toggleTask = task =>
        setTaskItems(
            taskItems.map(t =>
                t.name === task.name ? { ...t, done: !t.done } : t
            )
        );

    const taskTableRows = doneValue =>
        taskItems
            .filter(t => t.done === doneValue)
            .map(task => (
                <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
            ));

    return (
        <div className="App">
            <TaskBanner username={username} taskItems={taskItems} />
            <TaskCreator callback={createNewTask} />
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Done</th>
                    </tr>
                </thead>
                <tbody>{taskTableRows(false)}</tbody>
            </table>

            <div className="bg-secondary text-white text-center p-2">
                <VisibilityControl
                    description="Completed"
                    isChecked={showCompleted}
                    callback={checked => setShowCompleted(checked)}
                />
            </div>

            {showCompleted && (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>{taskTableRows(true)}</tbody>
                </table>
            )}
        </div>
    );
}

export default App;
