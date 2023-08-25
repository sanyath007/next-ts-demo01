import MenuHero from "./menu-hero"


export default function MenuItem() {
    return (
        <div className="menu has-children ">
			<a href="#" target="_self"><div>ข่าวประชาสัมพันธ์</div></a>
                <div className="submenu-container ">
                <div className="wrapper">
                    <MenuHero imgSrc="/03.png" />

                    <div className="submenus">
                        <div className="submenu ">
                            <a href="#" target="_self">
                                ข่าวกิจกรรม
                            </a>
                        </div>
                        {/* <div className="submenu ">
                            <a href="#" target="_self">
                                ข่าวประชาสัมพันธ์ส่วนกลาง
                            </a>
                        </div>
                        <div className="submenu ">
                            <a href="#" target="_self">
                                ข่าวประชาสัมพันธ์ส่วนภูมิภาค
                            </a>
                        </div> */}
                        <div className="submenu has-children">
                            <a href="#" target="_self">
                                ข่าวจัดซื้อจัดจ้าง
                            </a>
                            <div className="child-container">
                                <div className="childs">
                                    <div className="child">
                                        <a href="#" target="_self">แผนการจัดซื้อจัดจ้าง</a>
                                    </div>
                                    <div className="child">
                                        <a href="#" target="_self">ประกาศราคากลาง</a>
                                    </div>
                                    <div className="child">
                                        <a href="#" target="_self">ประกาศร่าง TOR</a>
                                    </div>
                                    <div className="child">
                                        <a href="#" target="_self">ประกาศจัดซื้อจัดจ้าง</a>
                                    </div>
                                    <div className="child">
                                        <a href="#" target="_self">
                                            ประกาศผู้ชนะการเสนอราคา
                                        </a>
                                    </div>
                                    {/* <div className="child">
                                        <a href="#" target="_self">สรุปผลการจัดซื้อจัดจ้าง</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="submenu ">
                            <a href="#" target="_blank">ทุนพัฒนาข้าราชการ</a>
                        </div> */}
                        <div className="submenu ">
                            <a href="#" target="_self">ข่าวรับสมัครงาน</a>
                        </div>
                        {/* <div className="submenu ">
                            <a href="#" target="_self">ข่าวหนังสือพิมพ์</a>
                        </div> */}
                        <div className="submenu ">
                            <a href="#" target="_self">ปฏิทินกิจกรรม</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}