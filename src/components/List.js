import React from 'react'
import '../App.css';
import { useState } from 'react'

export default function List() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        };
        setTodoList([...todoList, task]);
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
        // const newTodoList = todoList.filter((task) => {
        //     if (task === taskName) {
        //         return false;
        //     } else {
        //         return true;
        //     }
        // });
        // setTodoList(newTodoList);
    };

    return (
        <>
            <div className="addTask">
                <input type="text" placeholder="Type here" onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                    return (
                        <div>
                            <h1>{task.taskName} </h1>
                            <div className="icons">
                                {/* <button className="btn done"><i class="fa-solid fa-check"></i></button> */}
                                <button className="btn del" onClick={() => deleteTask(task.id)}> <i class="fa-solid fa-xmark"></i> </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
