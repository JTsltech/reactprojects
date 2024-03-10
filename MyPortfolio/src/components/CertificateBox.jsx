import React from "react";

function CertificateBox({
    certificateName = "",
    certificateImg = "",
    certHref = ""
}){
    return (
        <>
            <div className='md:mb-2 sm:mb-20 outline-none px-4 bg-white rounded-lg p-5 h-60'>
                <div className="md:h-60 sm-h:70">
                    <div className='sm:w-40 sm:h-40 p-3 object-contain rounded-full items-center shadow-xl hover:shadow-sm cursor-pointer hover:border-gray-100 mx-auto' style={{marginTop:`-70px`}}>
                        <img className='rounded-full w-50 h-50' src={certificateImg}/>
                    </div>
                    <h2 className='font-bold text-xl mb-5 text-black'>{certificateName}</h2>
                </div>
                <a className="text-white hover:bg-white hover:text-black hover:outline w-60 p-2 text-sm rounded-lg bg-black" href={certHref} target="_blank">View Certificate</a>
            </div>
        </>
    )
}

export default CertificateBox