import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { Submenu } from '../models/Submenu'

export default function DropdownMenu ({
    name,
    submenus,
    defaultState
}: { name: string, submenus: Submenu[], defaultState: boolean } ) {
    const [toggleDropdown, setToggleDropdown] = useState(false)

    return (
        <li className="relative">
            <a
                href="#"
                className="flex items-center gap-1 px-4 py-2 font-medium text-white hover:bg-blue-800 rounded-md"
                onClick={() => setToggleDropdown(!toggleDropdown)}
            >
                {name}
                <FaCaretDown />
            </a>
            {(toggleDropdown || defaultState) && (
                <div className="lg:absolute bg-white right-0 rounded-md p-2 border z-10">
                    <ul className="flex flex-col space-y-2 lg:w-48">
                        {submenus && submenus.map((submenu, index) => (
                            <li key={index}>
                                <a href="#" className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black" onClick={() => setToggleDropdown(false)}>
                                    {submenu.thname}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    )
}