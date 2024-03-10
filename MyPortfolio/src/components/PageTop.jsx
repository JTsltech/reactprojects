import React from "react";
import { HashLink } from "react-router-hash-link";

export default function PageTop(){

    return(
        <>
            <HashLink to="#top" id="pageTopBtn" className="bg-lightblue" smooth>Top</HashLink>
        </>
    )
}