import React from "react";
import { useId } from "react";

function EducationBox(
    {
        courseName = "",
        school = "",
        year = ""
    }
){
    const boxId = useId()
    return (
        <>
            <div className='outline-none px-4 bg-white rounded-lg p-5 shadow-lg hover:shadow-sm cursor-pointer text-black w-100 h-60 md:h-60 max-sm:w-full sm:mb-5 sm:h-40' id={boxId}>
              <div className="md:h-40 sm-h:60">
                <h2 className='font-bold text-xl'>{courseName}</h2>
                <p style={{fontSize:`0.9rem`, fontWeight:'bold'}} className='mb-5 mt-2 text-lightGray'>{school}</p>
              </div>
              <span className="text-white w-60 p-2 text-sm rounded-lg bg-black">{year}</span>
            </div>
        </>
    )
}

export default EducationBox