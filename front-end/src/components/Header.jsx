import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {

    const [visible, setVisible] = useState(false);





    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto px-5 sm:px-0 flex justify-between items-center">
                <h1 className="text-lg font-bold cursor-pointer">Programming Notes</h1>
                <nav className="hidden sm:block space-x-4">
                    <NavLink to="/" className="hovEffect">Home</NavLink>
                    <NavLink to="/courses" className="hovEffect">Courses</NavLink>
                    <NavLink to="/problem" className="hovEffect">Problem Solving</NavLink>
                    <NavLink to="/about" className="hovEffect">About</NavLink>
                </nav>
                <nav className="sm:hidden w-full flex justify-end">
                    <div onClick={() => setVisible(!visible)} className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    {visible &&
                        <div className=" bg-blue-600 absolute z-2 h-screen w-screen right-0 top-0 flex flex-col transition ease-in-out duration-[2s]">
                            <button className="w-full flex justify-end p-4" onClick={()=>{ setVisible(! visible)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="White" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            </button>
                            <NavLink className="hov-effect p-3 border-b hover:bg-white hover:text-blue-600 ease-in-out duration-300">Home</NavLink>
                            <NavLink className="hov-effect p-3 border-b hover:bg-white hover:text-blue-600 ease-in-out duration-300">Courses</NavLink>
                            <NavLink className="hov-effect p-3 border-b hover:bg-white hover:text-blue-600 ease-in-out duration-300">Problem Solving</NavLink>
                            <NavLink className="hov-effect p-3 border-b hover:bg-white hover:text-blue-600 ease-in-out duration-300">About</NavLink>
                        </div>
                    }
                </nav>
            </div>
        </header>
    );
}

export default Header;