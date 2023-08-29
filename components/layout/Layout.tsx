import { useEffect, useState } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import { getWindowDimensions } from '../../utils'
import { WindowDimension } from '../../models/WindowDimension'
import Sidebar from '../sidebar/Sidebar'

export default function Layout({ children }: { children: any }) {
    const [screen, setScreen] = useState<WindowDimension>({ width: 0, height: 0 })
    const [toggleSidebar, setToggleSidebar] = useState(true)

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
            <Sidebar isShow={toggleSidebar} />

            <Navbar screenWidth={screen.width} />

            <main className="pt-2">
                {children}
            </main>

            <Footer />
        </div>
    )
}
