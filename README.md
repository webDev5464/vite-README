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

## 📌 useEffect Hooks

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

## 📌 Context

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