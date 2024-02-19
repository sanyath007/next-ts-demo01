import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Kanit } from '@next/font/google'
import { getWindowDimensions } from '../../utils'
import { WindowDimension } from '../../models/WindowDimension'
import Navbar from '../navbar'
import Footer from '../footer'
import Sidebar from '../sidebar/Sidebar'

const kanit = Kanit({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
});

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
        <div className={kanit.className} style={{ position: 'relative' }}>
            <Sidebar isShow={isShowSidebar} />

            <Navbar screenWidth={screen.width} />

            <main className="pt-2">
                {children}
            </main>

            <Footer />
        </div>
    )
}
