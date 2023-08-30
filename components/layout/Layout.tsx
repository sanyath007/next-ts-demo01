import { useEffect, useState } from 'react'
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
import { useSelector } from 'react-redux/es/exports';
>>>>>>> aa058b3fc3466f7e60e5f8ead85f5bb85ca849d6
import Navbar from '../navbar'
import Footer from '../footer'
import { getWindowDimensions } from '../../utils'
import { WindowDimension } from '../../models/WindowDimension'
import Sidebar from '../sidebar/Sidebar'

export default function Layout({ children }: { children: any }) {
    const [screen, setScreen] = useState<WindowDimension>({ width: 0, height: 0 })
    const { isShowSidebar } = useSelector((state: any) => state.navbar);

    useEffect(() => {
        setScreen(getWindowDimensions())
    }, [])

    useEffect(() => {
        function handleResize() {
            setScreen(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="relative">
            <Sidebar isShow={isShowSidebar} />

            <Navbar screenWidth={screen.width} />

            <main className="pt-2">
                {children}
            </main>

            <Footer />
        </div>
    )
}
