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
