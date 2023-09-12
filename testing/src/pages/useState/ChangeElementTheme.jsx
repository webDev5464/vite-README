import { useState } from 'react'

export default function ChangeElementTheme() {
  const [toggle, setToggle] = useState(true)
  return (
    <div>
      <h2 style={toggle ? styles.black : styles.white}>
        {toggle ? "Black" : "White"}
      </h2>
      <button onClick={() => setToggle(!toggle)} style={styles.btn}>Click!</button>
    </div>
  )
}

const styles = {
  black: {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    marginBottom: "10px"
  },
  white: {
    backgroundColor: "White",
    color: "Black",
    padding: "10px",
    marginBottom: "10px"
  },
  btn: {
    padding: "5px 7px"
  }
}