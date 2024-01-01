import { useState } from 'react';
import { TaskProvider } from '../../App';
import { editStatus,editTask } from '../../service/apiRequest';
import './task.css'
import {memo, useContext} from "react";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Task = ({id, onEdit}) => {
    const {getTaskData, handleDeletion} = useContext(TaskProvider)
    const taskData = getTaskData(id)

    const handleStatus = (event) => {
        editStatus(event.target.id, event.target.checked)
    }

    const handleEdit = (id) => {
        const input = prompt("Enter new task details:")
        editTask(id, input).then(() => {
            onEdit(id,input)
        })
    }

    return (
        <div className="taskCard container">
            {/* {editMode && <div className='taskEditor'>
                <input className='taskDescription'/>
            </div>} */}
            <div className='taskcontent'>
                <div className='taskheader'>
                    <h1 className="taskBody">{taskData.todo}</h1>
                    <p className="taskId">Task ID: {taskData.id}</p>
                </div>
            </div>
            <div className='taskbtns'>
                <button className='btn delbtn' id={taskData.id} onClick={() => handleDeletion(taskData.id)} title='Delete Task'><span className='iconHolder'><MdOutlineDelete /></span></button>
                <button className='btn editbtn' id={taskData.id} title='Edit Task' onClick={() => handleEdit(taskData.id)}><span className='iconHolder'><MdOutlineModeEdit /></span></button>
                <input className="taskCheck" id={taskData.id} type="checkbox" defaultChecked={taskData.completed} onChange={handleStatus} title='Task Status' content={<FaCheck />}/>
            </div>  
        </div>
    )
}

export default memo(Task)