import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'

export default function Footer () {
    return (
        <footer className="absolute h-auto w-full" style={{ background: '#06693a'}}>
            <div className="container mx-auto text-white" style={{ fontSize: '0.875rem' }}>
                <div className="relative flex flex-col">
                    <div className="flex flex-row justify-between py-5">
                        {/* Col */}
                        <div className="relative flex flex-col">
                            <h2 className="font-bold text-md my-2">ศูนย์สุขภาพจิตที่ 9</h2>
                            <div className="text-xs font-light space-y-1">
                                <p>Mental Health Center 9</p>
                                <p>เลขที่ 86 ถ.ช้างเผือก อ.เมือง จ.นครราชสีมา 30000</p>
                            </div>
                        </div>
                        {/* Col */}
                        <div className="flex flex-col">
                            <h2 className="font-bold text-md my-2">งานบริการคลินิก</h2>
                            <ul className="text-xs font-light space-y-1">
                                <li><a href="#" className="hover:text-gray-400">ตรวจสุขภาพ</a></li>
                                <li><a href="#" className="hover:text-gray-400">การประเมินความเสี่ยงในสถานประกอบการ</a></li>
                                <li><a href="#" className="hover:text-gray-400">การตรวจสุขภาพก่อนกลับเข้าทำงาน</a></li>
                                <li><a href="#" className="hover:text-gray-400">การวินิจฉัยโรคจากการทำงาน</a></li>
                                <li><a href="#" className="hover:text-gray-400">การให้คำปรึกษาและส่งเสริมด้านสุขภาพ</a></li>
                            </ul>
                        </div>
                        {/* Col */}
                        <div className="flex flex-col w-[315px]">
                            <h2 className="font-bold text-md my-2">ติอต่อเรา</h2>
                            <ul className="text-xs font-light space-y-1">
                                <li>โทรศัพท์ 0-4425-6729</li>
                                <li>โทรสาร 0-4425-6730</li>
                                <li>อีเมล mhc9dmh@gmail.com</li>
                            </ul>
                            <div className="social-icons flex gap-4 mt-2 text-2xl">
                                <a href="https://www.facebook.com/mhc9dmh" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                                    <FaFacebook />
                                </a>
                                <a href="#" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                                    <FaTwitter />
                                </a>
                                <a href="#" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.youtube.com/@user-vf2ep3tx6h" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between py-1">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center gap-2 my-1">
                                <div className="overflow-hidden rounded-md">
                                    <img src="https://anamai.moph.go.th/assets/app/images/icon/ipv6.png" alt="" />
                                </div>
                                <div className="overflow-hidden rounded-md">
                                    <img src="https://anamai.moph.go.th/assets/app/images/icon/w3c.png" alt="" />
                                </div>
                            </div>
                            <div className="text-xs font-light flex flex-row items-center">
                                <Link href="/" className="hover:text-gray-400">นโยบายเว็บไซต์</Link>
                                <Link href="/" className="hover:text-gray-400 mx-2">นโยบายการคุ้มครองข้อมูลส่วนบุคคล</Link>
                                <Link href="/" className="hover:text-gray-400">นโยบายการรักษาความมั่นคงปลอดภัยเว็บไซต์</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-[315px]">
                            <p className="text-xs font-light">จำนวนผู้เข้าชม</p>
                            <div className="rounded-md bg-white h-[25px] w-1/2">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: '#0a0b0c' }}>
                <div className="container mx-auto text-white text-center font-light py-4" style={{ fontSize: '12px' }}>
                    ©2020 ศูนย์สุขภาพจิตที่ 9 All Rights Reserved | DESIGNED BY 
                    <a href="https://www.query-studio.com" target="_blank" rel="noreferrer" className="ml-1">
                        Query Studio Inc.
                    </a>
                </div>
            </div>
        </footer>
    )
}
