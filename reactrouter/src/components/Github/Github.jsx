import React, { useState } from "react";
import { useEffect } from "react";  
import { useLoaderData } from "react-router-dom";


function Github(){
    //const [data,setData] = useState([])
    const data = useLoaderData()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/JTsltech')
    //     .then(response => response.json())
    //     .then(data =>{
    //         setData(data)
    //     })
    // },[])
    return (
        <>
            <div className="text-center m-4 bg-gray-600 text-white
            p-4 text-3xl">Github repos: {data.public_repos}
                <img src={data.avatar_url} width={300}/>
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/JTsltech')
    return response.json()
}