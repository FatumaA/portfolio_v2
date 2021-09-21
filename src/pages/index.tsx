import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import OtherProjects from '../components/OtherProjects'

const Home: NextPage = () => {
  // const width2 = window.innerWidth
  // const [width, setWidth] = useState(width2)
  // let breakpoint = 775
  
  return (
    <div className='container'>
      <Head>
        <title>Hijabi Coder</title>
        <meta name="description" content="Portfolio version 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          {/* <Navbar className={width <= breakpoint ? 'nav-MobBackground' : 'nav-background'}/> */}
    {/* <Navbar/> */}
    {/* {width <= breakpoint ? <MobileNav/> : <Navbar/>} */}
        <Hero />
        <Banner/>
        <Projects />
        <OtherProjects/>
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default Home
