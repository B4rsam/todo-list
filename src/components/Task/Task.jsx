import { useState } from 'react';
import { TaskProvider } from '../../App';
import { editStatus } from '../../service/apiRequest';
import './task.css'
import {memo, useContext} from "react";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Task = ({id}) => {
    const {getTaskData, handleDeletion, editMode} = useContext(TaskProvider)
    const taskData = getTaskData(id)

    const handleStatus = (event) => {
        editStatus(event.target.id, event.target.checked)
    }
    
    return (
        <div className="taskCard container">
            <div className='taskcontent'>
                <div className='taskheader'>
                    <h1 className="taskBody">{taskData.todo}</h1>
                    <p className="taskId">Task ID: {taskData.id}</p>
                </div>
            </div>
            <div className='taskbtns'>
                <button className='btn delbtn' id={taskData.id} onClick={() => handleDeletion(taskData.id)} title='Delete Task'><MdOutlineDelete /></button>
                <button className='btn editbtn' id={taskData.id} title='Edit Task'><MdOutlineModeEdit /></button>
                <input className="taskCheck" id={taskData.id} type="checkbox" defaultChecked={taskData.completed} onChange={handleStatus} title='Task Status' content={<FaCheck />}/>
            </div>  
        </div>
    )
}

export default memo(Task)