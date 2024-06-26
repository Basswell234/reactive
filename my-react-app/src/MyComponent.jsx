import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Guest User");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Basswell");
    }
    const incrementAge = () => {
        setAge(age + 1)
    }
    const toggleStatus = () => {
        setIsEmployed(!isEmployed);
    }


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleStatus}>Toggle Employement Status</button>
        </div>
    );
}

export default MyComponent