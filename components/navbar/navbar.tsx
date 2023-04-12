import { useState } from 'react'
import Link from 'next/link'
import DropdownMenu from './dropdown-menu'
import ToggleBtn from './toggle-btn'
import NavLogo from './nav-logo'
import BottomMenu from './nav-menu'

export default function Navbar({ screenWidth, ...props }: { screenWidth: number }) {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="topnav bg-white">
            <div className="container mx-auto">
                <div className="wrapper w-full">
                    <div className="menu-container w-full">

                        {/* Brand */}
                        <NavLogo />

                        {/* ================================ Old nav bottom menu ================================ */}
                        {/* <div className="nav-bottom"> */}
                            {/* Container */}
                            {/* <div className="container flex flex-wrap px-4 py-2 mx-auto lg:space-x-4"> */}
                                {/* Toggle Button */}
                                {/* <ToggleBtn
                                    toggle={toggleMenu}
                                    handleToggle={setToggleMenu}
                                /> */}

                                {/* Link */}
                                {(toggleMenu || screenWidth >= 1024) ? (
                                    <>
                                        {/* <div className="container w-full lg:w-auto lg:inline-flex mt-2 lg:mt-0"> */}
                                            {/* <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                                                <li>
                                                    <Link href="/" className="flex px-4 py-2 text-sm font-normal text-white bg-green-900 hover:bg-green-700 rounded-md">
                                                        หน้าหลัก
                                                    </Link>
                                                </li> */}

                                                {/* Dropdown */}
                                                {/* <DropdownMenu
                                                    name="เกี่ยวกับเรา"
                                                    submenus={[
                                                        { id: 1, thname: 'ประวัติความเป็นมา', enname: '', link: '/about' }, 
                                                        { id: 2, thname: 'ทำเนียบผู้บริหาร', enname: '', link: '/director' },
                                                        { id: 3, thname: 'โครงส้รางองค์กร', enname: '', link: '/structure' },
                                                    ]}
                                                    defaultState={false}
                                                /> */}
                                                {/* Dropdown */}

                                                {/* <li>
                                                    <Link href="/structure" className="flex px-4 py-2 text-sm font-normal text-white hover:bg-green-700 rounded-md">
                                                        บริการของเรา
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex px-4 py-2 text-sm font-normal text-white hover:bg-green-700 rounded-md">
                                                        คลังความรู้
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex px-4 py-2 text-sm font-normal text-white hover:bg-green-700 rounded-md">
                                                        ศูนย์ปฏิบัติการสารสนเทศ
                                                    </a>
                                                </li>
                                            </ul> */}
                                        {/* </div> */}
                                    </>
                                ) : null}

                            {/* </div>
                        </div> */}
                        {/* ================================ End old nav bottom menu ================================ */}

                    </div>
                    {/* /.menu-container */}
                </div>
                {/* /.wrapper */}
            </div>
            {/* /.container */}
        </nav>
    )
}