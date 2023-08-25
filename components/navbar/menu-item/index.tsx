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
                            <a href="https://anamai.moph.go.th/th/news-anamai" target="_self">
                                ข่าวกิจกรรม
                            </a>
                        </div>
                        {/* <div className="submenu ">
                            <a href="https://anamai.moph.go.th/th/news-anamai1" target="_self">
                                ข่าวประชาสัมพันธ์ส่วนกลาง
                            </a>
                        </div>
                        <div className="submenu ">
                            <a href="https://anamai.moph.go.th/th/cms-of-77" target="_self">
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
                                        <a data-mid="809" href="http://eauction.anamai.moph.go.th/?page=eau" target="_self">แผนการจัดซื้อจัดจ้าง</a>
                                    </div>
                                    <div className="child">
                                        <a data-mid="810" href="http://finance.anamai.moph.go.th/main.php?filename=price" target="_self">ประกาศราคากลาง</a>
                                    </div>
                                    <div className="child">
                                        <a data-mid="811" href="http://eauction.anamai.moph.go.th/" target="_self">ประกาศร่าง TOR</a>
                                    </div>
                                    <div className="child">
                                        <a data-mid="812" href="http://eauction.anamai.moph.go.th/" target="_self">ประกาศจัดซื้อจัดจ้าง</a>
                                    </div>
                                    <div className="child">
                                        <a data-mid="813" href="http://www.oic.go.th/INFOCENTER17/ifunc_docgrp.asp?f=0010001701003010&amp;i=C9%2E%3AN%2E2182&amp;b=1&amp;r=1&amp;t=@&amp;d=%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B%E0%B8%9C%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%8B%E0%B8%B7%E0%B9" target="_self">
                                            ประกาศผู้ชนะการเสนอราคา
                                        </a>
                                    </div>
                                    {/* <div className="child">
                                        <a data-mid="814" href="http://eauction.anamai.moph.go.th/?page=eau" target="_self">สรุปผลการจัดซื้อจัดจ้าง</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="submenu ">
                            <a href="https://person.anamai.moph.go.th/th/capital-1" target="_blank">ทุนพัฒนาข้าราชการ</a>
                        </div> */}
                        <div className="submenu ">
                            <a href="https://person.anamai.moph.go.th/th/cms-of-34" target="_self">ข่าวรับสมัครงาน</a>
                        </div>
                        {/* <div className="submenu ">
                            <a href="https://anamai.moph.go.th/th/cms-of-10" target="_self">ข่าวหนังสือพิมพ์</a>
                        </div> */}
                        <div className="submenu ">
                            <a href="https://anamai.moph.go.th/th/calendar" target="_self">ปฏิทินกิจกรรม</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}