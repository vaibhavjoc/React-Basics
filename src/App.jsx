import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { PostComponent } from "./Post";

function App() {

  return <div style={{ display: "flex" }}>
    <Card>
      <div style={{ color: "aqua", }}>
        What do you want to post?
        <br /> <br />
        <input type={"text"} placeholder={"post something"} />
      </div>
    </Card>

    <Card children={
      <div children={<div style={{ color: "aquamarine" }}>Hi Theer</div>} ></div>
    } />
  </div>

}

function Card({ children }) {
  return <div style={{
    border: '1px solid #0914e6df',
    borderRadius: '5px',
    backgroundColor: "black",
    padding: '20px',
    margin: '10px',
    boxShadow: '2px 2px 5px rgba(216, 214, 214, 0.1)',
  }}>
    {children}
  </div>
}

export default App