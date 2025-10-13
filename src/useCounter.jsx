import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//Custom hooks in React are a powerful feature that allows 
//you to encapsulate and reuse stateful logic across different components. 
//They are essentially JavaScript functions that can use React hooks internally. 
//By creating custom hooks, you can abstract away complex logic,
//making your components cleaner and more manageable.

//custom hook name must have Prefix "use"
//otherwise it will not work
//it must use hook inside it

//for more go here "https://petal-estimate-4e9.notion.site/19-Custom-hooks-11d7dfd107358002a165e23cf79d67d2"

function useCounter() {

  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 10)
  }

  function decreaseCounter() {
    setCount(count - 1)
  }

  return {
    count: count,
    increaseCounter: increaseCounter,
    decreaseCounter: decreaseCounter
  }

}

function App() {

  return (
    <>
      <Counter />
      <Counter />
    </>
  )
}

const buttonStyle = {
  backgroundColor: '#000000ff',
  color: 'aqua',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
}

function Counter() {

  const { count, increaseCounter, decreaseCounter } = useCounter()

  return (
    <div style={{
      backgroundColor: "#c3a5e7ff",
      border: '1px solid purple',
      padding: '20px',
      borderRadius: '8px',
      margin: '15px',
      textAlign: "center",
      width: "110px",

    }}>
      <h1>Counter</h1>
      <h1 style={{ color: "black" }}>{count}</h1>
      <button style={buttonStyle} onClick={increaseCounter}>Increase </button>
      <br />
      <br />
      <button style={buttonStyle} onClick={decreaseCounter}>Decrease </button>
    </div>
  )
}

export default App