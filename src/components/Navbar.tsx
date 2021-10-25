import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className="text-brand-lighter font-bold flex justify-between mx-24 top-0 sticky pt-4 pb-4 z-10">
            <div className="hover:text-brand-accent">
                <Link href={'/'}>
                  <a>LOGO</a>
                </Link>
            </div>
            <div className="space-x-4">
            <Link href={'/#home'}>
                <a className="hover:text-brand-accent">HOME</a>
            </Link>
            <Link href={'/#about'}>
                <a className="hover:text-brand-accent">ABOUT</a>
            </Link>
            <Link href={'/#projects'}>
                <a className="hover:text-brand-accent">PROJECTS</a>
            </Link>
            {/* <Link href={'/blog'}> */}
                <a href="https://blog.hijabicoder.dev/" target='_blank' rel='noreferrer' className="hover:text-brand-accent">BLOG</a>
            {/* </Link> */}
            {/* <Link href={'/videos'}> */}
                <a href="https://www.youtube.com/channel/UC2GdvJFxCkQEJCcDZTp-Dmg/videos" target='_blank' rel='noreferrer' className="hover:text-brand-accent">VIDEOS</a>
            {/* </Link> */}
            <Link href={'/#contacts'}>
                <a className="hover:text-brand-accent">CONTACTS</a>
            </Link>
            </div>
            
            
        </div>
    )
}

export default Navbar
