import { useState } from 'react'
import AddTask from "../AddTask/AddTask"

const Taskbtn = ({addFunction}) => {
    const [modal, showModal] = useState(false)

    const handleModal = () => {
        showModal(!modal);
    }

    return (
        <>
            <button className="btn taskbtn" onClick={handleModal}>Add Task</button>
            {modal && <AddTask addFunction={addFunction} onExit={handleModal}/>}
        </>
    )
}

export default Taskbtn