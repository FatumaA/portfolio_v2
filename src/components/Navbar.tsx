import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className="text-purple-500 font-bold flex justify-between mx-24 top-0 sticky pt-4 pb-4 z-10">
            <div className="hover:text-purple-400">
                <Link href={'/'}>
                  <a>LOGO</a>
                </Link>
            </div>
            <div className="space-x-4">
            <Link href={'/#home'}>
                <a className="hover:text-purple-400">HOME</a>
            </Link>
            <Link href={'/#about'}>
                <a className="hover:text-purple-400">ABOUT</a>
            </Link>
            <Link href={'/#projects'}>
                <a className="hover:text-purple-400">PROJECTS</a>
            </Link>
            <Link href={'/blog'}>
                <a className="hover:text-purple-400">BLOG</a>
            </Link>
            <Link href={'/videos'}>
                <a className="hover:text-purple-400">VIDEOS</a>
            </Link>
            <Link href={'/#contacts'}>
                <a className="hover:text-purple-400">CONTACTS</a>
            </Link>
            </div>
            
            
        </div>
    )
}

export default Navbar
