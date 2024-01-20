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
            <Button className="m-16" children={<IoAddSharp />} type={"rounded"} title="Add a Task" onClick={handleModal}/>
            {modal && <AddTask onAdd={onAdd} onExit={handleModal}/>}
        </>
    )
}

export default Taskbtn