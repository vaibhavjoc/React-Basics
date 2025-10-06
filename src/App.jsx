import React from 'react';
import { useState } from 'react'

function App() {
  return (<div>
    <Card>
      <h1>Ladle kaisen bha</h1>
      <p>lappe pe lappe pde mitar</p>
    </Card>
    <Card>
      <h1>Oho dajyu ki karn cha ra tum?</h1>
      <p>madua rot khan chi re bhula</p>
    </Card>
  </div>)
}

function Card({children}){
  return (<div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
    {children}
  </div>)
}

export default App