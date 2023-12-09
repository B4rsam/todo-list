import getTasks from "../service/apiRequest"
import { useState } from 'react'

const Taskbtn = ({onAdd}) => {
    return (
        <button className="btn taskbtn" onClick={onAdd}>Add Task</button>
    )
}

export default Taskbtn