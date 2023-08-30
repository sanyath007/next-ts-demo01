import React from 'react'
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
=======
import { useDispatch } from 'react-redux/es/exports';
>>>>>>> aa058b3fc3466f7e60e5f8ead85f5bb85ca849d6
import { toggleSidebar } from '../../features/navbarSlice'

const MenuMobile = () => {
    const dispatch = useDispatch();

    return (
        <div className="mobile-menu" onClick={() => dispatch(toggleSidebar())}>
            <div className="sidenav-btn">
                <div className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default MenuMobile