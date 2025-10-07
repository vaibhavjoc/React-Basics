import React from 'react';
import { useState } from 'react'

function App() {

  return (
    <div>
      <Card title="Section 1">
        <h2>Hlo motto</h2>
        <p>kas cha dagri</p>
      </Card>
      <br />
      <Card title="Section 2">
        <h2>dajyu kah bat lagi rhi cha</h2>
        <p>chale ghar janu chyu bhula</p>
      </Card>
    </div>
  )
}

function Card({ title, children }) {

  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(!isOpen)}>{title} {isOpen ? "-":"+"} </button>
      {isOpen && children}
    </div>
  )
}

export default App