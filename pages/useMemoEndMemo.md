```js
import UseMemo from "./components/UseMemo";

export default function App() {
  return (
    <>
      <UseMemo />
    </>
  );
}
```

```js
import { useMemo, useState } from "react";
import Magan from "./Magan";

const UseMemo = () => {
  let [num, setNum] = useState(0);
  let [toggle, setToggle] = useState(false);
  const Increase = () => {
    setNum(num + 1);
  };

  const Faltu = (x) => {
    for (let i = 0; i < 1000000000; i++) {}
    return x;
  };

  let number = useMemo(() => Faltu(num), [num]);

  return (
    <div>
      <button onClick={Increase}>Number :{number} </button>
      <br />
      <br />
      <hr />
      <br />
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Deven" : "Jatin"}
      </button>

      <Magan num={num} />
    </div>
  );
};

export default UseMemo;
```

```js
import { memo } from "react";

const Magan = ({ num }) => {
  console.log("hello this is magan");
  return <div> : magan : {num}</div>;
};

export default memo(Magan);

```