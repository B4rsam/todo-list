import { useState } from 'react';
import { TaskProvider } from '../../App';
import { editStatus } from '../../service/apiRequest';
import './task.css'
import {memo, useContext} from "react";
import { MdOutlineDelete } from "react-icons/md";

const Task = ({id}) => {
    const {getTaskData, handleDeletion, editMode} = useContext(TaskProvider)
    const taskData = getTaskData(id)

    const handleStatus = (event) => {
        editStatus(event.target.id, event.target.checked)
    }

    return (
        <div className="taskCard container">
            
            <div className='taskheader'>
                <h1 className="taskBody">{taskData.todo}</h1>
                <button className='btn delbtn' id={taskData.id} onClick={() => handleDeletion(taskData.id)} title='Delete Task'><MdOutlineDelete /></button>
            </div>
            <p className="taskId">Task ID: {taskData.id}</p>
            <div className='taskInput'>
                <div className='chkbx'>
                    <input className="taskCheck" id={taskData.id} type="checkbox" defaultChecked={taskData.completed} onChange={handleStatus} />
                    <span>Completed</span> 
                </div>
                
            </div>
            
        </div>
    )
}

export default memo(Task)