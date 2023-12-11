import '../styles/style.css'
import { addTask } from '../service/apiRequest'

const AddTask = ({addFunction, onExit}) => {
    const handleSubmit = () => {
        const task = {
            id: 100,
            todo: document.getElementById("taskData").value,
            completed: document.getElementById("taskStatus").checked,
            userId: 200
        }
        addTask(task)
        addFunction(task)
        onExit();
    }

    return (
        <div className='wrapper'>
            <div className='container addBox'>
                <div className='header addheader'>
                    <h1>Add a Task</h1> 
                    <button className='btn delbtn' onClick={onExit}>Cancel</button>
                </div>
                <form>
                    <input id="taskData" className="taskDescription" placeholder='Task Description'></input>
                    <input id="taskStatus" type='checkbox'></input>
                    <span>Completed</span>
                </form>
                <button className='btn taskbtn' onClick={handleSubmit}>Submit Task</button>
            </div>
        </div>
    )
}

export default AddTask