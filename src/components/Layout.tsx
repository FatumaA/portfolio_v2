import React, { ReactNode } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

// import Footer from './Footer';
// import Navbar from './Navbar';
// import MobileNav from './MobileNav';

type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {

    return (
        <>
        <Navbar />
            { children }
        <Footer />   
        </>
    )
}

export default Layout;
