import { useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//remove the hassle of doing prop drilling
//First we have to create context (should be global) (using createContext)
//then provide the value to context (using Provider)
//finally consume it (using useContext)
//it makes the code look clean

const BulbContext = createContext()

function App() {

  const [bulbOn, setBulbOn] = useState(true)

  return (
    <>
      <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
      }}>
        <LightBulb />
      </BulbContext.Provider>
    </>
  )

}

function LightBulb() {


  return <>
    <ToggleBulbState />
    <BulbState />
  </>
}

function BulbState() {

  const { bulbOn } = useContext(BulbContext)

  return (
    <div>
      {bulbOn ? <img height={250} src='https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg' /> : <img height={230} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnF3A4ktwNpeii6GcrDsKZSkc1l97hochG_Q&s' />}
    </div>
  )
}

function ToggleBulbState() {

  const { bulbOn, setBulbOn } = useContext(BulbContext)

  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)

  }

  return <>
    <button onClick={toggle}>Toggle the bulb</button>
  </>
}

export default App