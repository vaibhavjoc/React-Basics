import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//custom hook for fetching  

function useFetch(url) {

    const [finaldata, setFinalData] = useState({})

    async function getDetails() {
        const response = await fetch(url)
        const json = await response.json();
        setFinalData(json)
    }

    console.log(url)

    useEffect(() => {
        getDetails()
    }, [url])

    return {
        finaldata
    }

}

function App() {

    const [currentPost, setCurrentPost] = useState(2)

    const { finaldata } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost)


    return (
        <>
            <button style={{ margin: "5px" }} onClick={() => setCurrentPost(c => c = 1)}>Post 1</button>
            <button style={{ margin: "5px" }} onClick={() => setCurrentPost(c => c = 2)}>Post 2</button>
            <button style={{ margin: "5px" }} onClick={() => setCurrentPost(c => c = 3)}>Post 3</button>
            <button style={{ margin: "5px" }} onClick={() => setCurrentPost(c => c + 1)}>Post ++</button>
            <div style={{
                backgroundColor: "#FF0066",
                border: '1px solid purple',
                padding: '20px',
                borderRadius: '8px',
                margin: '15px',
                textAlign: "center",
                color: "#6A0066",
            }}>
                <h1>{finaldata.title}</h1>
            </div>
        </>

    )
}

export default App