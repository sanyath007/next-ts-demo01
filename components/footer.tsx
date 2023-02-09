import { FaFacebook, FaEnvelope, FaYoutube } from 'react-icons/fa'

export default function Footer () {
    return (
        <footer className="absolute h-auto w-full" style={{ background: '#06693a'}}>
            <div className="container mx-auto text-white" style={{ fontSize: '0.875rem' }}>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between py-5">
                        {/* Col */}
                        <div className="flex flex-col">
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
                        <div className="flex flex-col">
                            <h2 className="font-bold text-md my-2">ติอต่อเรา</h2>
                            <ul className="text-xs font-light space-y-1">
                                <li>โทรศัพท์ 02-598-8885 (สำนักงาน), 02-598-8812 (ห้องตรวจ)</li>
                                <li>โทรสาร 02-598-8693</li>
                                <li>อีเมลล์ occmed_pathum@hotmail.com</li>
                            </ul>
                            <div className="social-icons flex gap-4 mt-2 text-2xl">
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
                    ©2020 ศูนย์สุขภาพจิตที่ 9 All Rights Reserved | DESIGNED BY 
                    <a href="https://www.query-studio.com" target="_blank" rel="noreferrer" className="ml-1">
                        Query Studio Inc.
                    </a>
                </div>
            </div>
        </footer>
    )
}
