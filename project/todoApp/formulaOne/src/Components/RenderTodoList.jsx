import { useContext } from "react"
import { TodoControllerContext } from "../App"

export default function RenderTodoList() {
  const { storedTodo, todoInput } = useContext(TodoControllerContext)

  return (
    <div>
      {
        todoInput.map((x) => (
          <div key={x.id}>
            <span>{x.date} {x.time}</span>
            <h1>{x.heading} {x.title}</h1>
          </div>
        ))
      }
    </div>
  )
}