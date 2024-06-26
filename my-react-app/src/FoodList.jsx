import { useState } from "react";

function FoodList(){

    const [foods, setFoods] = useState(["Apple","Mango","Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=> i !== index));
    }



    return(
        <>
            <div>
                <h2>Food List</h2>
                <ol>
                    {foods.map((food, index) =>
                        <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
                    )}
                </ol>
                <input type="text" id="foodInput" placeholder="Enter a food name"/>
                <button onClick={handleAddFood}>Add New Food</button>
            </div>
        </>
    );
}

export default FoodList