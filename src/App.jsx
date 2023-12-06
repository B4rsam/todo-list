import { useState } from 'react'
import Taskbtn from './components/Taskbtn'
import Task from './components/Task'
import { useEffect } from 'react'
import getTasks from './service/getTasks'
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
  return (
    <>
      <Taskbtn />
      <div className='taskContainer'>{task.map((item) => <Task key={item.id} taskData={item}/>)}</div>
    </>
  )
}

export default App