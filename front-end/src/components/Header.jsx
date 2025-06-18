import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {Context} from '../Context/Context'

function Header() {

    const [visible, setVisible] = useState(false);
    const {theme,setTheme} = useContext(Context)

    return (
        <header className="text-black py-4">
            <div className="container flex justify-between items-center">
                <img src="/logo.webp" alt="Programming Notes" className="max-h-7 hover:scale-105 ease-in-out duration-300 ml-3 cursor-pointer"/>
                
                <nav className="italic hidden sm:block space-x-4">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/courses" >Courses</NavLink>
                    <NavLink to="/problem" >Problem Solving</NavLink>
                    <NavLink to="/how-to" >How To</NavLink>
                    <NavLink to="/about" >About</NavLink>
                </nav>
                <nav className="sm:hidden w-full flex justify-end">
                    <div onClick={() => setVisible(!visible)} className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    {visible &&
                        <div className="text-white bg-[#83c314] fixed z-2 h-screen w-screen right-0 top-0 flex flex-col transition ease-in-out duration-[2s] overflow-y-hidden">
                            <button className="w-full flex justify-end p-4" onClick={()=>{ setVisible(! visible)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} className="size-6 stroke-white hover:stroke-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            </button>
                            <NavLink to="/" onClick={()=>{ setVisible(! visible)}} className="hov-effect p-3 ml-4 border-b hover:bg-white hover:text-[#83c314] ease-in-out duration-300">Home</NavLink>
                            <NavLink to="/courses" onClick={()=>{ setVisible(! visible)}} className="hov-effect p-3 ml-4 border-b hover:bg-white hover:text-[#83c314] ease-in-out duration-300">Courses</NavLink>
                            <NavLink to="/problem" onClick={()=>{ setVisible(! visible)}} className="hov-effect p-3 ml-4 border-b hover:bg-white hover:text-[#83c314] ease-in-out duration-300">Problem Solving</NavLink>
                            <NavLink to="/how-to" onClick={()=>{ setVisible(! visible)}} className="hov-effect p-3 ml-4 border-b hover:bg-white hover:text-[#83c314] ease-in-out duration-300">How To</NavLink>
                            <NavLink to="/about" onClick={()=>{ setVisible(! visible)}} className="hov-effect p-3 ml-4 border-b hover:bg-white hover:text-[#83c314] ease-in-out duration-300">About</NavLink>
                        </div>
                    }
                </nav>
            </div>
        </header>
    );
}

export default Header;