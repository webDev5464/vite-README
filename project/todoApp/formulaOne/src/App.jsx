import { createContext, useState, useEffect } from "react";
import TodoController from "./Components/TodoController";
import RenderTodoList from "./Components/RenderTodoList";

export const TodoControllerContext = createContext()

export default function App() {
  const [todoInput, setTodoInput] = useState([])
  const [storedTodo, setStoredTodo] = useState([])
  console.log(storedTodo);

  const getTodo = () => {
    const storedTodoData = JSON.parse(localStorage.getItem("todos"))

    if (storedTodoData) {
      setStoredTodo(storedTodoData)
    }
  }

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <TodoControllerContext.Provider value={{ todoInput, setTodoInput, getTodo, storedTodo }}>
      <TodoController />
      <RenderTodoList />
    </TodoControllerContext.Provider>
  )
}