import getTasks from "../service/apiRequest"
import { useState } from 'react'
import AddTask from "./Adder"

const Taskbtn = ({showBox, addFunction}) => {
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