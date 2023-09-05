import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLine, FaMapMarkerAlt } from 'react-icons/fa'
import CookieConsent from './cookie-consent/CookieConsent';

export default function Footer () {
    const [showCookieConsent, setShowCookieConsent] = useState(false);

    useEffect(() => {
        setShowCookieConsent(true);
    }, []);

    return (
        <footer className="absolute h-auto w-full" style={{ background: '#06693a'}}>
            <div className="container mx-auto text-white lg:px-4 xl:px-4" style={{ fontSize: '0.875rem' }}>
                <div className="relative flex flex-col">
                    <div className="flex flex-row justify-between py-5">
                        {/* Col */}
                        <div className="relative flex flex-col max-md:hidden">
                            <h2 className="font-bold text-md my-2">รู้จักเรา</h2>
                            <ul className="text-xs font-light space-y-1">
                                <li><a href="#" className="hover:text-gray-400">ประวัติความเป็นมา</a></li>
                                <li><a href="#" className="hover:text-gray-400">วิสัยทัศน์ พันธกิจ</a></li>
                                <li><a href="#" className="hover:text-gray-400">ผู้บริการหน่วยงาน</a></li>
                                <li><a href="#" className="hover:text-gray-400">โครงสร้างองค์กร</a></li>
                                <li><a href="#" className="hover:text-gray-400">ภารกิจและหน้าที่รับผิดชอบ</a></li>
                            </ul>
                        </div>

                        {/* Col */}
                        <div className="flex flex-col max-md:hidden">
                            <h2 className="font-bold text-md my-2">บริการประชาชน</h2>
                            <ul className="text-xs font-light space-y-1">
                                <li><a href="#" className="hover:text-gray-400">คู่มือการให้บริการ</a></li>
                                <li><a href="#" className="hover:text-gray-400">แจ้งเรื่องร้องเรียน</a></li>
                                <li><a href="#" className="hover:text-gray-400">คำถามที่ถามบ่อย (FAQ)</a></li>
                                <li><a href="#" className="hover:text-gray-400">สื่อสุขภาพจิต</a></li>
                                <li><a href="#" className="hover:text-gray-400">บริการ E-Services</a></li>
                            </ul>
                        </div>

                        {/* Col */}
                        <div className="flex flex-col max-md:hidden max-lg:hidden">
                            <h2 className="font-bold text-md my-2">สำหรับเจ้าหน้าที่</h2>
                            <ul className="text-xs font-light space-y-1">
                                <li><a href="#" className="hover:text-gray-400">ระบบ WPM</a></li>
                                <li><a href="#" className="hover:text-gray-400">ระบบงานสารบรรณอิเล็กทรอนิกส์</a></li>
                                <li><a href="#" className="hover:text-gray-400">ระบบเพิ่มประสิทธิภาพการจัดการงบประมาณและแผนงาน (B&P DMH)</a></li>
                                <li><a href="#" className="hover:text-gray-400">ระบบงานบุคลากร</a></li>
                            </ul>
                        </div>

                        {/* Col */}
                        <div className="flex flex-col w-[315px] max-md:w-full">
                            <h2 className="font-bold text-md my-2">ติอต่อเรา</h2>
                            <ul className="text-xs font-light space-y-1">
                                <li><a href="/" className="hover:text-gray-400 font-medium">ศูนย์สุขภาพจิตที่ 9</a></li>
                                <li>เลขที่ 86 ถ.ช้างเผือก อ.เมือง จ.นครราชสีมา 30000</li>
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
                                <a href="#" className="hover:text-gray-300">
                                    <FaLine size={'22px'} />
                                </a>
                                <Link href="/contact" className="hover:text-gray-300">
                                    <FaMapMarkerAlt size={'22px'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between max-lg:flex-col max-lg:items-start py-1">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center gap-2 my-1">
                                <div className="overflow-hidden rounded-md">
                                    <picture>
                                        <img src="https://anamai.moph.go.th/assets/app/images/icon/ipv6.png" alt="" />
                                    </picture>
                                </div>
                                <div className="overflow-hidden rounded-md">
                                    <picture>
                                        <img src="https://anamai.moph.go.th/assets/app/images/icon/w3c.png" alt="" />
                                    </picture>
                                </div>
                            </div>
                            <div className="text-xs font-light flex flex-row items-center">
                                <Link href="/" className="hover:text-gray-400 mr-2">นโยบายเว็บไซต์</Link> |
                                <Link href="/" className="hover:text-gray-400 mx-2">นโยบายการคุ้มครองข้อมูลส่วนบุคคล</Link> |
                                <Link href="/" className="hover:text-gray-400 ml-2">นโยบายการรักษาความมั่นคงปลอดภัยเว็บไซต์</Link>
                            </div>
                        </div>
                        <div className="max-lg:mt-4 mb-2">
                            <div className="flex flex-col gap-1 w-[315px]">
                                <p className="text-xs font-light">จำนวนผู้เข้าชม</p>
                                <div className="rounded-md bg-white h-[25px] w-1/2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: '#0a0b0c' }}>
                <div className="container mx-auto text-white text-center font-light py-4" style={{ fontSize: '12px' }}>
                    ©2020 ศูนย์สุขภาพจิตที่ 9 All Rights Reserved | DESIGNED BY 
                    <a href="https://www.query-studio.com" target="_blank" rel="noreferrer" className="ml-1">
                        นายสัญญา ธรรมวงษ์
                    </a>
                </div>
            </div>

            <CookieConsent
                isShow={showCookieConsent}
                onHide={() => setShowCookieConsent(false)}
            />
        </footer>
    )
}
