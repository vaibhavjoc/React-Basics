import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return(
    <>
    <LightBulb />
    </>
  )

}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)

  return <>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </>
}

function BulbState({bulbOn}) {
  return (
    <>
    {bulbOn ? <img height={250} src='https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg' /> : <img height={230} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnF3A4ktwNpeii6GcrDsKZSkc1l97hochG_Q&s' /> }
    </>
  )
}

function ToggleBulbState({bulbOn, setBulbOn}) {

  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
    
  }

  return <>
  <br />
    <button onClick={toggle}>Toggle the bulb</button>
  </>
}

export default App