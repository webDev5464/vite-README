# 🎓 Vite Js + React Basic to Advance

## 🔺 Install vite

```bash
npm create vite@latest 
```

- Enter your project name.
- Select react
- Select JavaScript Only

```bash
cd myProject
```

```bash
npm install
```

****
****
**Open vs code in this directory**

```bash
PS C:\Users\Desktop\myProject> code .
```

- **folder structure :**

![Folder Structure](/assets/FolderSructure.png)

- `public` : public directory for show publicly show.
- `src` : the *src* is source directory. this not show publicly.
- `main.jsx` : This file is return all components.
- `App.jsx` : write here hello world.
- `package.json` & `package-lock.json` : **Warning** do not change anything in this file end do not delete this file. this files handle all dependence's end all packages.

**Remove File's end folder :**
- `App.css`
- `index.css`
- `/assets` : `react.svg`
- `/public` : `vite.svg`

**⚠️ Throw Error :** `src/main.jsx` remove line 
```js 
import "./main.jsx"
```

****
****

****
📝 **Note :**

Create Components name always capital latter (`Home.jsx`, `About.jsx`, `Service.js`)
****

## 📌 Start project developer mode.

```bash
npm run dev
```

## 📌 Write Hello World

- open `app.jsx` end remove all code.

```js
export default function App() {
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
}
```

## 📌 CSS

#### 🔺 Global CSS

`app.js` :
```js
import './styles/global.css'

export default function App() {
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
}
```

- create new directory `src/styles/global.css`

```css
h2 {
  color: red;
}
```

This css apply all component's.

#### 🔺 Component CSS

***`src/pages/home/Home.jsx`***

```js
export default function Home() {
  return (
    <div>
      <h2 style={styles.theme}>Hello World</h2>
    </div>
  );
}

const styles = {
  name: "Hello World",
  theme: {
    backgroundColor: "red",
    color: "white",
    fontSize: "36px",
  },
};
```

**Also use like this.**

```js
export default function Home() {
  return (
    <div>
      <h2>{person.name}</h2>
    </div>
  );
}

const person = {
  name: "John Doe",
};
```

#### 🔺 Local CSS

```js 
import Local from "./Local.module.css"
```

import specific component css.

```js
import React from 'react'
import Local from "./Local.module.css"

export default function LocalCss() {
  return (
    <div className={Local.parent}>
      <h1 className={Local.myHeading}>Hello World</h1>
    </div>
  )
}
```

- Create `myLocalStyle.module.css` file name.

```css
.parent {
  background-color: red;
}

.myHeading {
  font-size: 35px;
  font-weight: bolder;
  color: white;
}
```

## 📌 What is a Hook?

Hooks allow us to "hook" into React features such as state and lifecycle methods.

```js
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("Not Selected");

  return (
    <>
      <h2>My Favorite Color is {color}</h2>

      <button onClick={() => setColor("red")}>Click</button>
      <button onClick={() => setColor("green")}>Click</button>
      <button onClick={() => setColor("yellow")}>Click</button>
      <button onClick={() => setColor("blue")}>Click</button>
    </>
  );
}
```

You must `import` Hooks from `react`.

Here we are using the `useState` Hook to keep track of the application state.

State generally refers to application data or properties that need to be tracked.

#### 🔺 Hook Rules
There are 3 rules for hooks:

- Hooks can only be called inside React function components.

- Hooks can only be called at the top level of a component.

- Hooks cannot be conditional

#### 🔺 useState Hook

The React `useState` Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

Import `useState`

To use the `useState` Hook, we first need to `import` it into our component.

At the top of your component, `import` the `useState` Hook.

```js
import { useState } from "react";
```

Initialize `useState`

We initialize our state by calling `useState` in our function component.

`useState` accepts an initial state and returns two values:

The current state.
A function that updates the state.

Initialize state at the top of the function component.

```js
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
```

Notice that again, we are destructuring the returned values from useState.

The first value, color, is our current state.

The second value, setColor, is the function that is used to update our state.

```js
import "./style.css";
import { useState } from "react";

// This is a js comment

export default function App() {
  const [color, setColor] = useState();
  return (
    <>
      {/* This is a jsx comment */}
      {/* Using the ternary operator */}
      <h2 className={color ? "bgBlack" : "bgWhite"}>
        Change background color.
      </h2>

      <button onClick={setColor}>Click!</button>
    </>
  );
}
```

```css
.bgBlack {
  background-color: black;
  color: white;
}

.bgWhite {
  background-color: white;
  color: black;
}
```

## 📌 useEffect() Hooks

The `useEffect` Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

`useEffect` accepts two arguments. The second argument is optional.

`useEffect(<function>, <dependency>)`

Use `setTimeout()` to count 1 second after initial render:

```js
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

  });

  return (
    <>
      <h1>I have rendered {count} times!</h1>
    </>
  );
}
```

But wait!! It keeps counting even though it should only count once!

`useEffect` runs on every render. That means that when the count changes, a render happens, which then triggers another effect.


This is not what we want. There are several ways to control when side effects run.

We should always include the second parameter which accepts an array. We can optionally pass dependencies to `useEffect` in this array.

**1. No dependency passed:**

```js
useEffect(()=> {
  // Runs on every render
})
```

**2. An empty array:**

```js
useEffect(()=> {
  // Runs only on the first render
}, [])
```

**Props or state values**

```js
useEffect(()=> {
  // Runs on the first render
  // And any time any dependency value changes
}, [props, state])
```

**3. Props or state values:**
```js
useEffect(()=> {
  // Runs on the first render
  // And any time any dependency value changes
}, [prop, state])
```

So, to fix this issue, let's only run this effect on the initial render.

```js
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    
  }, []); // <- add empty brackets here

  return (
    <>
      <h1>I have rendered {count} times!</h1>
    </>
  );
}
```

Here is an example of a `useEffect` Hook that is dependent on a variable. If the count variable updates, the effect will run again:

```js
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  });
  return (
    <>
      <p>Count {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Click!</button>
      <p>calculation {calculation}</p>
    </>
  );
}
```

## 📌 useMemo() Hooks

The `useMemo` Hook only runs when one of its dependencies update.


This can improve performance.

**Performance**

- **Without `useMemo()`**

The `useMemo` Hook can be used to keep expensive, resource intensive functions from needlessly running.

In this example, we have an expensive function that runs on every render.

When changing the count or adding a todo, you will notice a delay in execution.

*intensionally create problem*

```js
import { useState } from "react"
import local from "./local.module.css"

export default function WithoutUseMemo() {

  const [todo, setTodo] = useState([])
  const addTodo = () => {
    setTodo(t => [...t, "New Todo"])
  }

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(c => c + 1)
  }

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {
      num += 1
    }
    return num
  }
  const calculation = expensiveCalculation(count)

  return (
    <section className={local.parent}>
      <div>
        {todo.map((todo, index) => {
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Click</button>
      </div>
      <div>
        <p>Count: {count} <button onClick={increment}>+</button></p>
        <div>{calculation}</div>
      </div>
    </section>
  )
}
```

- **Use `useMemo()`**

To fix this performance issue, we can use the `useMemo` Hook to memoize the `expensiveCalculation` function. This will cause the function to only run when needed.

We can wrap the expensive function call with useMemo.

The `useMemoHook` accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.

In the following example, the expensive function will only run when count is changed and not when todo's are added.

```js
import { useMemo, useState } from "react"
import local from "./local.module.css"

export default function UseMemo() {
  const [todo, setTodo] = useState([])
  const addTodo = () => {
    setTodo(t => [...t, "New Todo"])
  }

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(c => c + 1)
  }

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {
      num += 1
    }
    return num
  }
  const calculation = useMemo(() => expensiveCalculation(count), [count])

  return (
    <div>
      <section className={local.parent}>
        <div>
          {todo.map((todo, index) => {
            return <p key={index}>{todo}</p>
          })}
          <button onClick={addTodo}>Click</button>
        </div>
        <div>
          <p>Count: {count} <button onClick={increment}>+</button></p>
          <div>{calculation}</div>
        </div>
      </section>
    </div>
  )
}
```

## 📌 useState() Hooks

Using `useState()` with increase end decrease value.

```js
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
```

****

Click toggle button end change theme.
1
```js
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
```

## 📌  useRef() Hooks

**Does Not Cause Re-render**

If we tried to count how many times our application renders using the `useState` Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the `useRef` Hook.

```js
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
```

**Click End Scroll using useRef() hooks.**

```js
import { useRef } from "react"

export default function ClickEndScroll() {
  const ref = useRef(null);
  const doClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <button onClick={doClick}>or click this button</button>
      <div style={{ height: "400vh" }}></div>
      <div ref={ref} className="red">Red Div</div>
    </>
  )
}
```

<!-- ## 📌 useReducer

Call `useReducer` at the top level of your component to manage its state with a reducer.

```js
import { useReducer } from "react";

const reducer = (state, action) => {
  // ...
}

export default MyFunction() {
  const [state, dispatch] = useReducer(reducer, { age: 22 })
  // ...
```

## 🔺 Parameters

- `reducer`: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
  
- `initialArg`: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next `init` argument.
  
- **optional** `init`: The initializer function that should return the initial state. If it’s not specified, the initial state is set to `initialArg`. Otherwise, the initial state is set to the result of calling `init(initialArg)`.

#### 🔺 Returns

`useReducer` returns an array with exactly two values:

**1.** The current state. During the first render, it’s set to `init(initialArg)` or `initialArg` (if there’s no `init`).

**2.** The `dispatch function` that lets you update the state to a different value and trigger a re-render.

#### 🔺 dispatch function 

The `dispatch` function returned by `useReducer` lets you update the state to a different value and trigger a re-render. You need to pass the action as the only argument to the `dispatch` function:

```js
const [state, dispatch] = useReducer(reducer, { age: 22 });

  const handleClick = () => {
    dispatch({ type: 'increment_age' });
    // ...
```

React will set the next state to the result of calling the `reducer` function you’ve provided with the current `state` and the action you’ve passed to `dispatch`.

**Example : Increment Age**

```js
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
``` -->

## 📌 Props

**Step 1:** Pass props to the child component.

First pass some props to `Product`. For example, let's pass some props: `card` (an object), and also single value.

```js
import Product from "./pages/product/Product";

export default function App() {
  return (
    <>
      <Product card={{
        img: "https://res.cloudinary.com/dpiiduvvx/image/upload/v1694261666/Code_blxikb.jpg",
        imgWidth: 400,
        title: "Coding Image",
        article: "This is a description of the image"
      }} />

      <Product card={{
        img: "https://res.cloudinary.com/dpiiduvvx/image/upload/v1694261481/cld-sample-5.jpg",
        imgWidth: 400,
        title: "Shoes For Man",
        article: "Lorem ipsum dolor sit amet consectetur adipisicing \
        elit. Quisquam quae debitis nihil repellendus autem!"
      }} />
    </>
  );
}
```

**Step 2:** Read props inside the child component 

You can also props by listing their names `card` separated by the commas inside `({` and `})` directly after `function Card`. This lets you use them inside the Card code, like you would with a variable.

```js
import styles from "./CardStyle"

export default function Card({ card }) {
  return (
    <section style={styles.card}>
      <div><img src={card.img} alt="cardImage" width={card.imgWidth} /></div>
      <section style={styles.cardDetail}>
        <h3 style={styles.cardHeading}>{card.title}</h3>
        <p style={styles.article}>{card.article}</p>
      </section>
    </section>
  )
}
```

**CardStyle.jsx**

```js
const styles = {
  card: {
    width: "400px",
    margin: "40px",
    border: "2px solid black",
    overflow: "hidden",
    backgroundColor: "#ddd",
    boxShadow: "0 0 20px black",
    fontFamily: "Arial"
  },
  cardDetail: {
    padding: "0 10px"
  },
  cardHeading: {
    padding: "10px 0",
    fontSize: "25px",
  },
  article: {
    paddingBottom: "10px",
    color: "gray"
  }
}

export default styles
````

## 📌 useContext() Hooks

To create context, you must Import `createContext` and initialize it:

**Single Value :**

```js
import { createContext } from "react";
import Home from "./pages/home/Home";

export const MyContext = createContext();

export default function App() {
  const name = "John";

  return (
    <>
      <MyContext.Provider value={{ name }}>
        <Home />
      </MyContext.Provider>
    </>
  );
}
```

```js
import { useContext } from "react";
import { MyContext } from "../../App";

export default function Home() {
  const { name } = useContext(MyContext);
  return (
    <div>
      <h2>My Name is {name}</h2>
    </div>
  );
}
```

**Multiple Value :**

**`src/App.jsx`**

```js
import { createContext } from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

export const MyContext = createContext();

export default function App() {
  const fName = "John";
  const lName = "Doe";

  const person = {
    age: 26,
    email: "johnDoe932@outlook.com",
  };

  return (
    <>
      <MyContext.Provider value={{ fName, lName, person }}>
        <Home />
        <About />
      </MyContext.Provider>
    </>
  );
}
```

**`src/page/home/Home.jsx`**

```js
import { useContext } from "react";
import { MyContext } from "../../App";

export default function Home() {
  // Variable method
  const name = useContext(MyContext); // John

  // direct declare method
  const { lName } = useContext(MyContext); // Doe

  return (
    <div>
      <h2>
        My Name is {name.fName} {lName}
      </h2>
    </div>
  );
}
```

**`src/page/about/About.jsx`**

```js
import { useContext } from "react";
import { MyContext } from "../../App";

export default function About() {
  const contact = useContext(MyContext);

  const { person } = useContext(MyContext);
  return (
    <div>
      <h2>my age is {person.age}</h2>
      <h2>{contact.person.email}</h2>
    </div>
  );
}
```