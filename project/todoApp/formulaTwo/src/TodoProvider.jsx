/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const TodoContext = createContext()

export default function TodoProvider({ children }) {
  const [todoHeading, setTodoHeading] = useState("")
  const [todoTitle, setTodoTitle] = useState("")  

  return (
    <TodoContext.Provider value={{
      todoHeading,
      setTodoHeading,
      todoTitle,
      setTodoTitle
    }}>
      {children}
    </TodoContext.Provider>
  )
}