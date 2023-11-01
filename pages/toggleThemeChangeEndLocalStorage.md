# 🧪 toggleTheme Change end set localStorage

***

- **Preview** :- [Click Here!](https://reactdocumentation-themechange.netlify.app/)

***

## 📌 **`theme.css`**

```css
.dark {
  --black: black;
  --white: white;
}

.light {
  --black: white;
  --white: black;
}
```

## 📌 **`ThemeProvider.jsx`**

```js
import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme")

    if (saveTheme) {
      setTheme(saveTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

## 📌 **`main.jsx`**

```js
import ReactDOM from 'react-dom/client'
import App from './App'
import "./Components/Styles/theme.css"
import "./Components/Styles/index.css"
import ThemeProvider from './Components/Modules/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
```

## 📌 **`App.jsx`**

```js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Pages/Home"
import Navigation from "./Components/Modules/Navigation"
import { useContext } from "react"
import { ThemeContext } from "./Components/Modules/ThemeProvider"

export default function App() {
  const { theme } = useContext(ThemeContext)

  let body = document.getElementById("body")
  body.setAttribute("class", theme)

  return (
    <Router>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  )
}
```

## 📌 **`Navigation.jsx`**

```js
import { NavLink } from "react-router-dom";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function Navigation() {

  const [switchBoll, setSwitchBoll] = useState(
    localStorage.getItem("switchBoll") === "true" || false
  )

  const toggleSwitch = () => {
    let newSwitchBoll = !switchBoll
    setSwitchBoll(newSwitchBoll)
    localStorage.setItem("switchBoll", newSwitchBoll)
  }

  useEffect(() => {
    const storedSwitchBoll = localStorage.getItem("switchBoll")

    if (storedSwitchBoll !== null) {
      setSwitchBoll(storedSwitchBoll === "true")
    }
  }, [])

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className={`dark ${theme}`}>
      <div>
        <h2>MySite</h2>
      </div>

      <div>
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
        </ul>

        {/* Start Switch */}
        <div onClick={toggleTheme}>
          <div className="switch" onClick={toggleSwitch}>
            <div className={switchBoll ? "switchBollLeft" : "switchBollRight"}>
              {switchBoll ? <BiSolidMoon /> : <BiSolidSun />}
            </div>
          </div>
        </div>
        {/* End Switch */}

      </div>
    </nav>
  )
}
```

#### 🔺 **`Switch CSS`**

```css
.switch {
  position: relative;
  border: 2px solid var(--white);
  height: 30px;
  width: 65px;
  margin: 0 0 0 20px;
  border-radius: 20px;
  background-color: var(--white);
  color: var(--black);
  font-size: 25px;
  cursor: pointer;
  box-shadow: inset 0 0 5px var(--black);
}

.switchBollLeft {
  position: absolute;
  left: 2px;
}

.switchBollRight {
  position: absolute;
  right: 2px;
}
```

## 📌 **`Home.jsx`**

```js
import { useContext } from "react"
import { ThemeContext } from "../Modules/ThemeProvider"

export default function Home() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div className={`card ${theme}`}>
        <div className="cardImage">
          <img src="https://res.cloudinary.com/dpiiduvvx/image/upload/v1694261480/cld-sample-2.jpg" alt="codingImage" />
        </div>
        <div className={`cardDetail ${theme}`}>
          <h2>Coding Image</h2>
          <hr />
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur, corporis natus mollitia molestias id?</p>
        </div>
      </div>
    </>
  )
}
```

#### 🔺 **`card.css`**

```css
.card {
  width: 330px;
  border: 3px solid var(--black);
  background-color: var(--black);
  color: var(--white);
  box-shadow: inset 0 0 5px var(--white);
  border-radius: 8px;
  margin: auto;
}

.cardImage {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 0 0;
}

.cardImage>img {
  width: 300px;
  border: 2px dashed var(--white);
}

.cardDetail {
  margin: 10px;
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 5px;
}

.cardDetail>hr {
  margin: 10px 0;
  border: 2px solid var(--white);
}
```

## 📌 **`index.css`**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--white);
  user-select: none;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--black);
  color: var(--white);
}

nav>div:last-child {
  display: flex;
  align-items: center;
}

nav>div>ul>li {
  list-style: none;
}

nav>div>ul>li>a {
  color: var(--white);
  text-decoration: none;
  font-size: 22px;
}

main {
  padding: 10px;
}
```