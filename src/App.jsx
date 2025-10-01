import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#7c7f82ff" }}>

      <div>
        <div>
          <PostComponent
            name={"harkirat"}
            subtitle={"20 followers"}
            time={"2m ago"}
            image={"https:/appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
            description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
          />
          <br />
        </div>
        
        <div>
          <PostComponent
            name={"Baljeet"}
            subtitle={"Promoted"}
            image={"https://www.toyota.com.kh/content/dam/cambodia/models/pickup/hilux-rally/head/1.jpg"}
            description={"The Toyota Hilux is a five-seater, four-wheel-drive pickup truck known for its durability, reliability, and off-road capabilities. The India-spec model shares its platform and 2.8L diesel engine with the Toyota Fortuner."}
          />
          <br />
        </div>
      </div>

    </div>
  );
}

const PostComponent = ({ image, name, subtitle, time, description }) => {
  const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, margin: 10, padding: 5, boxShadow: "5px 5px 5px #2a2a2aff" };

  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center" }}> {/* Added alignItems: "center" for better alignment */}
        <img
          src={image}
          alt="Profile" // Added alt text for accessibility
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time !== undefined && <div style={{ display: "flex", alignItems: "center" }}> {/* Added alignItems: "center" for better alignment */}
            <div>{time}</div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Icons8_flat_clock.svg/1024px-Icons8_flat_clock.svg.png"
              alt="Clock icon" // Added alt text for accessibility
              style={{ width: 10, height: 10, marginLeft: 3 }} // Added marginLeft for spacing
            />
          </div>}
        </div>
      </div>
      <div style={{ fontSize: 12, marginTop: 10 }}> {/* Added marginTop for spacing */}
        {description}
      </div>
    </div>
  );
};

export default App