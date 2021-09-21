// import logo from '../logo.png'
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
              <Link href='#home'>
                <a className="nav-links">
                  <li >
                  Home 
                  </li> 
                </a>
               </Link>

               <Link href='#about'>
                <a className="nav-links">
                  <li >
                  About
                  </li> 
                </a>
               </Link>

                 <Link href={'#projects'}>
                <a className="nav-links">
                  <li >
                  Projects 
                  </li> 
                </a>
               </Link>

               <Link href='#contacts'>
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