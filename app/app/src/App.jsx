import { useState } from 'react'
import './App.css'

const Form = (addTask) =>{
  cosnt [newTask, setNewTask] = useState()

  const handleChange = (e) =>{
    setNewTask(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    addTask(newTask)
  }

  return(
    <form onSubmit={(e) => handleSubmit(e)} >
      <label >Tarea
        <input type="text" name="task" placeholder='Ingresa tarea' onChange={handleChange}/>
      </label>

      <button type="submit">Agregar</button>
    </form>
  )
}


const Task = ({ id, task, state, completeTask, deleteTask, editTask }) =>{

    const handleCompleteTask  = (e) => {
      completeTask(e)
    }

    const handleDeleteTask = (e) =>{
      deleteTask(e)
    }

    
    const handleEditTask = (e) =>{
     
      editTask(e)
    }

  return(
      <li id={id} >
        {task}

        <div>

          <input id={ ` Estado${id}`} onChange={(e) => handleCompleteTask(e) } type="checkbox"
          value={state}
          />

          <button oClick={handleDeleteTask} id={`Eliminar ${id}`}>Eliminar</button>
          <button oClick={handleEditTask} id={`editar ${id}`}>Editar</button>

        </div>
      </li>
  )
}

const Tasks = ({tasks, completeTask, deleteTask, editTask})=>{

  return(
    <div>
      {
        task.length > 0 ?
        <ul>
          {
            tasks.map(task => (
              <Task {...task} completeTask = {completeTask} deleteTask={deleteTask} editTask = {editTask} key={task.id}/>
            ))
          }
        </ul>
        : 
        <p>No hay tareas</p>
      }

    </div>
  )
}

function App (){
  const  [tasks, setTasks] = useState([])

  const addTask = (task) =>{
      let newtask = {
          id: id,
          task: task,
          state: false
      }
      setTasks([...tasks, newtask])
  }

  const completeTask = (e) =>{
    let id = e.target.id.slice(5)
    const updateTask = tasks.map(task => task.id === id ? {...task,  state: !task.state}: task)
    setTasks(updateTask)
  }

  const deleteTask = (e)=>{
    let id = e.target.id.slice(5)
    const updateTask = tasks.filter(task => task.id !== id)
    setTasks(updateTask)
  }

  const editTask = (e) => {
    let id = e.target.id.slice(5)
    const task =  tasks.find(task => task.id == id)
    const edit = prompt( "Nueva Tarea", task.task);
    const updateTask = tasks.map(tarea => tarea.id === id  ? { ...task , task:edit}: tarea)
    setTasks(updateTask)
  }



  return(
    <>

    </>
  )
}

export default App;