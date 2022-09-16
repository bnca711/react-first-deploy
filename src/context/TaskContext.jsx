import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length+1,
      description: task.description
    }])
  }

  function deleteTask(taskId) {
    //Recorre cada task y compara task.id con taskId, si es diferente se queda en la array, si es igual, se elimina de la array
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}