import { useEffect, useState } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import { getWindowDimensions } from '../../utils'
import { WindowDimension } from '../../models/WindowDimension'

export default function Layout({ children }: { children: any }) {
    const [screen, setScreen] = useState<WindowDimension>({ width: 0, height: 0 })

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
        <>
            <div style={{ minHeight: '100vh' }}>
                <Navbar screenWidth={screen.width} />

                <main className="pt-2">
                    {children}
                </main>

                <Footer />
            </div>
        </>
    )
}
