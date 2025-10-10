import React, { useRef } from 'react';
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);

  //here we have used useRef to create a reference to a value
  //since it does not re-renders when updated
  const timer = useRef()
  const timers = useRef()

  function startTimer() {
    let value = setInterval(() => {
      setCount(c => c + 1)
    }, 1000);
    let values = setInterval(() => {
      setCounts(c => c + 1)
    }, 10);

    // we have assigned the current setInterval to timer
    // so that we can clear it with function stopTimer
    timer.current = value
    timers.current = values
  }

  function stopTimer() {
    clearInterval(timer.current)
    clearInterval(timers.current)
  }

  return(
    <div>
      <h1>{count}:{counts}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )

}

export default App