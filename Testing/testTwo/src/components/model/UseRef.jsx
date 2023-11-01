import { useEffect, useRef } from "react"

export default function UseRef() {
  const inputRef = useRef(null)

  const inputFocus = () => {
    inputRef.current.focus()
  }

  const focusButton = () => {
    inputFocus()
  }

  useEffect(() => {
    inputFocus()
  })

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={focusButton}>Focus</button>
    </>
  )
}
