import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {GoThreeBars, GoX} from 'react-icons/go';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
          setClick(!click)
    }

    return (
        <>
         {/* Main navigation bar + logo */}
        <div className='hidden md:block sticky top-10 z-10'>
            <div className="text-brand-lighter h-4 font-bold flex justify-between items-center mx-24 my-8">
                <div className='hidden md:block'>
                    <Link href='/' passHref>
                    <Image alt="Logo" src="/images/logo.png" width={52} height={52} className="cursor-pointer"></Image>
                    </Link>
                </div>

                <div className="space-x-4 hidden md:block">
                <Link href={'/#home'}>
                    <a className="hover:text-brand-accent">HOME</a>
                </Link>
                <Link href={'/#about'}>
                    <a className="hover:text-brand-accent">ABOUT</a>
                </Link>
                <Link href={'/#projects'}>
                    <a className="hover:text-brand-accent">PROJECTS</a>
                </Link>
                <Link href={'/blog'}>
                    <a className="hover:text-brand-accent">BLOG</a>
                </Link>
                {/* <Link href={'/videos'}> */}
                    <a href="https://www.youtube.com/channel/UC2GdvJFxCkQEJCcDZTp-Dmg/videos" target='_blank' rel='noreferrer' className="hover:text-brand-accent">VIDEOS</a>
                {/* </Link> */}
                <Link href={'/#contacts'}>
                    <a className="hover:text-brand-accent">CONTACTS</a>
                </Link>
                </div>
                            
            </div>
        </div>
     

         {/* Mobile navigation bar + logo */}

         <div className="top-0 h-4 sticky z-10 active:bg-bgColor-cardDark p-4 md:hidden">
            <div className="text-brand-lighter lg:hidden font-bold flex justify-between items-center mx-5 sticky z-10">
                <Link href='/' passHref>
                    <Image alt="Logo" src="/images/logo.png" width={35} height={35}  className="cursor-pointer"></Image>
                </Link>
                <GoThreeBars style={{display:click ? "none" :  "block"}} onClick={handleClick}/>
                <GoX style={{display:click ? "block" :  "none"}} onClick={handleClick}/>
            </div>

            <div style={{display:click ? "block" :  "none"}} className="space-x-4 lg:hidden bg-bgColor-cardDark text-brand-lighter font-bold mx-4 md:mx-16 pt-4 pb-4 z-10">
                <div className="z-10">
                    <Link href={'/#home'}>
                        <a onClick={handleClick} className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark">HOME</a>
                    </Link>
                    <Link href={'/#about'}>
                        <a onClick={handleClick} className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark">ABOUT</a>
                    </Link>
                    <Link href={'/#projects'}>
                        <a onClick={handleClick} className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark">PROJECTS</a>
                    </Link>
                    {/* <Link href={'/blog'}> */}
                        {/* <a onClick={handleClick} className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark">BLOG</a> */}
                        <a href="https://blog.hijabicoder.dev/" target='_blank' rel='noreferrer' className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark">BLOG</a>
                    {/* </Link> */}
                    {/* <Link href={'/videos'}> */}
                        {/* <a onClick={handleClick} className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark">VIDEOS</a> */}
                        <a href="https://www.youtube.com/channel/UC2GdvJFxCkQEJCcDZTp-Dmg/videos" target='_blank' rel='noreferrer' className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark">VIDEOS</a>
                    {/* </Link> */}
                    <Link href={'/#contacts'}>
                        <a onClick={handleClick} className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark">CONTACTS</a>
                    </Link>
                </div>
            </div>
         </div>
        
         </>
    )
}

export default Navbar
