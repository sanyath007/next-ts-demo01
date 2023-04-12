import { useState } from 'react'
import Link from 'next/link'
import NavLogo from './nav-logo'

export default function Navbar({ screenWidth, ...props }: { screenWidth: number }) {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="topnav bg-white">
            <div className="container mx-auto">
                <div className="wrapper w-full">
                    <div className="menu-container w-full">

                        {/* Brand */}
                        <NavLogo />

                    </div>
                    {/* /.menu-container */}
                </div>
                {/* /.wrapper */}
            </div>
            {/* /.container */}
        </nav>
    )
}