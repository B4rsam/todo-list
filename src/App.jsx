import { useState } from 'react'
import Taskbtn from './components/Taskbtn'
import Task from './components/Task'
import { useEffect } from 'react'
import getTasks from './service/getTasks'
import './styles/style.css'

function App() {
  const [state, setState] = useState([])
  useEffect(() => {
    console.log("start")
    getTasks().then((data) => {
      setState(data.data)
    })
  },[])
  return (
    <>
    <Taskbtn />
    <div>{(data) => <div className='taskholder'>{data.map(item => <Task key={item.id} taskData={item}/>)}</div>}</div>
    </>
  )
}

export default App