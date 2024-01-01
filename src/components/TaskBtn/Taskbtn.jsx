import { useState } from 'react'
import AddTask from "../AddTask/AddTask"
import './taskbtn.css'
import '../../styles/global.css'
import { IoAddSharp } from "react-icons/io5"

const Taskbtn = ({onAdd}) => {
    const [modal, showModal] = useState(false)

    const handleModal = () => {
        showModal(!modal);
    }

    return (
        <>
            <button className="btn taskbtn" onClick={handleModal} title='Add a task'><span className='iconHolder'><IoAddSharp /></span></button>   
            {modal && <AddTask onAdd={onAdd} onExit={handleModal}/>}
        </>
    )
}

export default Taskbtn