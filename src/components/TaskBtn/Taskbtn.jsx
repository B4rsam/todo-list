import { useState } from 'react'
import AddTask from "../AddTask/AddTask"
import EditBtn from '../EditBtn/EditBtn'
import './taskbtn.css'
import '../../styles/global.css'

const Taskbtn = ({onAdd}) => {
    const [modal, showModal] = useState(false)

    const handleModal = () => {
        showModal(!modal);
    }

    return (
        <>
        <div className='container btnbox'>
            <button className="btn taskbtn" onClick={handleModal}>Add Task</button>
            <EditBtn />
        </div>
            
            {modal && <AddTask onAdd={onAdd} onExit={handleModal}/>}
        </>
    )
}

export default Taskbtn