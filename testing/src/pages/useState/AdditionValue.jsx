import { useState } from "react"

export default function AdditionValue() {
  const [value, setValue] = useState(0)
  return (
    <div>
      <h2>Value : {value}</h2>
      <button onClick={() => setValue(value + 1)}>Add Value</button>
      <br />
      <br />
      <button onClick={() => { value == 0 ? "" : setValue(value - 1) }}>
        Less Value
      </button>
    </div>
  )
}
