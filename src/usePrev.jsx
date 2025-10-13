import { useState, useEffect, useRef } from 'react'

const usePrev = (value) => {
    const ref = useRef();
    console.log("re-render happens with new value "+value)

    useEffect(() => {
        console.log("updated the ref to be "+ value)
        ref.current = value
    }, [value])

    console("returned" + ref.current)
    return ref.current; //initially undefined
}
// it return calls before useEffect

function App() {
    const [count, setCount] = useState(0);

    //for knowing about this go to this page 
    //"https://giacomocerquone.com/blog/life-death-useprevious-hook/"
    const [anything, setAnything] = useState(false);

    const prev = usePrev(count);

    return (
        <>
            <button style={{ margin: "5px" }} onClick={() => { setCount(c => c + 1) }}>+</button>
            <button style={{ margin: "5px" }} onClick={() => { setCount(c => c - 1) }}>-</button>
            <button style={{ margin: "5px" }} onClick={() => { setAnything(b => !b) }}>Glitch</button>
            <h1>Current Value: {count}</h1>
            <h2>Previous Value: {prev}</h2>
        </>
    )
}

export default App