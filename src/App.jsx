import { createContext } from 'react'
import Taskbtn from './components/TaskBtn/Taskbtn'
import useViewController from './utils/useViewController'

export const TaskProvider = createContext();

function App() {
  const {
    taskList,
    details,
    dummyUpdate
  } = useViewController();

  return (
    <>
      <Taskbtn onAdd={dummyUpdate}/>
      <TaskProvider.Provider value={details}>
          <div className='container taskContainer'>{taskList}</div>   
      </TaskProvider.Provider>
    </>
  )
}

export default App