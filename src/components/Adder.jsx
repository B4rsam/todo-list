import '../styles/style.css'
import { addTask } from '../service/apiRequest'

const AddTask = () => {
    const handleSubmit = () => {
        const taskDescriptionValue = document.getElementById("taskData").value
        const taskStatus = document.getElementById("taskStatus").checked
        if (taskDescriptionValue !== null)
        {
            addTask(taskDescriptionValue,taskStatus)
        }
    }

    return (
        <div className='container addBox'>
            <div className='header addheader'>
               <h1>Add a Task</h1> 
               <button className='btn delbtn'>Cancel</button>
            </div>
            <form>
                <input id="taskData" className="taskDescription" placeholder='Task Description'></input>
                <input id="taskStatus" type='checkbox'></input>
                <span>Completed</span>
            </form>
            <button className='btn taskbtn' onClick={handleSubmit}>Submit Task</button>
        </div>
    )
}

export default AddTask