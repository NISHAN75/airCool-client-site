import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import useAuth from "../../../Hooks/useAuth";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";



const Header = () => {
    const [auth] = useAuth();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
    };
    return (
        <div>
            <div class="navbar bg-primary">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabindex="0">
                                <a class="justify-between">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl text-white font-bold logo">AirCool</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link className=' text-[#dddd] font-bold hover:bg-secondary  hover:text-white' to="/">Home</Link></li>
                        <li><Link className=' text-[#dddd] font-bold hover:bg-secondary  hover:text-white' to="/about">About us</Link></li>
                        <li><Link className=' text-[#dddd] font-bold hover:bg-secondary hover:text-white' to="/blog">Blogs</Link></li>
                        {
                            user ? <li><Link className=' text-[#dddd] font-bold hover:bg-secondary  hover:text-white' to="/dashborad">Dashboard</Link></li> : ""
                        }
                        <li>
                            {user ? (
                                <button onClick={logout} className="text-[#dddd] font-bold hover:bg-secondary  hover:text-white">
                                    Log Out
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="text-[#dddd] font-bold hover:bg-secondary  hover:text-white"
                                >
                                    Login
                                </Link>
                            )}
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <label
                        tabIndex="1"
                        htmlFor="dashBoard-sideBar"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Header