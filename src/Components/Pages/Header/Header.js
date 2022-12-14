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
            <div className="navbar bg-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
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
                    <a className="btn btn-ghost normal-case text-xl text-white font-bold logo">AirCool</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
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