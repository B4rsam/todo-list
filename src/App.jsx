import { createContext } from 'react'
import Taskbtn from './components/TaskBtn/Taskbtn'
import useViewController from './utils/useViewController'
import './assets/styles/main.sass'

export const TaskProvider = createContext();

function App() {
  const {
    taskList,
    details,
    dummyUpdate,
    isLoading
  } = useViewController();

  return (
    <>
    <div className='backgrnd btnbox'>
    <h2 className='title font-12'>Todo List</h2>
      <Taskbtn onAdd={dummyUpdate}/>
    </div>
    <div className='spacer'/>
      <TaskProvider.Provider value={details}>
          <div className='container taskContainer p-24 m-b-16' >{isLoading && <p>Loading Tasks</p>}{taskList}</div>   
      </TaskProvider.Provider>
    </>
  )
}

export default App