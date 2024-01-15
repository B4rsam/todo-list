import { useState } from 'react'
import AddTask from "../AddTask/AddTask"
import { IoAddSharp } from "react-icons/io5"
import Button from '../../designSystem/button/button'

const Taskbtn = ({onAdd}) => {
    const [modal, showModal] = useState(false)

    const handleModal = () => {
        showModal(!modal);
    }

    return (
        <>
            <Button children={<span className='iconHolder'><IoAddSharp /></span>} rounded={true} title="Add a Task" onClick={handleModal}/>
            {modal && <AddTask onAdd={onAdd} onExit={handleModal}/>}
        </>
    )
}

export default Taskbtn