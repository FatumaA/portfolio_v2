import React, { ReactNode, useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';


type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
       {/* state <= 660 ? <Navbar /> : <MobileNav /> */}
       <Navbar />
            { children }
        <Footer />   
        </>
    )
}

export default Layout;
