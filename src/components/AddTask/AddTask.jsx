import { addTask } from '../../service/apiRequest'
import { useState } from 'react'
import './addtask.css'
import '../../styles/global.css'
import { IoClose } from "react-icons/io5";

const AddTask = ({onAdd, onExit}) => {
    const [task, setTask] = useState({
        todo: "",
        completed: false,
        id: 100
    })
    const handleSubmit = () => {
        addTask(task).then(() => {
            onAdd(task)  
        }).catch().finally(() => {
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
                    <h1 className='headertitle'>Add a Task</h1> 
                    <button className='btn cancelbtn' onClick={onExit} title='Cancel'><IoClose /></button>
                </div>
                <form className='taskform'>
                    <input id="taskData" className="taskDescription" onChange={handleDescription} placeholder='Task Details' />
                    <div className='addcheck'>
                        <span>Task Status: </span>
                        <input id="taskStatus" className="taskCheck" type='checkbox' onChange={handleCheckbox} title='Task Status'/>  
                    </div>
                    
                </form>
                <button className='btn taskbtn submit' onClick={handleSubmit}>Submit Task</button>
            </div>
        </div>
    )
}

export default AddTask