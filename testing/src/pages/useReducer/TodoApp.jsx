import { useReducer } from "react";

const taskReducer = (task, action) => {
  switch (action.type) {
    case 'added': {
      return [...task, {
        id: action.id,
        text: action.text,
        default: false
      }];
    }
    case 'change': {
      return task.map(t => {
        if (t.id === action.tasks.id) {
          return action.tasks;
        } else {
          return t
        }
      });
    }
    case 'deleted': {
      return task.filter(t => t.id !== action.id)
    }
    default: {
      throw Error('Unknown Action ' + action.type)
    }
  }
}

export default function TodoApp() {

  const [tasks, dispatch] = useReducer(
    taskReducer, initTasks
  );

  const handleAddTask = (text) => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    });
  }

  const handleChangeTask = (task) => {
    dispatch({
      type: 'change',
      task: task
    });
  }

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: 'delete',
      id: taskId
    })
  }

  return (
    <div>
      <input type="text" />
    </div>
  )
}

let nextId = 3;
const initTasks = [
  { id: 0, text: "lorem", done: true },
  { id: 1, text: "lorem", done: false },
  { id: 2, text: "lorem", done: false }
]