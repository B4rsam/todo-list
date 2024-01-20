import { TaskProvider } from '../../App';
import { editStatus,editTask } from '../../service/apiRequest';
import {memo, useContext} from "react";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import Button from '../../designSystem/button/button';
import Checkbox from '../../designSystem/checkbox/checkbox';
import '../../assets/styles/main.sass';
import './task.scss';

const Task = ({id, onEdit}) => {
    const {getTaskData, handleDeletion} = useContext(TaskProvider)
    const taskData = getTaskData(id)

    const handleStatus = (event) => {
        editStatus(event.target.id, event.target.checked)
    }

    const handleEdit = (id) => {
        const input = prompt("Enter new task details:")
        if (input != null)
        {
            editTask(id, input).then(() => {
                onEdit(id,input)
            })
        }
        return
    }

    return (
        <div className="taskCard container m-b-8 p-16">
            <div className='taskcontent'>
                <div className='taskheader'>
                    <h1 className="taskBody font-32">{taskData.todo}</h1>
                    <p className="taskId font-10">Task ID: {taskData.id}</p>
                </div>
            </div>
            <div className='taskbtns'>
                <Button className='m-4' children={<span className='iconFix'><MdOutlineDelete /></span>} title='Delete Task' onClick={() => handleDeletion(taskData.id)} type={"rounded"} />
                <Button className='m-4' children={<span className='iconFix'><MdOutlineModeEdit /></span>} title='Edit Task' onClick={() => handleEdit(taskData.id)} type={"rounded"} />
                <Checkbox className='m-4' state={taskData.completed} id={taskData.id} onChange={handleStatus} title='Task Status' />
            </div>  
        </div>
    )
}

export default memo(Task)