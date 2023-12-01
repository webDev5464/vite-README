import { useContext, useState, useEffect } from "react";
import { TodoControllerContext } from "../App";

export default function TodoController() {
  const { setTodoInput, getTodo } = useContext(TodoControllerContext);

  const [todoHeading, setTodoHeading] = useState("");
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    getTodo();
  }, []);

  const date = new Date();
  const fullDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  const fullTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const addTodo = () => {
    if (todoHeading && todoTitle) {
      const newTodo = { id: Date.now(), date: fullDate, time: fullTime, heading: todoHeading, title: todoTitle };
      const key = `todos_${Date.now()}`;
      const existingTodos = JSON.parse(localStorage.getItem(key)) || [];
      const updatedTodos = [...existingTodos, newTodo];
      setTodoInput(updatedTodos);
      localStorage.setItem(key, JSON.stringify(updatedTodos));
      setTodoHeading("");
      setTodoTitle("");
      getTodo();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="todoHeading"
        placeholder="Todo Heading"
        value={todoHeading}
        onChange={(e) => setTodoHeading(e.target.value)}
      />
      <input
        type="text"
        name="todoTitle"
        placeholder="Todo Title"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />

      <button onClick={addTodo}>Submit</button>
    </div>
  );
}
