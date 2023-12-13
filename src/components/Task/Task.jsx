import { TaskProvider } from '../../App';
import './task.css'
import {memo, useContext} from "react";

const Task = ({id}) => {
    const {getTaskData, handleDeletion} = useContext(TaskProvider)
    const taskData = getTaskData(id)

    return (
        <div className="taskCard container">
            <div>
                <h1 className="taskBody">{taskData.todo}</h1>
                <p className="taskId">Task ID: {taskData.id}</p>
            </div>
            <div className='taskInput'>
                <div className='chkbx'>
                    <input className="taskCheck" type="checkbox" defaultChecked={taskData.completed} />
                    <span>Completed</span> 
                </div>
                <button className='btn delbtn' id={taskData.id} onClick={() => handleDeletion(taskData.id)}>Delete Task</button>
            </div>
        </div>
    )
}

export default memo(Task)