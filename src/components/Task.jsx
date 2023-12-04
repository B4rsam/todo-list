import '../styles/style.css'

const Task = ({taskData}) => {
    return (
        <div className="taskCard">
            <h1 className="taskBody">{taskData.todo}</h1>
            <p className="taskId">{taskData.id}</p>
            <input type="checkbox"></input>
        </div>
    )
}

export default Task