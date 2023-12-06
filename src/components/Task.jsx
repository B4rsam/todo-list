import '../styles/style.css'

const Task = ({taskData}) => {
    return (
        <div className="taskCard container">
            <h1 className="taskBody">{taskData.todo}</h1>
            <p className="taskId">Task ID: {taskData.id}</p>
            <p className='taskStatus'>Completed: </p>
            <input type="checkbox"></input>
        </div>
    )
}

export default Task