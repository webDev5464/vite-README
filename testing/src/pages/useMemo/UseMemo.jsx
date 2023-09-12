import { useMemo, useState } from "react"
import local from "./local.module.css"

export default function UseMemo() {
  const [todo, setTodo] = useState([])
  const addTodo = () => {
    setTodo(t => [...t, "New Todo"])
  }

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(c => c + 1)
  }

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {
      num += 1
    }
    return num
  }
  const calculation = useMemo(() => expensiveCalculation(count), [count])

  return (
    <div>
      <section className={local.parent}>
        <div>
          {todo.map((todo, index) => {
            return <p key={index}>{todo}</p>
          })}
          <button onClick={addTodo}>Click</button>
        </div>
        <div>
          <p>Count: {count} <button onClick={increment}>+</button></p>
          <div>{calculation}</div>
        </div>
      </section>
    </div>
  )
}
