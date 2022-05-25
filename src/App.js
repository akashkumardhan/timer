import React, { useState } from "react";

export default function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [counterReferenceId, setCounterReferenceId] = useState(null);

  const startCounter = () => {
    const counterReference = setInterval(
      () => setCounterValue((counterValue) => counterValue + 1),
      1000
    );
    setCounterReferenceId(counterReference);
  };

  const stopCounter = () => {
    clearInterval(counterReferenceId);
  };
  const resetCounter = () => {
    setCounterValue(0);
  };

  return (
    <div className="App">
      <h1>Hello I am Counter</h1>
      <p>{counterValue}</p>
      <button onClick={() => startCounter()}>Start Counter</button>
      <button onClick={() => stopCounter()}>Stop Counter</button>
      <button onClick={() => resetCounter()}>Reset Counter</button>
    </div>
  );
}
