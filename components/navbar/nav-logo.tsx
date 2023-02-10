
export default function NavLogo() {
    return (
        <div className="container mx-auto">
            <div className="relative flex justify-between items-center w-full">
                <a href="#" className="logo flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B8%AA%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88.png" alt="logo" />
                    <div className="logo-text">
                        <h1>ศูนย์สุขภาพจิตที่ 9</h1>
                        <p>Mental Health Center 9</p>
                    </div>
                </a>
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
            </div>
        </div>
    )
}