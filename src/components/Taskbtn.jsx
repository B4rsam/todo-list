import getTasks from "../service/getTasks"
import { useState } from 'react'

const Taskbtn = () => {
    const [state, setState] = useState([])
    const handleTaskAddition = () => {

    }
    return (
        <button className="btn taskbtn" onClick={() => console.log("btn")}>Add Task</button>
    )
}

export default Taskbtn