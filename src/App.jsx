import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { PostComponent } from "./Post";

function App() {

  const [currentTAb, setCurrentTAb] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function(){
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTAb)
    .then(async res => {
      const json = await res.json();
      setTabData(json)

      setLoading(false);
    })
  }, [currentTAb])

  return (
    <div>
      
      <button onClick={function () { setCurrentTAb(1) }} style={{
        color: currentTAb == 1 ? "red" : "black"
      }} >Todo #1</button>

      <button onClick={() => { setCurrentTAb(2) }} style={{
        color: currentTAb == 2 ? "red" : "black"
      }} >Todo #2</button>

      <button onClick={() => { setCurrentTAb(3)  }} style={{
        color: currentTAb == 3 ? "red" : "black"
      }} >Todo #3</button>

      <button onClick={() => { setCurrentTAb(4) }} style={{
        color: currentTAb == 4 ? "red" : "black"
      }} >Todo #4</button>

      <br />
      {loading ? "loading....." : tabData.title}

    </div>
  );
}

export default App