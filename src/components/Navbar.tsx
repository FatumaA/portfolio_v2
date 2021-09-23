
// import {BrowserRouter as Router} from 'react-router-dom'

import Link from 'next/link'

const Navbar = () => {
  
  return (
    <>
    {/* <Router> */}
    <nav className='nav-background'>
                {/* <a href='/' alt='logo'> 
                <img src={logo} alt='logo'className='logo'/>
                </a> */}

          <ul> 
              <Link href='/#home'>
                <a className="nav-links">
                  <li >
                  Home 
                  </li> 
                </a>
               </Link>

               <Link href='/#about'>
                <a className="nav-links">
                  <li >
                  About
                  </li> 
                </a>
               </Link>

                 <Link href='/#projects'>
                <a className="nav-links">
                  <li >
                  Projects 
                  </li> 
                </a>
               </Link>

               <Link href='/videos'>
                <a className="nav-links">
                  <li >
                  Videos
                  </li> 
                </a>
               </Link> 

               
               <Link href='/blog'>
                <a className="nav-links">
                  <li >
                  Blog
                  </li> 
                </a>
               </Link>  

               <Link href='/#contact'>
                <a className="nav-links">
                  <li >
                  Contacts 
                  </li> 
                </a>
               </Link>   
                   
          </ul>
           
        </nav> 

        {/* </Router> */}
    
    </>
  )
}

export default Navbar