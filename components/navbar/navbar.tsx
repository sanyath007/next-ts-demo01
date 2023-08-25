import { useState } from 'react'
import Link from 'next/link'
import NavLogo from './nav-logo'
import NavMenu from "./nav-menu";

export default function Navbar({ screenWidth, ...props }: { screenWidth: number }) {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="topnav bg-white">
            <div className="container mx-auto">
                <div className="wrapper w-full">
                    <div className="menu-container w-full">
                        <div className="container mx-auto">
                            <div className="relative flex items-end justify-between pt-1">
                                {/* ================================ Nav Logo ================================ */}
                                <NavLogo />
                                {/* ================================ End Nav Logo ================================ */}

                                {/* ================================ Menu Options ================================ */}
                                {/* <div className="menu-options flex items-center gap-5">
                                    <div className="options flex items-center space-x-1">
                                        <p>ขนาดตัวอักษร</p>
                                        <a href="#" className="hover:bg-gray-300 bg-gray-200 px-2 text-sm rounded-md">ก</a>
                                        <a href="#" className="hover:bg-gray-300 bg-gray-200 px-2 text-lg rounded-md">ก</a>
                                        <a href="#" className="hover:bg-gray-300 bg-gray-200 px-2 text-2xl rounded-md">ก</a>
                                    </div>
                                    <div className="options flex items-center space-x-1">
                                        <p>ความตัดกันของสี</p>
                                        <a href="#" className="hover:bg-gray-300 bg-gray-200 text-sm font-bold px-2 py-1 rounded-md">C</a>
                                        <a href="#" className="hover:bg-gray-500 bg-gray-600 text-sm font-bold text-white hover:text-gray-100 px-2 py-1 rounded-md">C</a>
                                        <a href="#" className="hover:bg-gray-700 bg-black text-sm font-bold text-yellow-300 px-2 py-1 rounded-md">C</a>
                                    </div>
                                    <div className="options flex items-center space-x-1">
                                        <div className="border px-2 rounded-lg">
                                            <select className="outline-none w-full">
                                                <option value="">ภาษาไทย</option>
                                                <option value="">English</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> */}
                                {/* ================================ End menu Options ================================ */}

                                {/* ================================ Nav menus ================================ */}
                                <NavMenu />
                                {/* ================================ End nav menus ================================ */}

                                {/* ================================ Nav mobile ================================ */}
                                <div className="mobile-menu">
                                    <div className="sidenav-btn">
                                        <div className="hamburger">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                {/* ================================ End nav mobile ================================ */}
                            </div>
                        </div>
                    </div>
                    {/* /.menu-container */}
                </div>
                {/* /.wrapper */}
            </div>
            {/* /.container */}
        </nav>
    )
}