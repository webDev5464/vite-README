import { useState } from "react"

export default function UseState() {
  const [todo, setTodo] = useState([])
  const [inputVal, setInputVal] = useState('')

  const addTodo = () => {
    if (inputVal) {
      setTodo([...todo, inputVal])
      setInputVal('')
    }
  }

  const deleteTodo = (index) => {
    const updatedTodo = [...todo]
    updatedTodo.splice(index, 1)
    setTodo(updatedTodo)
  }

  return (
    <section>
      <h1>Todo List</h1>

      <input type="text" placeholder="Add Todo List" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todo.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
