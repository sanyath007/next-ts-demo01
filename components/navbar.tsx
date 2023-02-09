import { useState } from 'react'
import Link from 'next/link'
import DropdownMenu from './dropdown-menu'
import ToggleBtn from './toggle-btn'

export default function Navbar({ screenWidth, ...props }: { screenWidth: number }) {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="bg-blue-700">
            {/* Container */}
            <div className="container flex flex-wrap px-4 py-2 mx-auto lg:space-x-4">
            {/* Brand */}
                <a href="#" className="inline-flex p-2 text-xl font-bold uppercase tracking-wider text-white">
                    Frontentfunn
                </a>
                {/* Toggle Button */}
                <ToggleBtn
                    toggle={toggleMenu}
                    handleToggle={setToggleMenu}
                />
                {/* Link */}
                {(toggleMenu || screenWidth >= 1024) ? (
                    <div className="w-full lg:w-auto lg:inline-flex mt-2 lg:mt-0">
                        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                            <li>
                                <Link href="/" className="flex px-4 py-2 font-medium text-white bg-blue-900 hover:bg-blue-800 rounded-md">
                                    หน้าหลัก
                                </Link>
                            </li>
                            <li>
                                <Link href="structure" className="flex px-4 py-2 font-medium text-white hover:bg-blue-800 rounded-md">
                                    โครงสร้างองค์กร
                                </Link>
                            </li>
                            {/* Dropdown */}
                            <DropdownMenu
                                name="Dropdown"
                                submenus={['Brands', 'Categories', 'Inventories']}
                                defaultState={false}
                            />
                            {/* Dropdown */}
                            <li>
                                <a href="#" className="flex px-4 py-2 font-medium text-white hover:bg-blue-800 rounded-md">Orders</a>
                            </li>
                            <li>
                                <a href="#" className="flex px-4 py-2 font-medium text-white hover:bg-blue-800 rounded-md">Invoices</a>
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        </nav>
    )
}