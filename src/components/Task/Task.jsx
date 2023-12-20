import { useState } from 'react';
import { TaskProvider } from '../../App';
import { editStatus } from '../../service/apiRequest';
import './task.css'
import {memo, useContext} from "react";

const Task = ({id}) => {
    const {getTaskData, handleDeletion} = useContext(TaskProvider)
    const taskData = getTaskData(id)

    const handleStatus = (event) => {
        editStatus(event.target.id, event.target.checked)
    }

    return (
        <div className="taskCard container">
            <div>
                <h1 className="taskBody">{taskData.todo}</h1>
                <p className="taskId">Task ID: {taskData.id}</p>
            </div>
            <div className='taskInput'>
                <div className='chkbx'>
                    <input className="taskCheck" id={taskData.id} type="checkbox" defaultChecked={taskData.completed} onChange={handleStatus} />
                    <span>Completed</span> 
                </div>
                
            </div>
            <button className='btn delbtn' id={taskData.id} onClick={() => handleDeletion(taskData.id)}>Delete Task</button>
        </div>
    )
}

export default memo(Task)