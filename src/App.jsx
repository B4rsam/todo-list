import { useState } from 'react'
import Taskbtn from './components/Taskbtn'
import Task from './components/Task'
import { useEffect } from 'react'
import {getTasks, deleteTask, addTask} from './service/apiRequest'
import AddTask from './components/Adder'
import './styles/style.css'

function App() {
  const [task, setTasks] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    handleUpdate();
  },[])

  const handleTaskDeletion = (id) => {
    deleteTask(id).then(() => {
            const filteredItem = task.filter((task) => task.id !== id)
            setTasks(filteredItem)
        }
    )
  }

  const handleUpdate = () => {
    getTasks().then((data) => {
    setTasks(data.data.todos)})
    console.log(task)
  }
 
  const dummyUpdate = (inTask) => {
    setTasks(task.concat(inTask))
    console.log(task)
  }
  const showAdder = () => {
    setShow(!show)
  }

  return (
    <>
      {show && <AddTask onExit={showAdder} onAdd={dummyUpdate}/>}
      <Taskbtn showBox={showAdder}/>
      <div className='container taskContainer'>{task.map((item) => <Task state={task} key={item.id} taskData={item} onDelete={handleTaskDeletion}/>)}</div>
    </>
  )
}

export default App