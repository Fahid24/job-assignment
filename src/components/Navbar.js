import React from 'react';
import { Routes, Route, Link } from "react-router-dom";


import img from '../img/business-logo-geelong-search-engine-journal-child-png-favpng-Xj5v8pwqMBLSmzGW0w1kvpe6U-removebg-preview.png'
const Navbar = () => {
    return (
        <div className="navbar bg-black text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-100 rounded-box w-52">
                        <li><Link to='/to-do'>To-Do</Link></li>

                        <li><Link to='/tasks'>Completed Tasks</Link></li>
                        <li><Link to='/calendar'>Calendar</Link></li>

                    </ul>
                </div>
                <Link to='/' className=""><img className=' btn-ghost normal-case mx-12 w-[150px]  ' src={img} alt="" /> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">


                    <li><Link className='font-bold text-xl' to='/to-do'>To-Do</Link></li>
                    <li><Link className='font-bold text-xl' to='/tasks'>Completed Tasks</Link></li>

                    <li><Link className='font-bold text-xl' to='/calendar'>Calendar</Link></li>
                </ul>
            </div>

        </div>

    );
};

export default Navbar;
