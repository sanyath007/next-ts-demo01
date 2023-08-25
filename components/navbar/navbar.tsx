import { useState } from 'react'
import Link from 'next/link'
import NavLogo from './nav-logo'
import NavMenu from "./nav-menu";
import MenuOptions from './menu-options';
import MenuMobile from './menu-mobile';

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
                                {/* <MenuOptions /> */}
                                {/* ================================ End menu Options ================================ */}

                                {/* ================================ Nav menus ================================ */}
                                <NavMenu />
                                {/* ================================ End nav menus ================================ */}

                                {/* ================================ Nav mobile ================================ */}
                                <MenuMobile />
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