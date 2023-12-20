import { useState } from 'react';
import { TaskProvider } from '../../App';
import './task.css'
import {memo, useContext} from "react";

const Task = ({id}) => {
    const {getTaskData, handleDeletion} = useContext(TaskProvider)
    const [task, editTask] = useState({
        todo: "",
        completed: false,
        id: 100
    })
    const taskData = getTaskData(id)

    const handleEdit = (event) => {
        editTask({
            todo: "",
            completed: event.target.checked,
            id: 100
        })
        console.log(task)
    }

    return (
        <div className="taskCard container">
            <div>
                <h1 className="taskBody">{taskData.todo}</h1>
                <p className="taskId">Task ID: {taskData.id}</p>
            </div>
            <div className='taskInput'>
                <div className='chkbx'>
                    <input className="taskCheck" type="checkbox" defaultChecked={taskData.completed} onChange={handleEdit} />
                    <span>Completed</span> 
                </div>
                
            </div>
            <button className='btn delbtn' id={taskData.id} onClick={() => handleDeletion(taskData.id)}>Delete Task</button>
        </div>
    )
}

export default memo(Task)