import { useState } from 'react'
import Taskbtn from './components/Taskbtn'
import Task from './components/Task'
import { useEffect } from 'react'
import getTasks from './service/apiRequest'
import './styles/style.css'

let testFlag = false

function App() {
  const [task, setTasks] = useState([])
  useEffect(() => {
    if (testFlag === false)
    {
      console.log("start")
      getTasks().then((data) => {
      setTasks(data.data.todos)
      testFlag = true
    })
    }
  },[testFlag])
  const handleTaskDeletion = (id) => {
    deleteTask(id).then(() => {
            const filteredItem = state.filter((task) => task.id !== id)
            setState(filteredItem)
        }
    )
}
  return (
    <>
      <Taskbtn />
      <div className='container taskContainer'>{task.map((item) => <Task state={task} key={item.id} taskData={item}/>)}</div>
    </>
  )
}

export default App