import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../features/navbarSlice'

const Sidebar = ({ isShow }: { isShow: boolean }) => {
    const dispatch = useDispatch();

    return (
        <div className={`${isShow ? 'block' : 'hidden'} absolute top-0 left-0 h-full w-[220px] bg-white border z-[1000]`}>
            <div>
                <a href='#' className="absolute top-1 right-1 cursor-pointer" onClick={() => dispatch(toggleSidebar())}>
                    <span className="border rounded-full w-[20px] h-[20px] flex justify-center items-center hover:bg-gray-500 hover:text-white">
                        X
                    </span>
                </a>
                <ul className="flex flex-col py-2 mt-[30px]">
                    <li className="m-0 py-2 px-2 hover:bg-gray-300 border-b-[1px]"><a>หน้าหลัก</a></li>
                    <li className="m-0 py-2 px-2 hover:bg-gray-300 border-b-[1px]"><a>รู้จักเรา</a></li>
                    <li className="m-0 py-2 px-2 hover:bg-gray-300 border-b-[1px]"><a>ข่าวประชาสัมพันธ์</a></li>
                    <li className="m-0 py-2 px-2 hover:bg-gray-300 border-b-[1px]"><a>บริการประชาชน</a></li>
                    <li className="m-0 py-2 px-2 hover:bg-gray-300 border-b-[1px]"><a>ติดต่อเรา</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar