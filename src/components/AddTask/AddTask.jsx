import { addTask } from '../../service/apiRequest'
import { useState } from 'react'
import './addtask.css'

const AddTask = ({onAdd, onExit}) => {
    const [isLoading, setLoading] = useState(false)
    const [task, setTask] = useState({
        todo: "",
        completed: false,
        id: 100
    })
    const handleSubmit = () => {
        // const task = {
        //     id: 100,
        //     todo: document.getElementById("taskData").value,
        //     completed: document.getElementById("taskStatus").checked,
        //     userId: 200
        // }
        // addTask(task)
        // onAdd(task)
        // onExit();

        setLoading(true)
        addTask(task).then(() => {
            onAdd(task)  
        }).catch().finally(() => {
            setLoading(false)
            onExit()
        })
        
    }

    const handleDescription = (event) => {
        setTask({
            todo: event.target.value,
            completed: task.completed,
            id: 100
        })
    }
    const handleCheckbox = (event) => {
        setTask({
            todo: task.todo,
            completed: event.target.checked,
            id: 100
        })
    }

    return (
        <div className='wrapper'>
            <div className='container addBox'>
                <div className='header addheader'>
                    <h1>Add a Task</h1> 
                    <button className='btn delbtn' onClick={onExit}>Cancel</button>
                </div>
                <form>
                    <input id="taskData" className="taskDescription" onChange={handleDescription} placeholder='Task Description' />
                    <input id="taskStatus" type='checkbox' onChange={handleCheckbox} />
                    <span>Completed</span>
                </form>
                <button className='btn taskbtn' onClick={handleSubmit}>Submit Task</button>
            </div>
        </div>
    )
}

export default AddTask