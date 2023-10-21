import { useRef } from "react";

export default function ClickEndScroll() {
  const ref = useRef(null);
  const doClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button onClick={doClick}>Click!</button>
      <div style={{ height: "400vh" }}></div>
      <div ref={ref}>Hello World!</div>
    </>
  );
}