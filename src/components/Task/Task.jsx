import { useState } from 'react';
import { TaskProvider } from '../../App';
import { editStatus,editTask } from '../../service/apiRequest';
import {memo, useContext} from "react";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import Button from '../../designSystem/button/button';
import Checkbox from '../../designSystem/checkbox/checkbox';

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
        <div className="taskCard container m-b-8 p-16">
            <div className='taskcontent'>
                <div className='taskheader'>
                    <h1 className="taskBody">{taskData.todo}</h1>
                    <p className="taskId">Task ID: {taskData.id}</p>
                </div>
            </div>
            <div className='taskbtns'>
                <Button children={<span className='iconFix'><MdOutlineDelete /></span>} title='Delete Task' onClick={() => handleDeletion(taskData.id)} rounded={true}/>
                <Button children={<span className='iconFix'><MdOutlineModeEdit /></span>} title='Edit Task' onClick={() => handleEdit(taskData.id)} rounded={true}/>
                <Checkbox state={taskData.completed} id={taskData.id} onChange={handleStatus} title='Task Status' content={<FaCheck />}/>
            </div>  
        </div>
    )
}

export default memo(Task)