import getTasks from "../service/apiRequest"
import { useState } from 'react'

const Taskbtn = () => {
    const [state, setState] = useState([])
    const handleTaskAddition = () => {

    }
    return (
        <button className="btn taskbtn" onClick={handleTaskAddition}>Add Task</button>
    )
}

export default Taskbtn