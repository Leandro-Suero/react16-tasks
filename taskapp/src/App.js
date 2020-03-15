import React, { useState } from "react";
import { TaskRow } from "./components/TaskRow";
import { TaskBanner } from "./components/TaskBanner";
// import './App.css';

function App() {
    const [username, setUsername] = useState("Leandro");
    const [taskItems, setTaskItems] = useState([
        { name: "Task one", done: false },
        { name: "Task two", done: false },
        { name: "Task three", done: true },
        { name: "Task false", done: false }
    ]);

    const toggleTask = task =>
        setTaskItems(
            taskItems.map(t =>
                t.name === task.name ? { ...t, done: !t.done } : t
            )
        );

    const taskTableRows = () =>
        taskItems.map(task => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
        ));

    return (
        <div className="App">
            <TaskBanner username={username} taskItems={taskItems} />
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Done</th>
                    </tr>
                </thead>
                <tbody>{taskTableRows()}</tbody>
            </table>
        </div>
    );
}

export default App;
