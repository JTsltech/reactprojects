import React from "react";
import { useId } from "react";

function HobbieBox(
    {
        hobbieName = ""
    }
){
    const buttonId = useId()
    return (
        <>
            <button className='outline-none px-4 rounded-lg p-5 mr-5 sm:mb-5 shadow-lg text-white' 
              style={{backgroundColor: "lightblue"}} id={buttonId}>{hobbieName}</button>
        </>
    )
}

export default HobbieBox