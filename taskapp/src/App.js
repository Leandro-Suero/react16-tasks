import React, { useState } from "react";
// import './App.css';

function App() {
    const [username, setUsername] = useState("Leandro");
    const [taskItems, setTaskItems] = useState([
        { name: "Task one", done: false },
        { name: "Task two", done: false },
        { name: "Task three", done: true },
        { name: "Task false", done: false }
    ]);

    const taskTableRows = () => {
        return taskItems.map(task => (
            <tr id={task.name}>
                <td>{task.name}</td>
            </tr>
        ));
    };

    return (
        <div className="App">
            <h1>Hello World</h1>
            <table>
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
