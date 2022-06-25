import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTasks from "./components/AddTasks";
const App = () => {
  const [add, setAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id:1,
      text:'Doctors Appointment',
      day:'Feb 5th at 2:30pm',
      reminder:true
    },
    {
      id:2,
      text:'Meeting at school',
      day:'Feb 6th at 1:30pm',
      reminder:true
    },
    {
      id:3,
      text:'Food shopping',
      day:'Feb 5th at 1:30pm',
      reminder:false
    },
  ])

  // Add Task
  const onAddTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const onDelete =  (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
 
   setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !tasks.reminder } : task
      )
    )
  }
 
  return (
    <div className="container">
      <Header onButtonAdd={()=>(setAdd(!add))}  onadd={add} />
      { add?<AddTasks onAddTask={onAddTask}/>:''}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder} />
        : "You Have No Tasks To Do"
      }
    </div>
  );
}

export default App;
