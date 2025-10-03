import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { PostComponent } from "./Post";

function App() {

  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount(count => count + 1)
  }

  useEffect(function () {
    setInterval(increaseCount, 1000)
  }, [])

  return (<div>
    <div style={{ display: 'flex' }}>
      <div style={{ background: "red", borderRadius: 20, width: 30, height: 26, textAlign: 'center', paddingTop: 2, marginLeft: 8 }}>
        {count}
      </div>
    </div>
    <img style={{ cursor: "pointer" }} src="https://icons.veryicon.com/png/o/miscellaneous/fine-fillet-icon/notification-bell.png" alt="bellIcon" width={45} />
    <button onClick={increaseCount}>Increase Count</button>
  </div>
  );
}

export default App