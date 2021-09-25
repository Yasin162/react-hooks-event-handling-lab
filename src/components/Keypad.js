// Code Keypad Component Here
import react from "react";

const Keypad = () => {
    const eventHandler = (e) => {
        console.log('Entering password...')
    }
    return (
        <div>
        <input type="password" onChange={eventHandler} ></input>
        </div>
    )
}

export default Keypad;