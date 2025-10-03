import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { PostComponent } from "./Post";

function App() {

  const [currentTAb, setCurrentTAb] = useState("feed")

  return (
    <div>
      
      <button onClick={function () { setCurrentTAb("feed") }} style={{
        color: currentTAb == "feed" ? "red" : "black"
      }} >Feed</button>

      <button onClick={() => { setCurrentTAb("Notifications") }} style={{
        color: currentTAb == "Notifications" ? "red" : "black"
      }} >Notifications</button>

      <button onClick={() => { setCurrentTAb("jobs")  }} style={{
        color: currentTAb == "jobs" ? "red" : "black"
      }} >jobs</button>

      <button onClick={() => { setCurrentTAb("messages") }} style={{
        color: currentTAb == "messages" ? "red" : "black"
      }} >messages</button>

    </div>
  );
}

export default App