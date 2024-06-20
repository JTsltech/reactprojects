import React, { useEffect } from "react";
import Todos from "./Todos";
import { useSelector } from "react-redux";

function TodoContainer(){

    const todos = useSelector(state => state.todos)

    // const collapseToggle = (e) =>{
    //     e.preventDefault();

    //     var trigger = document.querySelector("[data-collapse-target]");
    //     var collapse = document.querySelector('[data-collapse]');
    //     if (collapse.style.height && collapse.style.height !== "0px") {
    //         collapse.style.height = 0;
    //         collapse.style.overflow = "hidden";
    //         trigger.removeAttribute("open");
    //     } else {
    //         collapse.style.height = "".concat(collapse.children[0].clientHeight, "px");
    //         collapse.style.overflow = "visible";
    //         trigger.setAttribute("open", "");
    //     } 
    // }

    useEffect(() => {
        var triggers = document.querySelectorAll("[data-collapse-target]");
        var collapses = document.querySelectorAll("[data-collapse]");
        if (triggers && collapses) {
            Array.from(triggers).forEach(function (trigger) {
                return Array.from(collapses).forEach(function (collapse) {
                    if (trigger.dataset.collapseTarget === collapse.dataset.collapse) {
                        trigger.addEventListener("click", function () {
                            if (collapse.style.height && collapse.style.height !== "0px") {
                                collapse.style.height = 0;
                                collapse.style.overflow = "hidden";
                                trigger.removeAttribute("open");
                            } else {
                                collapse.style.height = "".concat(collapse.children[0].clientHeight, "px");
                                collapse.style.overflow = "visible";
                                trigger.setAttribute("open", "");
                            }
                        });
                    }
                });
            });
        }
    },[]);
    

    return (
        <>
            <div className="relative mb-3">
                <h6 className="mb-0">
                    <button
                        className="relative flex items-center w-full p-4 font-semibold bg-gray-100 text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                        data-collapse-target="collapse-1"
                    >
                        <span>Daily Tasks</span>
                        <i className="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0 mr-2"></i>
                        <i className="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100 mr-2"></i>
                    </button>
                </h6>
                <div
                    data-collapse="collapse-1"
                    className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                    <Todos panelName={"Daily Tasks"}/>
                </div>
            </div>
            <div className="relative mb-3">
                <h6 className="mb-2">
                    <button
                        className="relative flex items-center w-full p-4 font-semibold bg-gray-100 text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                        data-collapse-target="collapse-2"
                    >
                        <span>Important</span>
                        <i className="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0 mr-2"></i>
                        <i className="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100 mr-2"></i>
                    </button>
                </h6>
                <div
                    data-collapse="collapse-2"
                    className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                    <Todos panelName={"Important"}/>
                </div>
            </div>
        </>
    )
}

export default TodoContainer