import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [click, setClick] = useState(false);
  
    // useEffect(() => {
    //     document.body.onscroll! > 16 ? document.getElementById("test")!.className = 't' : '';
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [])

    const handleClick = () => {
          setClick(!click)
          console.log(click)
    }

    return (
        <>
        <div id="test" className="text-brand-lighter h-4 font-bold flex justify-between mx-24 top-0 sticky py-4 z-10">
            <div className="hidden lg:block hover:text-brand-accent">
                <Link href={'/'}>
                  <a>LOGO</a>
                </Link>
            </div>

            {/* Main navigation bar */}
            <div className="space-x-4 hidden lg:block">
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

         {/* Mobile navigation bar */}
         <div className="top-0 h-4 sticky z-10 active:bg-bgColor-cardDark p-4 lg:hidden">
         <div className="text-brand-lighter lg:hidden font-bold flex justify-between mx-24 pb-2 z-10">
         <div className="hover:text-brand-accent">
                <Link href={'/'}>
                  <a>LOGO</a>
                </Link>
            </div>
        <button style={{display:click ? "none" :  "block"}} onClick={handleClick}>click here</button>
        <button style={{display:click ? "block" :  "none"}} onClick={handleClick}>x</button>
         </div>

         <div style={{display:click ? "block" :  "none"}} className="space-x-4 lg:hidden bg-bgColor-cardDark text-brand-lighter font-bold mx-24 pt-4 pb-4 z-10">
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
                <Link href={'/blog'}>
                    <a onClick={handleClick} className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark">BLOG</a>
                </Link>
                <Link href={'/videos'}>
                    <a onClick={handleClick} className="block p-4 hover:text-brand-accent hover:bg-brand-hoverDark">VIDEOS</a>
                </Link>
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
