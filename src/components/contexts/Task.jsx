import React, { createContext, useReducer } from 'react'
import { tasksReducer } from '../reducers/task'


export const TaskContext= createContext()

const TaskProvider = ({children}) => {
  const [tasks, dispatchTasksActions]= useReducer(tasksReducer, [])


  return (
    <TaskContext.Provider value={{tasks, dispatchTasksActions}}>
      {children}
      </TaskContext.Provider>
  )
}

export default TaskProvider