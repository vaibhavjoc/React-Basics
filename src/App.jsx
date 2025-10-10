import React, { useRef } from 'react';
import { useState } from 'react'

function App() {

  const [countSeconds, setCountSeconds] = useState(0);
  const [countMiliseconds, setCountsMiliseconds] = useState(0);

  //here we have used useRef to create a reference to a value
  //since it does not re-renders when updated
  const timerSeconds = useRef()
  const timerMiliseconds = useRef()

  function startTimer() {
    let value = setInterval(() => {
      setCountSeconds(c => c + 1)
    }, 1000);

    let values = setInterval(() => {
      setCountsMiliseconds(c => c + 1)
    }, 10);

    // we have assigned the current setInterval to timerSeconds
    // so that we can clear it with function stopTimer
    timerSeconds.current = value
    timerMiliseconds.current = values

  }

  //ended the 100 milliseconds and starts it again from 0
  if (counts > 99) {
    clearInterval(timerMiliseconds.current)
    setCounts(c => c = 0)
    let values = setInterval(() => {
      setCountsMiliseconds(c => c + 1)
    }, 10);
    timerMiliseconds.current = values
  }

  function stopTimer() {
    clearInterval(timerSeconds.current)
    clearInterval(timerMiliseconds.current)
  }

  return (
    <div>
      <h1>{countSeconds}:{countMiliseconds}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )

}

export default App