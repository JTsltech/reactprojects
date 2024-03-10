import React from "react";
import {Link} from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";

function Header(){
    let location = useLocation()
    
    return(
        <>
            <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">                        
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavHashLink to="/#top" className={() =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${location.pathname + location.hash === "/#top" ? "text-orange-700" : "text-gray-700"}`}
                                    smooth
                                >
                                    Home
                                </NavHashLink>
                            </li>
                            <li>
                                <NavHashLink to="/#about"  className={() =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${location.pathname + location.hash === "/#about" ? "text-orange-700" : "text-gray-700"}`}
                                    smooth
                                >
                                    About
                                </NavHashLink>
                            </li>
                            <li>
                                <NavHashLink to="/#education"  className={() =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${location.pathname + location.hash === "/#education" ? "text-orange-700" : "text-gray-700"}`}
                                    smooth
                                >
                                    Education
                                </NavHashLink>
                            </li> 
                            <li>
                                <NavHashLink to="/#certificate"  className={() =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${location.pathname + location.hash === "/#certificate" ? "text-orange-700" : "text-gray-700"}`}
                                    smooth
                                >
                                    Certificate
                                </NavHashLink>
                            </li>  
                            <li>
                                <NavHashLink to="#skills" className={() =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${location.pathname + location.hash === "/#skills" ? "text-orange-700" : "text-gray-700"}`}
                                    smooth
                                >
                                    Skills
                                </NavHashLink>
                            </li> 
                            <li>
                                <NavHashLink to="#contact" className={() =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${location.pathname + location.hash === "/#contact" ? "text-orange-700" : "text-gray-700"}`}
                                    smooth
                                >
                                    Contact
                                </NavHashLink>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header