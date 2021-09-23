import React, {useState} from 'react'
// import logo from '../logo.png'
// import { GoThreeBars, GoX } from 'react-icons/go';
import Link from 'next/link'
import Image from 'next/image'

// import { BrowserRouter as Router } from 'react-router-dom'

const MobileNav = () => {

  const [click, setClick] = useState(false);
  
  const onClick = () => {
        setClick(!click)
        
  }
  
  return (
    <>
    {/* <Router> */}
    <nav className="nav-background">
                <Link href='/'>
                  <a> 
                  {/* <Image src={logo} alt='logo'className='logo' layout="fill"/> */}
                  </a>
                </Link>
               

          <ul style={{display:click ? "block" :  "none"}}> 
               <Link href='#home'>
                <a className="nav-links" onClick={onClick}>
                  <li >
                  Home 
                  </li> 
                </a>
               </Link>

               <Link href='#about'>
                <a className="nav-links" onClick={onClick}>
                  <li >
                  About 
                  </li> 
                </a>
               </Link>

                <Link href='#projects'>
                <a className="nav-links" onClick={onClick}>
                  <li >
                  Projects 
                  </li> 
                </a>
               </Link>

                <Link href='#contact'>
                <a className="nav-links" onClick={onClick}>
                  <li >
                  Contact
                  </li> 
                </a>
               </Link>
          </ul>

            {/* <GoThreeBars className="menu-icon" style={{opacity:click ? "0" :  "1"}} onClick={onClick}/> */}
            {/* <GoX className="menu-icon-close"  style={{opacity:click ? "1" :  "0"}} onClick={onClick} /> */}
        </nav> 

        {/* </Router> */}
    
    </>
  )
}

export default MobileNav
