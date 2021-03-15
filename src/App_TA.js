import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import UpdateTask from './components/UpdateTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [signal, setSignal] = useState(false)
  const [id, setID] = useState(-1)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('https://my-json-server.typicode.com/xu1998hz/JSON_Server/tasks')
    const data = await res.json()

    return data
  }

  // Add task
  const addTask = async (task) => {
    const res = await fetch('https://my-json-server.typicode.com/xu1998hz/JSON_Server/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
    // const id = Math.max.apply(Math, tasks.map(function(ele) { return ele.id; }))+1
    // const newTask = {id, ...task}
    // console.log(newTask)
    // setTasks([...tasks, newTask])
  }

  // Delete a Task with all filter
  const deleteTask = async (id) => {
    const res = await fetch(`https://my-json-server.typicode.com/xu1998hz/JSON_Server/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  const updateSignal = (local_id) => {
    if (local_id == id) {
      setSignal(false)
      setID(-1)
      return 
    }
    setSignal(true)
    setID(local_id)
  }
  // Toggle Reminder
  const updateTask = async ({title, day, textInfor, important}) => {
    const updTask = {id: id, important: important, title: title,
                    day: day, textInfor: textInfor}
    const res = await fetch(`https://my-json-server.typicode.com/xu1998hz/JSON_Server/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    setTasks(tasks.map((task) => task.id === id ?
      {id: task.id, important: important, title: title,
      day: day, textInfor: textInfor}
     : task))
     setSignal(false)
     setID(-1)
  }

  return (
    // Must return a single parent element
    <div className="container">
      <Header title='Zoom Meeting Manager' onAdd={()=>setShowAddTask(!showAddTask)}
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete={deleteTask} updateSignal={updateSignal}
        onAddshow={showAddTask}/>
      : 'No available schedules at this momemnt'}
      {signal && <UpdateTask onAdd={updateTask}/>}
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

export default App;
