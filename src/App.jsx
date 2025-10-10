import React, { useRef } from 'react';
import { useState } from 'react'

function App() {

  //create a ref to store the input element
  const inputRef = useRef(null)

  //define the function to focus on input
  function focusInput() {

    //Access the DOM node and call the focus method
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>Focus On Input</h2>

      {/* Attach the ref to input element */}
      <input ref={inputRef} type="text" placeholder='click button to focus on me' />
      <br />
      <br />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default App