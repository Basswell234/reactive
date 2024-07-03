//Use Effect = react hook that tells react do some code when (pick one)
//this component re-renders, this component mounts, the state of a value
//USES - Event Listener, DOM Manipulation,Subscriptions, Fetching data from API, cLEAN UP WHEN A COMPONENT UNMOUNTS

import React, {useState, useEffect} from "react";

function UseEffect(){

    const [count, setCount] = useState(0);
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        document.title = `Count: ${count}`;
    }, [count]);


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener added")

        return () => {
            window.addEventListener("resize", handleResize);
            console.log("Event Listener removed")
        }
    }, [width, height]);


    function addCount() {
        setCount(c => c + 1 );
    }


    // Resize
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>

            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    )
}

export default UseEffect