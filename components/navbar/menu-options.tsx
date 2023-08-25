import React from 'react'

const MenuOptions = () => {
    return (
        <div className="menu-options flex items-center gap-5">
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
        </div>
    )
}

export default MenuOptions