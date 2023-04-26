import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import MenuItem from './menu-item'

export default function NavMenu() {
    return (
        <div className="bottom-menu" id="topnav-menu-container">
            <div className="menu icon-menu active">
                <a href="https://anamai.moph.go.th/th" data-label="หน้าหลัก">
                    <div><FaHome size={'1rem'} /></div>
                </a>
            </div>
            <div className="menu has-children ">
                <a data-mid="816" href="javascript:void(0);" target="_self"><div>รู้จักเรา</div></a>
                <div className="submenu-container ">
                    <div className="wrapper">
                        <div className="hero">
                            <div className="wrapper lazy-bg" data-src="/bg-01.jpg">
                                <h2 className="color0">รู้จักเรา</h2>
                                <p className="color0"></p>
                                <img className="lazy-img" src="/01.png" data-src="/assets/app/images/menu/01.png" alt="" />
                            </div>
                        </div>
                        <div className="submenus">
                            <div className="submenu ">
                                <Link href="/about" target="_self">ประวัติความเป็นมา</Link>
                            </div>
                            <div className="submenu ">
                                <a data-mid="835" href="https://anamai.moph.go.th/th/mission-vision" target="_self">วิสัยทัศน์ พันธกิจ</a>
                            </div>
                            <div className="submenu ">
                                <a data-mid="834" href="https://anamai.moph.go.th/th/executive-department-of-health" target="_self">ผู้บริหารหน่วยงาน</a>
                            </div>
                            {/* <div className="submenu has-children">
                                <a data-mid="831" href="javascript:void(0);" target="_self">CIO กรมอนามัย</a>
                                <div className="child-container">
                                    <div className="childs">
                                        <div className="child">
                                            <a data-mid="832" href="https://anamai.moph.go.th/th/cio" target="_self">ประวัติ CIO</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="833" href="https://anamai.moph.go.th/th/information-and-communication-technology-master-plan-of-the-department-of-health" target="_self">
                                                แผนปฏิบัติการดิจิทัล
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="submenu ">
                                <Link href="/structure" target="_self">โครงสร้างองค์กร</Link>
                            </div>
                            <div className="submenu ">
                                <a data-mid="829" href="https://anamai.moph.go.th/th/mission-and-acceptance-of-work" target="_self">ภารกิจและหน้าที่รับผิดชอบ</a>
                            </div>
                            {/* <div className="submenu ">
                                <a data-mid="815" href="https://anamai.moph.go.th/th/web-link" target="_self">หน่วยงานในสังกัดกรมอนามัย</a>
                            </div> */}
                            <div className="submenu has-children">
                                <a data-mid="821" href="javascript:void(0);" target="_self">คำรับรองและรายงานผลการปฏิบัติราชการ</a>
                                <div className="child-container">
                                    <div className="childs">
                                        <div className="child">
                                            <a data-mid="825" href="http://psdg.anamai.moph.go.th/main.php?filename=agreement2559_psdg" target="_self">ปีงบประมาณ พ.ศ. 2559</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="824" href="http://psdg.anamai.moph.go.th/main.php?filename=agreement2558" target="_blank" rel="noreferrer">ปีงบประมาณ พ.ศ. 2558</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="823" href="http://psdg.anamai.moph.go.th/main.php?filename=agreement2557" target="_self">ปีงบประมาณ พ.ศ. 2557</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="submenus">
                            <div className="submenu ">
                                <a data-mid="820" href="http://laws.anamai.moph.go.th/main.php?filename=0IndexLaws" target="_self">กฎ ระเบียบ ข้อบังคับ</a>
                            </div>
                            <div className="submenu ">
                                <a data-mid="828" href="https://anamai.moph.go.th/th/manual-standards-of-practice-of-the-department-of-health" target="_self">คู่มือ/ระเบียบปฏิบัติ</a>
                            </div>
                            {/* <div className="submenu ">
                                <a data-mid="916" href="https://person.anamai.moph.go.th/" target="_blank" rel="noreferrer">บริหารทรัพยากรบุคคล</a>
                            </div> */}
                            <div className="submenu has-children">
                                <a data-mid="980" href="javascript:void(0);" target="_self">แผนยุทธศาสตร์</a>
                                <div className="child-container">
                                    <div className="childs">
                                        <div className="child">
                                            <a data-mid="985" href="https://planning.anamai.moph.go.th/th/government-action-plan" target="_blank" rel="noreferrer">แผนปฏิบัติราชการ</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="984" href="https://planning.anamai.moph.go.th/th/doh-action-plan" target="_blank" rel="noreferrer">แผนปฏิบัติการ</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="983" href="https://planning.anamai.moph.go.th/th/doh-strategic-plan" target="_blank" rel="noreferrer">แผนยุทธศาสตร์</a>
                                        </div>
                                        {/* <div className="child">
                                            <a data-mid="982" href="https://planning.anamai.moph.go.th/th/strategy-management5" target="_blank" rel="noreferrer">แผนระดับ 3 ในความรับผิดชอบ</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="981" href="https://anamai.moph.go.th/th/integrated-strategic-plan" target="_self">แผนยุทธศาสตร์บูรณาการ</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="submenu ">
                                <a data-mid="986" href="https://planning.anamai.moph.go.th/th/data-evaluation9" target="_blank" rel="noreferrer">การกำกับติดตามการดำเนินงาน</a>
                            </div>
                            <div className="submenu ">
                                <a data-mid="987" href="https://planning.anamai.moph.go.th/th/annual-report" target="_blank" rel="noreferrer">รายงานประจำปี</a>
                            </div>
                            <div className="submenu ">
                                <a data-mid="827" href="https://anamai.moph.go.th/th/download-related-documents" target="_self">ดาวน์โหลดเอกสารที่เกี่ยวข้อง</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MenuItem />

            <div className="menu has-children ">
                <a data-mid="763" href="javascript:void(0);" target="_self"><div>บริการประชาชน</div></a>
                <div className="submenu-container ">
                    <div className="wrapper">
                        <div className="hero">
                            <div className="wrapper lazy-bg" data-src="/bg-02.jpg">
                                <h2 className="color0">บริการประชาชน</h2>
                                <p className=""></p>
                                <img className="lazy-img" src="/02.png" data-src="/02.png" alt="" />
                            </div>
                        </div>

                        <div className="submenus">
                            <div className="submenu ">
                                <a data-mid="837" href="https://anamai.moph.go.th/th/department-of-health-services-manual" target="_self">คู่มือการให้บริการ</a>
                            </div>
                            <div className="submenu ">
                                <a data-mid="838" href="https://complaint.anamai.moph.go.th/" target="_self">แจ้งเรื่องร้องเรียน</a>
                            </div>
                            {/* <div className="submenu ">
                                <a data-mid="988" href="https://anamai.moph.go.th/th/complaint/" target="_self">แจ้งเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ</a>
                            </div> */}
                            <div className="submenu ">
                                <a data-mid="889" href="https://anamai.moph.go.th/th/webboard" target="_self">กระดานถาม-ตอบ</a>
                            </div>
                            {/* <div className="submenu has-children">
                                <a data-mid="839" href="javascript:void(0);" target="_self">ความรู้สุขภาพ</a>
                                <div className="child-container">
                                    <div className="childs">
                                        <div className="child">
                                            <a data-mid="845" href="https://multimedia.anamai.moph.go.th/help-knowledge/categories/mom-and-child/" target="_self">อนามัยแม่และเด็ก</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="842" href="https://multimedia.anamai.moph.go.th/help-knowledge/categories/elderly/" target="_self">อนามัยผู้สูงอายุ</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="844" href="https://multimedia.anamai.moph.go.th/help-knowledge/categories/teen/" target="_self">อนามัยวัยเรียน วัยรุ่น</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="843" href="https://multimedia.anamai.moph.go.th/help-knowledge/categories/working-age/" target="_self">อนามัยวัยทำงาน</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="634" href="https://multimedia.anamai.moph.go.th/help-knowledge/categories/environment/" target="_self">อนามัยสิ่งแวดล้อม</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="631" href="https://multimedia.anamai.moph.go.th/help-knowledge/categories/dental/" target="_self">ทันตสาธารณสุข</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="841" href="https://multimedia.anamai.moph.go.th/help-knowledge/categories/nutrition/" target="_self">โภชนาการ</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="633" href="https://multimedia.anamai.moph.go.th/help-knowledge/categories/exercise/" target="_self">ออกกำลังกายเพื่อสุขภาพ</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="840" href="https://anamai.moph.go.th/th/rap-porteur" target="_self">Rap porteur</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="submenu has-children">
                                <a data-mid="734" href="javascript:void(0);" target="_self">สื่อสุขภาพจิต</a>
                                <div className="child-container">
                                    <div className="childs">
                                        <div className="child">
                                            <a data-mid="805" href="https://anamai.moph.go.th/th/vdo-gallery" target="_self">คลิปวีดิโอสุขภาพ</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="735" href="https://anamai.moph.go.th/th/infographic" target="_self">อินโฟกราฟฟิก</a>
                                        </div>
                                        <div className="child">
                                            <a data-mid="847" href="https://anamai.moph.go.th/th/ebook" target="_self">วารสารออนไลน์</a>
                                        </div>
                                        {/* <div className="child">
                                            <a data-mid="846" href="https://multimedia.anamai.moph.go.th/ebooks/" target="_self">อนามัยบุ๊ค</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="submenu">
                                <a data-mid="860" href="https://anamai.moph.go.th/th/e-services" target="_self">บริการอื่นๆ (E-Services)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu has-children ">
                <a data-mid="764" href="javascript:void(0);" target="_self"><div>ติดต่อเรา</div></a>
                <div className="submenu-container expand-left">
                    <div className="wrapper">
                        <div className="hero">
                            <div className="wrapper lazy-bg" data-src="/bg-03.jpg">
                                <h2 className="">ติดต่อเรา</h2>
                                <p className=""></p>
                                <img className="lazy-img" src="/05.png" data-src="/05.png" alt="" />
                            </div>
                        </div>
                        <div className="submenus">
                            <div className="submenu ">
                                <Link href="/contact" target="_self">ติดต่อเรา</Link>
                            </div>
                            <div className="submenu ">
                                <a data-mid="861" href="http://203.157.65.25/complaint/" target="_self">แจ้งเรื่องร้องเรียน</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu icon-menu ">
                <a className="global-search-toggle" href="#">
                    <div><i className="fas fa-search"></i></div>
                </a>
            </div>
            {/* /.menu */}
        </div>
    )
}
