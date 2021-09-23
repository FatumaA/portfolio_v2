import React from 'react'
import { HeroInfo, ButtonInfo } from './Data'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='home' className="hero-main-container">
      <div className="hero-section">
      <div className="hero-wrapper-text">
      <h5>{HeroInfo.tagLine}</h5>
      <h1>{HeroInfo.headLine}</h1>
      <p>{HeroInfo.subHeadLine}</p>

      <Link href='/#projects'>
        <a> 
        <button  className='btn-primary'>
          {ButtonInfo.hero}
        </button>
        </a>
      </Link>
    </div>
      

      <div className="hero-wrapper-image">
      <Image src={HeroInfo.Img} alt='hero' layout="fill" />
      </div>
      </div>

    </div> 
    
    
  )
}

export default Hero
