import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ background: "#898e90ff", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <br />
            <ProfileCard />
            <br />
          </div>
          <div>
            <PostComponent />
            <br />
          </div>
          <div>
            <PostComponent />
            <br />
          </div>
          <div>
            <PostComponent />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
function PostComponent() {
  const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, margin: 10, padding: 5 };

  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" style={{
          width: 30,
          height: 30,
          borderRadius: 20
        }} />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>
            100xDevs
          </b>
          <div>
            23888 followers
          </div>
          <div>
            12m
          </div>
        </div>

      </div>
      <div style={{ fontSize: 12 }}>
        Want to know how to win big? Check out how these folks won $6000 in bounties.
      </div>
    </div>
  );
}

function ProfileCard() {

  const style = { width: 200,height: 250, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, };

  return (
    <div style={style}>
      <div style={{ background: "#759aa9ff", backgroundSize: 200, height: 65, borderRadius: 8}}>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <img src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" style={{
            width: 60,
            height: 60,
            borderRadius: 100
          }} />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          Harkirat Singh
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "#94989aff" }}>Working with WebRTC</p>
        </div>
        <hr />
        <div style={{display: "flex"}}>
          <p style={{ fontSize: 11, color: "#5e6162ff", marginRight: 90, paddingLeft: 10}}>Profile Views</p>
          <p style={{ fontSize: 11, color: "#2159d0ff"}}>41903</p>
        </div>
        <div style={{display: "flex"}}>
          <p style={{ fontSize: 11, color: "#5e6162ff", marginRight: 80, paddingLeft: 10}}>Post Impressions</p>
          <p style={{ fontSize: 11, color: "#2159d0ff"}}>1313</p>
        </div>
      </div>
    </div>
  )
}

export default App