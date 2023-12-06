import '../styles/style.css'
import { deleteTask } from '../service/apiRequest'

const Task = ({taskData}) => {
    return (
        <div className="taskCard container">
            <div>
                <h1 className="taskBody">{taskData.todo}</h1>
                <p className="taskId">Task ID: {taskData.id}</p>
            </div>
            <div className='taskInput'>
                <div className='chkbx'>
                    <input className="taskCheck" type="checkbox"></input>
                    <span>Completed</span> 
                </div>
                <button className='btn delbtn' id={taskData.id} onClick={() => handleTaskDeletion(taskData.id)}>Delete Task</button>
            </div>
        </div>
    )
}

export default Task