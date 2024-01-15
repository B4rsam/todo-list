import { addTask } from '../../service/apiRequest'
import { useRef, useState } from 'react'
import { IoClose } from "react-icons/io5";
import './addtask.scss'
import Button from '../../designSystem/button/button';

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
            <div className='container addBox p-16 m-t-16'>
                <div className='header addheader'>
                    <h1 className='headertitle'>Add a Task</h1> 
                    <Button onClick={onExit} title='Cancel' cancel={true} children={<span className='iconHolder'><IoClose /></span>}/>
                </div>
                <form className='taskform'>
                    <input id="taskData" className="taskDescription" ref={todoRef} placeholder='Task Details' />
                    <div className='addcheck'>
                        <span>Task Status: </span>
                        <input id="taskStatus" className="taskCheck" type='checkbox' ref={statusRef} title='Task Status'/>  
                    </div>
                    
                </form>
                <Button onClick={handleSubmit} title='Submit Task' long={true} children={"Submit Task"} />
                {error && <p>Task details must not be empty!</p>}
            </div>
        </div>
    )
}

export default AddTask