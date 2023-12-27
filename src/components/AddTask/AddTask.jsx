import { addTask } from '../../service/apiRequest'
import { useRef, useState } from 'react'
import './addtask.css'
import '../../styles/global.css'
import { IoClose } from "react-icons/io5";

const AddTask = ({onAdd, onExit}) => {
    const [error, setError] = useState(false)

    const todoRef = useRef(null)
    const statusRef = useRef(null)

    const handleSubmit = () => {
        const task = {
            todo: todoRef.current.value,
            completed: statusRef.current.checked

        }
        console.log(task.todo)
        if (!task.todo) {
            setError(true)
            return;
        }

        addTask(task).then(() => {
            onAdd(task)  
        }).catch().finally(() => {
            onExit()
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
                    <input id="taskData" className="taskDescription" ref={todoRef} placeholder='Task Details' />
                    <div className='addcheck'>
                        <span>Task Status: </span>
                        <input id="taskStatus" className="taskCheck" type='checkbox' ref={statusRef} title='Task Status'/>  
                    </div>
                    
                </form>
                <button className='btn taskbtn submit' onClick={handleSubmit}>Submit Task</button>
                {error && <p>Task details must not be empty!</p>}
            </div>
        </div>
    )
}

export default AddTask