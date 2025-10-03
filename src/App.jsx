import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { PostComponent } from "./Post";

function App() {

  const [showTimer, setShowTimer] = useState(true);

  useEffect(function () {
    setInterval(() => {
      setShowTimer(c => !c)
    }, 5000);
  },[])

  return (
    <div>
      {showTimer && <Timer />}
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(function () {
    let clock = setInterval(() => {
      console.log("from inside clock");
      setSeconds(s => s + 1)
    }, 1000);

    //cleanup code, the clock will continue running if we don't call this function
    //a new clock will always comes but the old one will continue running
    return function() {
      clearInterval(clock)
      console.log("clock removed")
    }

  },[])
  

  return (
    <div>
      {seconds} seconds elapsed
    </div>
  )

}

export default App