import {useState} from 'react'
import './App.css'
import {TaskBox} from "./task-box";

type Task = {
  title: string;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  const [task, setTask] = useState('')

  const addTask = () => {

    if (task === '') {
      return;
    }

    const newTask = {
      title: task
    }
    setTasks([...tasks, newTask])

    setTask('')
  }

  const removeTask = (index: number) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className="box">
      <div className="title">
        <p>Minhas Tarefas</p>
      </div>

      <div className="addTask">
        <input
          type="text"
          placeholder="Digite a sua tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          onClick={addTask}
        >
          Adicionar
        </button>
      </div>


      {tasks.length > 0 ? (
        <>
          {tasks.map((task, index) => (
            <TaskBox
              key={index}
              task={task}
              onDone={() => removeTask(index)}
            />
          ))}
        </>
      ) : (
        <div className="empty">
          <p>Nenhuma tarefa cadastrada!</p>
        </div>
      )}
    </div>
  )
}

export default App
