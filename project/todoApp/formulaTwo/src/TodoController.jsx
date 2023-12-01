import { useContext } from "react"
import { TodoContext } from "./TodoProvider"

export default function TodoController() {
  return (
    <>
      <TodoForm />
    </>
  )
}

function TodoForm() {
  const { todoHeading, setTodoHeading, todoTitle, setTodoTitle } = useContext(TodoContext)

  const todoForm = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={todoForm}>
      <input type="text" placeholder="Todo Heading" name="heading" value={todoHeading} onChange={(e) => setTodoHeading(e.target.value)} />
      <input type="text" placeholder="Todo Title" name="title" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  )
}