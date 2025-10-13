import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//custom hook for fetching post title

function usePosttitle() {

    const [post, setPost] = useState({})


    async function getPostTitle() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const json = await response.json();
        setPost(json)
    }

    useEffect(() => {
        getPostTitle()
    }, [])

    return post.title;

}

function App() {

    //calling the custom postTitle fetching hook
    const postTitle = usePosttitle()

    return (
        <div style={{
            backgroundColor: "#FF0066",
            border: '1px solid purple',
            padding: '20px',
            borderRadius: '8px',
            margin: '15px',
            textAlign: "center",
            color: "#6A0066"
        }}>
            <h1>{postTitle}</h1>
        </div>
    )
}

export default App