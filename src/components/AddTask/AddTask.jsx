import { addTask } from '../../service/apiRequest'
import { useRef, useState } from 'react'
import { IoClose } from "react-icons/io5";
import './addtask.scss'
import Button from '../../designSystem/button/button';
import Checkbox from '../../designSystem/checkbox/checkbox';
import TextField from '../../designSystem/textfield/textfield';

const AddTask = ({onAdd, onExit}) => {
    const [error, setError] = useState(false)

    // const todoRef = useRef(null)
    // const statusRef = useRef(null)

    let task = {
        todo: null,
        completed: null
    }
    
    const handleDesc = (e) => {
        task = {
            ...task,
            todo: e.target.value
        }
    }

    const handleState = (e) => {
        task = {
            ...task,
            completed: e.target.checked
        }
    }

    const handleSubmit = () => {
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
                    <Button onClick={onExit} title='Cancel' type={"cancel"} children={<span className='iconHolder'><IoClose /></span>}/>
                </div>
                <form className='taskform'>
                    {/* <input id="taskData" className="taskDescription" ref={todoRef} placeholder='Task Details' /> */}
                    <TextField id="taskData" className="taskDescription" placeholder='Task Details' onChange={(e) => handleDesc(e)}/>
                    <div className='addcheck'>
                        <span>Task Status: </span>
                        {/* <input id="taskStatus" className="taskCheck" type='checkbox' ref={statusRef} title='Task Status'/> */}
                        <Checkbox id="taskStatus" className="taskCheck" title='Task Status' onChange={(e) => handleState(e)}/> 
                    </div>
                </form>
                <Button onClick={handleSubmit} title='Submit Task' type={"long"} children={"Submit Task"} />
                {error && <p>Task details must not be empty!</p>}
            </div>
        </div>
    )
}

export default AddTask