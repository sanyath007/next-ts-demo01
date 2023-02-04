import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { getWindowDimensions } from '../utils'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import PostList from '../components/posts/post-list'

const inter = Inter({ subsets: ['latin'] })
const initialState = {
    width: 0,
    height: 0
}

export default function Home() {
    const [screen, setScreen] = useState(initialState)

    useEffect(() => {
        function handleResize() {
            setScreen(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-gray-100" style={{ minHeight: '100vh' }}>
                <Navbar screenWidth={screen.width} />

                <main className="container mx-auto my-4 p-4 border" style={{ minHeight: '80vh' }}>
                    <PostList />
                </main>

                <Footer />
            </div>
        </>
    )
}
