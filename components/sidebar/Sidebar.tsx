import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../features/navbarSlice'

const Sidebar = ({ isShow }: { isShow: boolean }) => {
    const dispatch = useDispatch();

    return (
        <div className={`sidebar ${isShow ? 'block' : 'hidden'}`}>
            <div className="sidebar-wrapper">
                <a href='#' className="absolute top-2 right-2 cursor-pointer" onClick={() => dispatch(toggleSidebar())}>
                    <span className="border rounded-full w-[20px] h-[20px] flex justify-center items-center text-white hover:text-black hover:bg-white">
                        <i className="fas fa-times"></i>
                    </span>
                </a>
                <div className="navigation">
                    <ul>
                        <li><a href="/">หน้าหลัก</a></li>
                        <li className="has-sub">
                            <a href="">รู้จักเรา</a>
                            <ul>
                                <li><Link href="/about">ประวัติความเป็นมา</Link></li>
                                <li><Link href="/vision">วิสัยทัศน์ พันธกิจ ค่านิยม</Link></li>
                                <li><Link href="/executives">ผู้บริหารหน่วยงาน</Link></li>
                                <li><Link href="/structure">โครงสร้างองค์กร</Link></li>
                                <li><Link href="/mission">ภารกิจและหน้าที่รับผิดชอบ</Link></li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a href="">ข่าวประชาสัมพันธ์</a>
                            <ul>
                                <li><a href="">ข่าวกิจกรรม</a></li>
                                <li><a href="">ข่าวจัดซื้อจัดจ้าง</a></li>
                                <li><a href="">ข่าวรับสมัครงาน</a></li>
                                <li><a href="">ปฏิทินกิจกรรม</a></li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a href="">บริการประชาชน</a>
                            <ul>
                                <li><a href="">คู่มือการให้บริการ</a></li>
                                <li><a href="">แจ้งเรื่องร้องเรียน</a></li>
                                <li><a href="">กระดานถาม-ตอบ</a></li>
                                <li><a href="">คำถามที่ถามบ่อย (FAQ)</a></li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a href="">ติดต่อเรา</a>
                            <ul>
                                <li><Link href="/contact">ติดต่อเรา</Link></li>
                                <li><Link href="/links">ลิงค์ที่เกี่ยวข้อง</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar