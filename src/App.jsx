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
    isLoading,
    toggleEditMode
  } = useViewController();

  return (
    <>
    <div className='container btnbox'>
      <Taskbtn onAdd={dummyUpdate}/>
      <h2 className='title'>Todo List</h2>
      <EditBtn onClick={toggleEditMode}/>
    </div>
      <TaskProvider.Provider value={details}>
          <div className='container taskContainer'>{isLoading && <p>Loading Tasks</p>}{taskList}</div>   
      </TaskProvider.Provider>
    </>
  )
}

export default App