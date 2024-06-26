import React, {useState} from 'react'

function Onchange() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name:{name}</p> <br />

            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select A Payment Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Master Card</option>
                <option value="Yellowcard">Yellow Card</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
                <input type="radio" value="Delivery-" checked={shipping === "Delivery"} onChange={handleShippingChange}/> Delivery
            </label>
            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/> Pick Up
            </label>
            <p>Shipping: {shipping} </p>
        </div>
    );
}

export default Onchange