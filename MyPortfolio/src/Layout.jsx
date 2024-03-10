import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import PageTop from "./components/PageTop";

function Layout(){

    return(
        <>
        <div id="top">
            <Header/>
            <Outlet/>
            <PageTop/>
        </div>        
        </>
    )
}

export default Layout