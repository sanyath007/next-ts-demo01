

export default function Footer () {
    return (
        <footer className="bottom-0 absolute w-full" style={{ background: '#06693a'}}>
            <div className="container mx-auto text-white" style={{ fontSize: '0.875rem' }}>
                <div className="flex flex-col border">
                    <div className="flex flex-row justify-between py-5">
                        {/* Col */}
                        <div className="flex flex-col">
                            <h2>โรงพยาบาลเทพรัตน์นครราชสีมา</h2>
                            <div></div>
                        </div>
                        {/* Col */}
                        <div className="flex flex-col">
                            <h2>งานบริการคลินิก</h2>
                            <ul>
                                <li><a href="">การประเมินความเสี่ยงในสถานประกอบการ</a></li>
                            </ul>
                        </div>
                        {/* Col */}
                        <div className="flex flex-col">
                            <h2>ติอต่อเรา</h2>
                            <ul>
                                <li>โทรศัพท์ 02-598-8885 (สำนักงาน), 02-598-8812 (ห้องตรวจ)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: '#0a0b0c' }}>
                <div className="container mx-auto text-white text-center py-4" style={{ fontSize: '12px' }}>
                    ©2020 โรงพยาบาลเทพรัตน์นครราชสีมา. All Rights Reserved | DESIGNED BY <a href="https://www.click-end.com/" target="_blank">Query Studio Inc.</a>
                </div>
            </div>
        </footer>
    )
}
