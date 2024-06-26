// Updater Function = Afunction passed as an argument to setState() eg setyear(arrow function).Allows for safe updates based on the previous state, used with multiple state updates and asynchronous functions

import React, {useState} from 'react';

function UpdaterFunction(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 1);
        setCount(c => c + 1);
    };

    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
    };

    function reset(){
        setCount(c => c = 0);
    };




    return(
        <>
            <div>
                <p>Count: {count}</p>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>
        </>
    );
}

export default UpdaterFunction