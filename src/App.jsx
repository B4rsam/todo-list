import { useState } from 'react'
import Taskbtn from './components/Taskbtn'
import Task from './components/Task'
import { useEffect } from 'react'
import {getTasks, deleteTask, addTask} from './service/apiRequest'
import AddTask from './components/Adder'
import './styles/style.css'



function App() {
  const [task, setTasks] = useState([])
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
  }

  return (
    <>
    <AddTask />
      <Taskbtn />
      <div className='container taskContainer'>{task.map((item) => <Task state={task} key={item.id} taskData={item} onDelete={handleTaskDeletion}/>)}</div>
    </>
  )
}

export default App