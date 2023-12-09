import getTasks from "../service/apiRequest"
import { useState } from 'react'

const Taskbtn = ({showBox}) => {
    return (
        <button className="btn taskbtn" onClick={showBox}>Add Task</button>
    )
}

export default Taskbtn