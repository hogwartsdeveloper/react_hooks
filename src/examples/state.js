import React, { useState } from "react";

function computeInitialCounter() {
  console.log('Some calculations...')
  return Math.trunc(Math.random() * 20)
}

function App() {
  // const [counter, setCounter] = useState(computeInitialCounter());

  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
  });

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now()
  })

  function increment() {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    })
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'New Title'
      }
    })
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>Delete</button>
      <button onClick={updateTitle}>Change</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
