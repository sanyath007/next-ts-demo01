import {
    FaAddressCard,
    FaGavel,
} from 'react-icons/fa'

export default function OptionMenu() {
    return (
        <section id="section-2">
            <div className="container">
                <div className="contents">
                        <a className="content">
                            <div className="wrapper">
                                <div className="text-container">
                                    <h6 className="ellipsis-1">แพลตฟอร์ม</h6>
                                </div>
                                {/* <div className="banner">
                                    <FaAddressCard />
                                </div> */}
                                <div className="order">01</div>
                            </div>
                        </a>
                        <a className="content">
                            <div className="wrapper">
                                <div className="text-container">
                                    <h6 className="ellipsis-1">การเงินและการเบิกจ่าย</h6>
                                </div>
                                {/* <div className="banner">
                                    <i className="icon fas fa-address-card"></i>
                                </div> */}
                                <div className="order">02</div>
                            </div>
                        </a>
                        <a className="content">
                            <div className="wrapper">
                                <div className="text-container">
                                    <h6 className="ellipsis-1">จัดซื้อจัดจ้าง</h6>
                                </div>
                                {/* <div className="banner">
                                    <i className="icon fas fa-address-card"></i>
                                </div> */}
                                <div className="order">03</div>
                            </div>
                        </a>
                        <a className="content">
                            <div className="wrapper">
                                <div className="text-container">
                                    <h6 className="ellipsis-1">ป้องกันควบคุม</h6>
                                </div>
                                {/* <div className="banner">
                                    <i className="icon fas fa-address-card"></i>
                                </div> */}
                                <div className="order">04</div>
                            </div>
                        </a>
                        <a className="content">
                            <div className="wrapper">
                                <div className="text-container">
                                    <h6 className="ellipsis-1">ดาวน์โหลด</h6>
                                </div>
                                {/* <div className="banner">
                                    <i className="icon fas fa-address-card"></i>
                                </div> */}
                                <div className="order">05</div>
                            </div>
                        </a>
                        <a className="content">
                            <div className="wrapper">
                                <div className="text-container">
                                    <h6 className="ellipsis-1">มีเดีย</h6>
                                </div>
                                {/* <div className="banner">
                                    <i className="icon fas fa-address-card"></i>
                                </div> */}
                                <div className="order">06</div>
                            </div>
                        </a>
                        <a className="content">
                            <div className="wrapper">
                                <div className="text-container">
                                    <h6 className="ellipsis-1">ควบคุมภายใน</h6>
                                </div>
                                {/* <div className="banner">
                                    <i className="icon fas fa-address-card"></i>
                                </div> */}
                                <div className="order">07</div>
                            </div>
                        </a>
                        <a className="content">
                            <div className="wrapper">
                                <div className="text-container">
                                    <h6 className="ellipsis-1">คุณธรรม</h6>
                                </div>
                                {/* <div className="banner">
                                    <FaGavel />
                                </div> */}
                                <div className="order">08</div>
                            </div>
                        </a>
                </div>
            </div>
        </section>
    )
}
