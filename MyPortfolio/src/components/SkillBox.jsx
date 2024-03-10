import React from "react";
import { useId } from "react";

function SkillBox(
    {
        skillIcon = ""
    }
){
    const buttonId = useId()
    return (
        <>
            <button className='h-30 sm:h-40 sm:w-40 sm:rounded-full md:w-auto md:py-8 md:px-10 mb-10 bg-white flex items-center justify-center md:h-44 xl:h-42 xl-rounded-3xl lg:rounded-2xl md:rounded-2xl border border-transparent hover:rounded-none cursor-pointer hover:shadow-xl' 
               id={buttonId}>
                <img className="w-14 h-14 sm:w-15 sm:h-15 md:w-32 xl:h-20 xl:w-28 object-contain" width={112} height={112} src={skillIcon}/>
              </button>
        </>
    )
}

export default SkillBox