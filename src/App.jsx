import { createContext } from 'react'
import Taskbtn from './components/TaskBtn/Taskbtn'
import EditBtn from './components/EditBtn/EditBtn';
import useViewController from './utils/useViewController'
import { useState } from 'react';

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
    <div className='container btnbox'>
      <Taskbtn onAdd={dummyUpdate}/>
      <EditBtn />
    </div>
      <TaskProvider.Provider value={details}>
          <div className='container taskContainer'>{isLoading && <p>Loading Tasks</p>}{taskList}</div>   
      </TaskProvider.Provider>
    </>
  )
}

export default App