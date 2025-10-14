import { useState, useEffect, useRef } from 'react'

// function useDebounce(originalFn){
//     let currentClock = useRef()

//     const fn = () => {
//         clearTimeout(currentClock.current)
//         currentClock.current = setTimeout(originalFn, 200)
//     }

//     return fn
// }

// function App() {
//     function sendDataToBackend(){
//         fetch("amazon.com/search")
//     }

//     const debouncedFn = useDebounce(sendDataToBackend);

//     return (
//         <>
//         <input type="text" onChange={debouncedFn} />
//         </>
//     )
// }


//a better approach using useState hook

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}

function App() {
    const [inputVal, setInputVal] = useState("")
    const debouncedVal = useDebounce(inputVal, 200)

    function change(e) {
        setInputVal(e.target.value)
    }

    useEffect(() => {
        console.log("Hello Mitro")
    }, [debouncedVal])

    return (
        <>
            <input type="text" onChange={change} />
        </>
    )

}


export default App;