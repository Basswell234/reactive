import { useState } from "react";


function UpdaterCar(){
    const [car, setCar] = useState({year:2024, make: " Ford",model:"Mustang"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }

    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
        <>
            <div>
                <p>Your Favourite Car Is: {car.year} {car.make}{car.model}</p>
                <input type="number" onChange={handleYearChange}/>
                <input type="text" onChange={handleMakeChange}/>
                <input type="model" onChange={handleModelChange}/>
            </div>
        </>
    );
}

export default UpdaterCar