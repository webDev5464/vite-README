import { useEffect, useRef, useState } from "react"

export default function InputValueCount() {
  const [inputValue, setInputValue] = useState("")
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1
  })

  return (
    <div>
      <input
        type="text"
        placeholder="Write Something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h2>Render count : {count.current}</h2>
    </div>
  )
}
