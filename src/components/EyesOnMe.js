// Code EyesOnMe Component Here
import react from "react";

const EyesOnMe = () => {
   const eventHandler = (e) => {
       console.log('Good!')
   }
   const eventBlur = (e) => {
       console.log('Hey! Eyes on me!')
}
    return(
        <>
        <button onFocus={eventHandler} onBlur={eventBlur}>
            'Eyes on me'
            </button>
        </>
    )
}

export default EyesOnMe;