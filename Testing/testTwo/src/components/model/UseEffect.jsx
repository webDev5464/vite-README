import { useEffect, useState } from "react"

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, []);

  // useEffect(() => {
  //   setCalculation(() => count * 2);
  // });

  return (
    <>
      <p>Count {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Click!</button>
      <p>calculation {calculation}</p>
    </>
  );
}
