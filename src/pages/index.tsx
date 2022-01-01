import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Hero from '../components/Hero';
import React from 'react';
import Banner from '../components/Banner';
import Projects from '../components/Projects';
import About from '../components/About';
import Contacts from '../components/Contacts';
const Home: NextPage = () => {
 
  
  return (
    <div className="max-w-4xl mx-auto w-4/5">
      <Head>
        <title>Hijabi Coder</title>
        <meta name="description" content="Portfolio version 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* <Button btnText="See Projects" icon={<AiOutlineArrowRight style={{ fontWeight: 'bold'}}/>} /> */}
      <main className="relative">
      <Hero />
      <Banner />
      <CardSection />
      <About />
      <Contacts />
      </main>
      
    </div>
  )
}

export default Home
