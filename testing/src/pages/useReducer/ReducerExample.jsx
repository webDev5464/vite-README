import { useReducer } from "react"

const reducer = (state, action) => {
  if (action.type === 'increment_age') {
    return {
      age: state.age + 1
    }
  }
  throw Error('Unknown Action')
}

export default function ReducerExample() {
  const [state, despatch] = useReducer(reducer, { age: 22 })

  return (
    <div>
      <h2>My Age is {state.age}</h2>
      <button onClick={() => despatch({ type: 'increment_age' })}>Click!</button>
    </div>
  )
}
