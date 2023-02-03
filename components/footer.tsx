import { FaFacebook, FaEnvelope, FaYoutube } from 'react-icons/fa'

export default function Footer () {
    return (
        <footer className="bottom-0 absolute w-full" style={{ background: '#06693a'}}>
            <div className="container mx-auto text-white" style={{ fontSize: '0.875rem' }}>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between py-5">
                        {/* Col */}
                        <div className="flex flex-col">
                            <h2 className="font-bold text-md my-2">โรงพยาบาลเทพรัตน์นครราชสีมา</h2>
                            <div className="text-xs font-light">
                                Debaratana Nakhon Ratchasima Hospital
                                <p>345/5 หมู่ 5 ถนนมิตรภาพ ตำบลโคกกรวด อำเภอเมือง นครราชสีมา 30280</p>
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
                        <div className="flex flex-col">
                            <h2 className="font-bold text-md my-2">ติอต่อเรา</h2>
                            <ul className="text-xs font-light space-y-1">
                                <li>โทรศัพท์ 02-598-8885 (สำนักงาน), 02-598-8812 (ห้องตรวจ)</li>
                                <li>โทรสาร 02-598-8693</li>
                                <li>อีเมลล์ occmed_pathum@hotmail.com</li>
                            </ul>
                            <div className="social-icons flex gap-4 mt-1 text-2xl">
                                <a href="#" className="hover:text-gray-300"><FaFacebook /></a>
                                <a href="#" className="hover:text-gray-300"><FaEnvelope /></a>
                                <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: '#0a0b0c' }}>
                <div className="container mx-auto text-white text-center font-light py-4" style={{ fontSize: '12px' }}>
                    ©2020 โรงพยาบาลเทพรัตน์นครราชสีมา All Rights Reserved | DESIGNED BY 
                    <a href="https://www.click-end.com/" target="_blank" rel="noreferrer" className="ml-1">
                        Query Studio Inc.
                    </a>
                </div>
            </div>
        </footer>
    )
}
