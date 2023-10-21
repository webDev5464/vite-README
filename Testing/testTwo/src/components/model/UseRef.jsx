import { useRef, useEffect } from 'react';

export default function UseRef() {
  const myRef = useRef(null);

  const focusInput = () => {
    myRef.current.focus();
  };

  useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}