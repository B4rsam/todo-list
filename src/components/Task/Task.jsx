const Task = ({taskData, onDelete}) => {
    return (
        <div className="taskCard container">
            <div>
                <h1 className="taskBody">{taskData.todo}</h1>
                <p className="taskId">Task ID: {taskData.id}</p>
            </div>
            <div className='taskInput'>
                <div className='chkbx'>
                    <input className="taskCheck" type="checkbox" defaultChecked={taskData.completed} ></input>
                    <span>Completed</span> 
                </div>
                <button className='btn delbtn' id={taskData.id} onClick={() => onDelete(taskData.id)}>Delete Task</button>
            </div>
        </div>
    )
}

export default Task