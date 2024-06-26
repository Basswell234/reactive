import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const incrementCount = () => { setCount(count + 1);}
    const decrementCount = () => { setCount(count - 1);}
    const resetCount = () => { setCount(0);}

    return(
        <div className='counter-container'>
            <h2 className='count-display'>{count}</h2>
            <button className='count-button' onClick={incrementCount}>Increment</button>
            <button className='count-button' onClick={resetCount}>Reset</button>
            <button className='count-button' onClick={decrementCount}>Decrement</button>
        </div>
    )
}

export default Counter