import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { HeroInfo, ButtonInfo } from '../Data'

const Hero = () => {
    return (
        <div id='home' className="top-styles my-14">
        <h5 className="tagline">{HeroInfo.tagLine}</h5>
        <h1 className="headline">{HeroInfo.headLine}</h1>
        <p className="text-center leading-7">{HeroInfo.subHeadLine}</p>
        
        <Link href='/#projects'>
            <a> 
            <Button btnText={ButtonInfo.hero}/>
            </a> 
        </Link>
       
  
      </div>
    )
}

export default Hero
