import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import OtherProjects from '../components/OtherProjects'
import Layout from '../components/Layout'

const Home: NextPage = () => {
 
  
  return (
    <div className='container'>
      <Head>
        <title>Hijabi Coder</title>
        <meta name="description" content="Portfolio version 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Hero />
        <Banner />
        <Projects />
        <OtherProjects />
        <About />
        <Contact />
    </div>
  )
}

export default Home
